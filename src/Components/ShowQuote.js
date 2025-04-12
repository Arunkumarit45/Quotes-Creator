import React, { useEffect, useState } from 'react'

function ShowQuote({quote}) {

  const[showModal,setShowModal]=useState(false);

  useEffect(()=>{

      const handleEscKey = (e)=>{
        if(e.key==='Escape'){
          setShowModal(false);
        }
      };

      if(showModal){
        window.addEventListener('keydown',handleEscKey)
      }else{
        window.removeEventListener('keydown',handleEscKey)
      };

      return ()=>{
        window.removeEventListener('keydown',handleEscKey)
      };

  },[showModal])

  return (
    <div>
      <div className='quote-card' onDoubleClick={()=>setShowModal(true)}>

        <figure>
            <img src={quote.mediaUrl} alt={`${quote.username} pic`} />
        </figure>

        <div className='quote-text'>{quote.text}</div>

        <div className='user-date'>
            <div>{quote.username}</div>
            <div>{ new Date ( quote.updatedAt ).toLocaleString() }</div>
        </div>

      </div>

      { showModal && (
          
          <div className='modal-open' onClick={()=>setShowModal(false)}> 
            
            <div className='modal-content' onClick={e => e.stopPropagation()}>
            
              <img src={quote.mediaUrl} alt={`Full view of ${quote.username} pic` } />
              
              <h2>{quote.text}</h2>
            
              <p><strong>Posted by:</strong> {quote.username}</p>
            
              <p><strong>Updated at:</strong> {new Date(quote.updatedAt).toLocaleString()}</p>
            
              <button onClick={() => setShowModal(false)}>Close</button>
          
            </div>

          </div>
      )}

    </div>
  )
}

export default ShowQuote;