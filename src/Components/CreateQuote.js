import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateQuote() {

    const[image,setImage]=useState(null);
    const[text,setText]=useState('');
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token');

    const ImageUpload = async () => {
    
        const fromdata = new FormData();
        fromdata.append("file",image);

        const response = await fetch(
            'https://crafto.app/crafto/v1.0/media/assignment/upload',{
                method : "POST",
                body : fromdata,
            }
        );

        if(response.ok){
    
            const data = await response.json();
            console.log("Uploaded Image Response", data);

            return data[0]?.url;
    
        }else{
    
            throw new Error("Image Upload Failed");
    
        }

    };
  
    const handleSubmit = async (e) =>{

        e.preventDefault();

        try{

            const mediaUrl = await ImageUpload();
            
            if(!mediaUrl){
                alert("Image Upload Failed. Try After Some Time")
                return;
            }

            const response = await fetch(
                'https://assignment.stage.crafto.app/postQuote',{
                    method: "POST",
                    headers:{
                        Authorization  : token,
                        "Content-Type" : "application/json"              
                    },
                    body : JSON.stringify({text,mediaUrl})
                }
            )

            if(response.ok){

                alert("Quote Successfully Created");
                navigate('/quotes');
            
            }else{
            
                alert("Failed to Create Quote")
            
            }

        }
        catch(error){
            
            console.error(error);
            alert("Something Went Wrong. Please Try Again")
        
        }
    }

  return (
    <div className="create-quote-container">
        <div className="create-quote">
            <h2>CreateQuote</h2>
            <form onSubmit={handleSubmit} className="create-quote-form">
            
                <div className="image">
                    <label>Select Image File</label>
                    <input 
                        type='file'
                        onChange={ (e) => setImage( e.target.files[0] ) }
                        required
                    />
                </div>
            
                <div className="text">
                    <label>Quote</label>
                    <textarea
                        placeholder="Enter your quote"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    />
                </div>

                <div className="submit-btn">
                    <button className="back-to-quotes" onClick={()=> navigate('/quotes')}>Back</button>
                    <button type="submit">Submit</button>
                </div>

        </form>
        </div>
    </div>
  )
}

export default CreateQuote;