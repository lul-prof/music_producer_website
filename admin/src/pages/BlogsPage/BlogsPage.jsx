import React, { useContext, useState } from 'react'
import './BlogsPage.css'
import { assets } from '../../assets/assets'
import toast from 'react-hot-toast';
import axios from 'axios';
import { ManagementContext } from '../../Context/ManagementContext';

const BlogsPage = () => {
  const [image,setImage]=useState(null);
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [tags,setTags]=useState("");
  const [isFeatured,setIsFeatured]=useState(false);
  const [loading,setLoading]=useState(false);
  const handleChange=(e)=>{
    setIsFeatured(e.target.checked);
  }
  const {backend_url,blogs}=useContext(ManagementContext);


  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      setLoading(true)
      const formData=new FormData();

      image && formData.append("image",image);
      formData.append("title",title);
      formData.append("description",description);
      formData.append("tags",tags);
      formData.append("isFeatured",isFeatured);
      const response=await axios.post(`${backend_url}/api/admin/addBlog`,formData,);
      console.log(response);
      if(response.data.success){
        toast.success(response.data.message)
        setLoading(false)
      }else{
        toast.error(response.data.message)
      }
      
    } catch (error) {
      toast.error(error)
    }finally{
      setLoading(false)
    }
  }

  const deleteBlog=async(id)=>{
    try {
      const response=await axios.post(`${backend_url}/api/admin/deleteBlog/${id}`);
      if(response.data.success){
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error)
    }
  }

  const featureBlog=async(id)=>{
  try {
    const response=await axios.post(`${backend_url}/api/admin/featureBlog/${id}`);
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
    <div className="blogs">
      <div className="blogs-header">
        <h2>BLOGS MANAGEMENT</h2>
      </div>
      <div className="blogs-body">
        {/*----------------------*/}
        <div className="blogs-left">
          {
            blogs.map((blog)=>(
              <div className="blog">
                <div className="blog-details">
                  <div className="blog-image">
                    <img src={blog?.image} alt="image"/>
                  </div>
                  <div className="blog-title">
                    <p>{blog?.title}</p>
                  </div>
                </div>
                <div className="blog-date">
                  <p>
                    {new Date(blog?.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                    })}
                  </p>
                </div>
                <div className="blog-status">
                  <p>{blog?.isFeatured?"Featured":"Not Featured"}</p>
                </div>
                <div className="blog-actions">
                  <div className="blog-actions-left">
                    <img onClick={()=>(featureBlog(blog?._id))} src={blog?.isFeatured?assets.approve:assets.approved} alt="image" />
                  </div>
                  <div className="blog-actions-right">
                    <img src={assets.deleteI} alt="delete" onClick={()=>(deleteBlog(blog?._id))} />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        {/*----------------------*/}
        <div className="blogs-right">
          <form method='post' onSubmit={handleSubmit}>
            <div className="form-class-img">
              {image &&  image?<img src={URL.createObjectURL(image)} alt="image" />:<></>}
              <label htmlFor="image">
                <p>Click To select an image</p>
                <input 
                type="file" 
                id='image'
                name='image'
                onChange={(e)=>(setImage(e.target.files[0]))}
                hidden
                />
              </label>
            </div>
            <div className="form-class">
              <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Blog title' />
            </div>
            <div className="form-class">
              <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Blog Description' />
            </div>
            <div className="form-class">
              <input type="text" value={tags} onChange={(e)=>setTags(e.target.value)} placeholder='Tags e.g. Fruity, spotify...' />
            </div>
            <div className="form-class-check">
              <p>Click to feature on homepage</p>
              <input checked={isFeatured} onChange={handleChange} type="checkbox"  />
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

export default BlogsPage