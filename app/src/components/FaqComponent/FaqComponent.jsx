import React, { useState } from 'react'
import {assets, faqs} from '../../assets/assets'
import './FaqComponent.css'
import {Link} from 'react-router-dom'

const FaqComponent = () => {
  const [open,setOpen]=useState(false);
  const [id,setId]=useState("");
  return (
    <>
    <div className="faqs">
      {/*-----------------------*/}
      <div className="faqs-header">
        <div className="faqs-header-top">
          <h2>HAVE QUESTIONS?</h2>
        </div>
        <div className="faqs-header-bottom">
          <h3>Clients often struggle to understand beat licensing</h3>
        </div>
      </div>
      {/*-----------------------*/}
      <div className="faqs-container">
        {
          faqs.map((faq)=>(
            <div key={faq._id} className="faq">
              <div className="faq-title">
                <div className="faq-title-top">
                  <p>{faq.faq}</p>
                  <img src={open && faq._id===id?assets.minusI:assets.addI} alt="preview" onClick={()=>(setOpen(!open),setId(faq._id))} />
                </div>
                {
                  open && faq._id===id
                  ?
                  <div className="faq-title-bottom">
                    <p>{faq.ans}</p>
                  </div>
                  :
                  <></>
                }
                
              </div>
            </div>
          ))
        }
      </div>
      {/*-----------------------*/}
      <div className="faqs-btn">
        <Link to={'/contactUs'}><button>ASK A QUESTION</button></Link>
      </div>
    </div>
    </>
  )
}

export default FaqComponent