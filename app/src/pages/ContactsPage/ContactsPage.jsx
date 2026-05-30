import React, { useContext, useState } from 'react'
import './ContactsPage.css'
import MapComponent from '../../components/MapComponent/MapComponent'
import { ShopContext } from '../../Context/ShopContext'
import axios from 'axios'
import toast from 'react-hot-toast'
import { assets } from '../../assets/assets'

const ContactsPage = () => {
    const {backend_url}=useContext(ShopContext);

    const [name,setName]=useState("");
    const [email,setEmail]=useState("")
    const [message,setMessage]=useState("");

    const sendEmail=async(e)=>{
        e.preventDefault();
        try {
            const formData=new FormData();
            formData.append("name",name);
            formData.append("email",email);
            formData.append("message",message);
            const response=await axios.post(`${backend_url}/api/user/contact`,{name,email,message},);
            console.log(response);
            if(response.data.success){
                toast.success(response.data.message);
            }else{
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            
        }
    }
  return (
    <>
    <div className="contacts">
        {/*-----------------------*/}
        <div className="contacts-top">
            <div className="contacts-top-left">
                <div className="contacts-top-left-header">
                    <h3>CONTACT INFORMATION</h3>
                    <p>Have questions or need help? Our team is always ready to assist you with professional solutions and reliable support.</p>
                </div>
                <div className="contacts-top-left-options">
                    <div className="contacts-top-left-option">
                        <div className="contacts-top-left-option-left">
                            <img src={assets.phoneI} alt="image" />
                        </div>
                        <div className="contacts-top-left-option-right">
                            <p>Phone Number</p>
                            <span>(+254) 7939-09678</span>
                        </div>
                    </div>
                    <hr />
                     <div className="contacts-top-left-option">
                        <div className="contacts-top-left-option-left">
                            <img src={assets.emailI} alt="image" />
                        </div>
                        <div className="contacts-top-left-option-right">
                            <p>Email Address</p>
                            <span>thedon254@gmail.com</span>
                        </div>
                    </div>
                    <hr />
                     <div className="contacts-top-left-option">
                        <div className="contacts-top-left-option-left">
                            <img src={assets.time} alt="image" />
                        </div>
                        <div className="contacts-top-left-option-right">
                            <p>Opening Hours</p>
                            <span>Mon - Fri 5:00 Am - 12:00 Am</span>
                        </div>
                    </div>
                    <hr />
                     <div className="contacts-top-left-option">
                        <div className="contacts-top-left-option-left">
                            <img src={assets.locationI} alt="image" />
                        </div>
                        <div className="contacts-top-left-option-right">
                            <p>Our Location</p>
                            <span>Tsavo, Fedha</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contacts-top-right">
                <div className="contacts-top-right-header">
                    <img src={assets.bullet2} alt="image" />
                    <p>GET IN TOUCH</p>
                </div> 
                <div className="contacts-top-right-mid">
                    <p>GET IN TOUCH</p>
                    <span>We would love to hear about your project and help you give your music a new meaning. Fill out the contact form and our team will get back to you soon with a great solution.</span>
                </div>    
                <div className="contacts-top-right-form">
                    <form method='post' onSubmit={sendEmail}>
                        <div className="form-class-s">
                            <input type="text"  id="name" value={name} onChange={(e)=>(setName(e.target.value))} placeholder='Your name' required/>
                            <input type="email"  id="email" value={email} onChange={(e)=>(setEmail(e.target.value))} placeholder='Email Address' required />
                        </div>
                        <div className="form-class-l">
                            <input type="tel"  placeholder='Phone Number'/>
                        </div>
                        <div className="form-class">
                            <textarea id="message" value={message} onChange={(e)=>(setMessage(e.target.value))} placeholder='Your Message' required></textarea>
                        </div>
                        <div className="form-btn">
                            <button>Send Message</button>
                        </div>
                    </form>
                </div>               
            </div>
        </div>
        {/*-----------------------*/}
        <div className="contacts-bottom">
            <div className="contacts-bottom-header">
                
                <div className="contacts-bottom-header-top">
                    <img src={assets.bullet2} alt="image" />
                    <p>OUR LOCATION</p>
                </div>
                <p>VISIT OUR STUDIO IN PERSON FOR CONSULTATIONS</p>
            </div>
            <div className="contacts-bottom-map">
                <MapComponent/>
            </div>
        </div>
    </div>
    </>
  )
}

export default ContactsPage