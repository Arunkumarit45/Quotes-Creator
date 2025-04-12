import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ShowQuote from './ShowQuote';

function Showlist() {

    const[quotes,setQuotes]=useState([]);
    const[offset,setOffset]=useState(0);
    const[hasmore,setHasmore]=useState(true);
    const navigate = useNavigate();
    const token = sessionStorage.getItem('token'); 


    const fetchQuotes = async () =>{

        const response = await fetch(`https://assignment.stage.crafto.app/getQuotes?limit=20&offset=${offset}`,{
            method : "GET",
            headers : { Authorization : token }
        });

        if(response.ok) {

            const result = await response.json();
            
            console.log("Array that we Get: ", result);

            const arr = Array.isArray(result) ? result : result.data;

            if(!arr || arr.length===0){
                setHasmore(false)
            }else{
                setQuotes( data => [...data,...arr] );
                setOffset( val => val + 20);
            }
        
        } else {
            alert("Failed to Fetch Quotes");
            return;
        }         

    };

    useEffect(() => {
        if(token) fetchQuotes();
        // eslint-disable-next-line
      }, [token]);

    return (

        <div className='show-list'>

            <h2>Quotes</h2>

            <div className='quotes-wrapper'>

                {
                    quotes.map((quote,index)=>(
                        <ShowQuote quote={quote} key={index}/>
                    ))

                }
            
            </div>        

            {   hasmore && (
            
                <button onClick={fetchQuotes} className="load-more">
                    Load More
                </button>
        
            )}

            <button onClick={ () => navigate('/create-quote') } className='fixed'> + </button>

        </div>

    )
}

export default Showlist;