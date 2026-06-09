import React, { useState } from 'react'
import './MerchandisePage.css'
import { assets } from '../../assets/assets'
import {toast} from 'react-hot-toast'
import axios from 'axios'
import { useContext } from 'react'
import { ManagementContext } from '../../Context/ManagementContext'


const MerchandisePage = () => {
  const [image1,setImage1]=useState(null);
  const [image2,setImage2]=useState(null);
  const [isFeatured,setIsFeatured]=useState(false);
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [price,setPrice]=useState();
  const [quantity,setQuantity]=useState();
  const [loading,setLoading]=useState(false);
  const {currency, backend_url,merchandise}=useContext(ManagementContext);

  const handleChange=(e)=>{
    setIsFeatured(e.target.checked);
  }

  const handleSumit=async(e)=>{
    e.preventDefault();
    try {
      setLoading(true)
      const formData=new FormData();
      image1 && formData.append("image1",image1);
      image2 && formData.append("image2",image2);
      formData.append("title",title);
      formData.append("description",description);
      formData.append("price",price);
      formData.append("quantity",quantity);
      formData.append("isFeatured",isFeatured);
      const response=await axios.post(`${backend_url}/api/admin/addMerchandise`,formData,)
      if(response){
        console.log(response);   
        toast.success(response.data.message);
        setLoading(false)
      }
    } catch (error) {
      toast.error(error)
    }finally{
      setLoading(false);
    }
  }

  const deleteMerch=async(id)=>{
    try {
      const response=await axios.post(`${backend_url}/api/admin/deleteMerchandise/${id}`);
      if(response.data.success){
        toast.success(response.data.message);
      }
      
    } catch (error) {
      toast.error(error)
    }
  }
  const featureMerch=async(id)=>{
  try {
    const response=await axios.post(`${backend_url}/api/admin/featureMerch/${id}`);
    if(response.data.success){
      toast.success(response.data.message)
    }else{
      toast.error(response.data.message)
    }
  } catch (error) {
    console.log(error);
    toast.error(error.message)
  }
}
  return (
    <>
    <div className="merchandise">
      <div className="merchandise-header">
        <h2>MERCHANDISE MANAGEMENT</h2>
      </div>
      <div className="merchandise-body">
        {/*----------------------------*/}
        <div className="merchandise-left">
          {
            merchandise.map((merch)=>(
              <>
              <div className="merch">
                <div className="merch-details">
                  <div className="merch-image">
                    <img src={merch?.image[0]} alt="image" />
                  </div>
                  <div className="merch-title">
                    <p>{merch?.title}</p>
                  </div>
                  <div className="merch-price">
                    <p>{currency} {merch?.price}</p>
                  </div>
                </div>
                <div className="merch-date">
                  <p>
                    {new Date(merch?.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                    })}
                  </p>
                </div>
                <div className="merch-quantity">
                  <p>{merch?.quantity} items</p>
                </div>
                <div className="merch-status">
                  <p>{merch?.isFeatured?"Featured":"Not Featured"}</p>
                </div>
                <div className="merch-actions">
                  <div className="merch-actions-left">
                    <img src={merch?.isFeatured? assets.approve:assets.approved} alt="featured" onClick={()=>(featureMerch(merch?._id))} />
                  </div>
                  <div className="merch-actions-right">
                    <img src={assets.deleteI} alt="delete"  onClick={()=>(deleteMerch(merch?._id))}/>
                  </div>
                </div>
              </div>
              <hr />
            </>         
            ))
          }
        </div>
        {/*----------------------------*/}
        <div className="merchandise-right">
            <form method='post' onSubmit={handleSumit} >
              <div className="form-class-img">
                <div className="form-class-img-left">
                  <label htmlFor="image1">
                    {image1 && <img src={URL.createObjectURL(image1)} alt="image1" /> }
                    <p>Image 1</p>
                    <input 
                    type="file"
                    id='image1'
                    name='image1'
                    hidden
                    onChange={(e)=>(setImage1(e.target.files[0]))}
                     />
                  </label>
                </div>
                <div className="form-class-img-right">
                  <label htmlFor="image2">
                    {image2 && <img src={URL.createObjectURL(image2)} alt="image2" /> }
                    <p>Image 2</p>
                    <input 
                    type="file"
                    id='image2'
                    name='image2'
                    hidden
                    onChange={(e)=>(setImage2(e.target.files[0]))}
                     />
                  </label>
                </div>
              </div>
              <div className="form-class">
                <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
              </div>
              <div className="form-class">
                <input type="text" placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)} />
              </div>
              <div className="form-class">
                <input type="number" placeholder='Quantity' value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
              </div>
              <div className="form-class">
                <input type="number" placeholder='Price' value={price} onChange={(e)=>setPrice(e.target.value)} />
              </div>
              <div className="form-class-check">
                <p>Selct to feature on homepage</p>
                <input type="checkbox" checked={isFeatured} onChange={handleChange}/>
              </div>
              <div className="form-class-btn">
                <button type='submit'>{loading?"UPLOADING":"UPLOAD"}</button>
              </div>
            </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default MerchandisePage