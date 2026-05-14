import React, { useContext, useEffect, useState } from 'react'
import './RevenuePage.css'
import { assets } from '../../assets/assets'
import axios from "axios";
import { ManagementContext } from '../../Context/ManagementContext';
import toast from 'react-hot-toast';

const RevenuePage = () => {
  const [artist,setArtist]=useState("");
  const [activity,setActivity]=useState("");
  const [total,setTotal]=useState("");
  const [paid,setPaid]=useState("");
  const [phone,setPhone]=useState("");
  {/*Existing Invoice for edit*/}
  const [artist2,setArtist2]=useState("");
  const [iid,setIid]=useState("");
  const [activity2,setActivity2]=useState("");
  const [total2,setTotal2]=useState("");
  const [paid2,setPaid2]=useState("");
  const [phone2,setPhone2]=useState("");

  const { backend_url } = useContext(ManagementContext);
  const [invoices,setInvoices]=useState([]);

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
      const response=await axios.post(`${backend_url}/api/admin/addInvoice`,{artist,activity,total,paid,phone});
      console.log(response);
      if(response.data.success){
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const deleteInvoice=async(id)=>{
    try {
      const response=await axios.post(`${backend_url}/api/admin/deleteInvoice/${id}`);
      if(response.data.success){
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const editInvoice=async(id)=>{
    try {
      document.getElementById("revenue-mid").style.display="block";
      document.getElementById("revenue-bottom").style.display="none"
      const invoice=invoices.find(inv=>inv._id===id);
      if(invoice){
        setArtist2(invoice.artist)
        setActivity2(invoice.activity)
        setTotal2(invoice.total)
        setPaid2(invoice.paid)
        setPhone2(invoice.phone)
        setIid(id);
      }else{
        toast.error('Could not edit invoice. Try Again!!!')
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  const updateInvoice=async(e)=>{
    e.preventDefault()
    try {
      const response=await axios.post(`${backend_url}/api/admin/editInvoice/${iid}`,{artist:artist2,activity:activity2,total:total2,paid:paid2,phone:phone2})
      if(response.data.success){
        toast.success(response.data.message)
        document.getElementById("revenue-mid").style.display="none";
        document.getElementById("revenue-bottom").style.display="block"
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    const fetchInvoices=async()=>{
      try {
        const response=await axios.get(`${backend_url}/api/admin/invoices`);
        console.log(response);
        if(response.data.success){
          setInvoices(response.data.payments)
        }else{
          toast.error(response.data.message);
        }
        
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchInvoices()
  },[backend_url])
  return (
    <div className="revenue">
      
      <div className="revenue-top">
        <div className="revenue-top-header">
          <h2>INVOICE TRACKING</h2>
        </div>
        <table border={1}>
          {/*-------Header--------*/}
          <tr>
            <td className='header'>ID</td>
            <td className='header'>Name</td>
            <td className='header'>Phone</td>
            <td className='header'>Paid</td>
            <td className='header'>Total</td>
            <td className='header'>Pending</td>
            <td className='header'>Activity</td>
            <td className='header'>Update</td>
          </tr>
          {/*-------Data--------*/}
          {
            invoices.map((pay,index)=>(
              <tr key={pay._id} className='content'>
                <td>{index+1}</td>
                <td>{pay.artist}</td>
                <td>{pay.phone}</td>
                <td>{pay.paid}</td>
                <td>{pay.total}</td>
                <td>{pay.total-pay.paid}</td>
                <td>{pay.activity}</td>
                <td>
                  {
                    <>
                    <img src={assets.edit} alt="edit" onClick={()=>(editInvoice(pay._id))} />

                    <img src={assets.deleteI} alt="delete" onClick={()=>(deleteInvoice(pay._id))}/>
                    </>
                  }
                </td>
              </tr>
            ))
          }
        </table>
      </div>

      {/*-------Mid Class--------*/}
      <div id='revenue-mid' className="revenue-mid">
        <div className="revenue-mid-header">
          <h2>Edit Invoice</h2>
        </div>
         <form method='post' onSubmit={updateInvoice}>
          <div className="revenue-form-class">
                <label htmlFor="artist">Artist</label>
                <br />
                <input type="text" value={artist2} onChange={(e)=>(setArtist2(e.target.value))} required/>
              </div>
              <div className="revenue-form-class">
                <label htmlFor="activity">Activity</label>
                <br />
                <select name="activity" id="activity" value={activity2} onChange={(e)=>setActivity2(e.target.value)} required>
                  <option value="full project">Full Project</option>
                  <option value="vocal recording">Vocal Recording</option>
                  <option value="mixing and mastering">Mixing & Mastering</option>
                  <option value="mixing">Mixing</option>
                  <option value="mastering">Mastering</option>
                  <option value="beat making">Beat Making</option>
                  <option value="music school">Music School</option>
                </select>
                
              </div>
              <div className="revenue-form-class">
                <label htmlFor="total">Total</label>
                <br />
                <input type="text" value={total2} onChange={(e)=>(setTotal2(e.target.value))} required />
              </div>
              <div className="revenue-form-class">
                <label htmlFor="paid">Paid</label>
                <br />
                <input type="text" value={paid2} onChange={(e)=>(setPaid2(e.target.value))} required/>
              </div>
              <div className="revenue-form-class">
                <label htmlFor="phone">Phone</label>
                <br />
                <input type="text" value={phone2} onChange={(e)=>(setPhone2(e.target.value))} required/>
              </div>
              <div className="revenue-form-btn">
                <button type='submit'>UPDATE</button>
              </div>
          </form> 
      </div>

      {/*-------Bottom Class--------*/}
      <div id='revenue-bottom' className="revenue-bottom">
          <div className="revenue-form">
            <div className="revenue-form-header">
              <h2>ADD INVOICE</h2>
            </div>
            <form method='post' onSubmit={handleSubmit}>
              <div className="revenue-form-class">
                <label htmlFor="artist">Artist</label>
                <br />
                <input type="text" value={artist} onChange={(e)=>(setArtist(e.target.value))} required/>
              </div>
              <div className="revenue-form-class">
                <label htmlFor="activity">Activity</label>
                <br />
                <select name="activity" id="activity" value={activity} onChange={(e)=>setActivity(e.target.value)} required>
                  <option value="full project">Full Project</option>
                  <option value="vocal recording">Vocal Recording</option>
                  <option value="mixing and mastering">Mixing & Mastering</option>
                  <option value="mixing">Mixing</option>
                  <option value="mastering">Mastering</option>
                  <option value="beat making">Beat Making</option>
                  <option value="music school">Music School</option>
                </select>
                
              </div>
              
              <div className="revenue-form-class">
                <label htmlFor="total">Total</label>
                <br />
                <input type="text" value={total} onChange={(e)=>(setTotal(e.target.value))} required />
              </div>
              <div className="revenue-form-class">
                <label htmlFor="paid">Paid</label>
                <br />
                <input type="text" value={paid} onChange={(e)=>(setPaid(e.target.value))} required/>
              </div>
              <div className="revenue-form-class">
                <label htmlFor="phone">Phone</label>
                <br />
                <input type="text" value={phone} onChange={(e)=>(setPhone(e.target.value))} required/>
              </div>
              <div className="revenue-form-btn">
                <button type='submit'>ADD</button>
              </div>
            </form>
          </div>
         
      </div>
    </div>
  )
}

export default RevenuePage