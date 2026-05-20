import React, { useState } from 'react'
import './FaqComponent.css'
import { assets, faqs } from '../../assets/assets'
import {Link} from 'react-router-dom'

const FaqComponent = () => {
  const [open, setOpen]=useState(false)
  const [id,setId]=useState("")
  return (
    <>
    <section className="faq">
      <div className="faq-circle">

      </div>
        {/*-----------------------*/}
        <div className="faq-header">
           <div className="faq-header-top">
            <h1>FREQUENTLY ASKED QUESTIONS</h1>
           </div>
           <div className="faq-header-mid">
            <p>For some people beat licensing can be confusing. You might have a bunch of questions about it. We strive to make sure you understand it. Reach out of you still have questions.</p>
           </div>
           <div className="faq-header-bottom">
           <Link to={'/contactUs'}> <button>CONTACT US</button></Link>
           </div>
        </div>
        {/*-----------------------*/}
        <div className="faqs">
          {
            faqs.map((faq)=>(
              <div key={faq._id} id='faq-container' className="faq-container">
                <div className="faq-title">
                  <img key={faq._id} src={open&&id===faq._id?assets.preview_y:assets.preview} alt="preview" onClick={()=>(setOpen(!open),setId(faq._id))}/>
                  <h1>{faq.faq}</h1>
                </div>
                
                {
                  open?
                  id===faq._id?
                  <div id='faq-answer' className="faq-answer">
                    <p>{faq.ans}</p>
                </div>
                :
                <></>
                :
                <></>
                }
              </div>
              
            ))
          }
        </div>
    </section>
    </>
  )
}

export default FaqComponent