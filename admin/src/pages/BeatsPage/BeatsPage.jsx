import React, { useContext, useEffect, useRef, useState } from 'react'
import { assets } from '../../assets/assets'
import './BeatsPage.css'
import  toast from 'react-hot-toast'
import axios from 'axios'
import {ManagementContext} from '../../Context/ManagementContext'

const BeatsPage = () => {
  const [thumbnail, setThumbnail] = useState();
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [price,setPrice]=useState();
  const [tags,setTags]=useState("");
  const [bpm,setBpm]=useState("");
  const [key,setKey]=useState("");
  const [genre,setGenre]=useState("");
  const [audio, setAudio] = useState(null);

  const [loading,setLoading]=useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const audio_tag = useRef(null);

  const {backend_url,beats,currency}=useContext(ManagementContext)

  

  const handleChange = (e) => {
    setIsChecked(e.target.checked);
  }

  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newAudioSrc = file;
      if (audio) {
        URL.revokeObjectURL(audio)
      }
      setAudio(newAudioSrc);
    }
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      setLoading(true)
      const tagMetaData=JSON.stringify({key,bpm,genre,tags});
      const formData=new FormData();
      thumbnail && formData.append("thumbnail",thumbnail);
      formData.append("title",title);
      formData.append("description",description);
      formData.append("price",price);
      formData.append("tags",tagMetaData);
      audio && formData.append("audio",audio);
      formData.append("isFeatured",isChecked);

      const response=await axios.post(`${backend_url}/api/admin/addBeat`,formData,);
      console.log(response);
      
      if(response.data.success){
        toast.success(response.data.message);
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

const deleteBeat=async(id)=>{
  try {
    const response=await axios.post(`${backend_url}/api/admin/deleteBeat/${id}`);
    if(response.data.success){
      toast.success(response.data.message);
    }else{
      toast.error(response.data.message)
    }
  } catch (error) {
    toast.error(error)
  }
}

const featureBeat=async(id)=>{
  try {
    const response=await axios.post(`${backend_url}/api/admin/featureBeat/${id}`);
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


useEffect(() => {  
  return () => {
    if (audio) {
      URL.revokeObjectURL(audio)
    }
  }
}, [audio])
return (
  <>
    <div className="beats">
      {/*------------------------*/}
      <div className="beats-header">
        <h2>BEATS MANAGEMENT</h2>
      </div>
      {/*------------------------*/}
      <div className="beats-body">
        <div className="beats-body-left">
          {
            beats.map((beat)=>(
              <div className="beat-class">
                <div className="beat-class-details">
                  <div className="beat-image">
                    <img src={beat?.thumbnail} alt="thumbnail" />
                  </div>
                  <div className="beat-title">
                    <p>{beat?.title}</p>
                  </div>
                  <div className="beat-price">
                    <p>{currency} {beat?.price}</p>
                  </div>
                </div>
                <div className="beat-class-date">
                  <p>
                    {new Date(beat?.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                  </p>
                </div>
                <div className="beat-class-status">
                  <p>{beat?.isFeatured?"Featured":"Not Featured"}</p>
                </div>
                <div className="beat-class-actions">
                  <div className="beat-class-actions-left">
                    <img onClick={()=>(featureBeat(beat?._id))} src={beat.isFeatured? assets.approve:assets.approved} alt="feature" />
                  </div>
                  <div className="beat-class-actions-right">
                    <img onClick={()=>(deleteBeat(beat?._id))} src={assets.deleteI} alt="delete" />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="beats-body-right">
          <form method='post' onSubmit={handleSubmit}>
             <div className="form-img">
              <label htmlFor="image">
                <p>{thumbnail && thumbnail ? thumbnail.name: "Click to select Thumbnail"}</p>
                <img src={thumbnail && thumbnail ? URL.createObjectURL(thumbnail) : assets.fileI} alt="add beat" />
                <input
                  type="file"
                  onChange={(e) => setThumbnail(e.target.files[0])}
                  name="image"
                  id="image"
                  hidden
                />
              </label>
            </div>
            <div className="form-class">
              <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title' />
            </div>
            <div className="form-class">
              <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Description' />
            </div>
            <div className="form-class">
              <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)} placeholder='Price' />
            </div>
            <div id='form-class-small' className="form-class-small">
              <input type="text" placeholder='bpm' value={bpm} onChange={(e)=>setBpm(e.target.value)} />
              <input type="text" placeholder='Key' value={key} onChange={(e)=>setKey(e.target.value)} />
              <input type="text" placeholder='genre' value={genre} onChange={(e)=>setGenre(e.target.value)} />
              <input type="text" placeholder='Tags' value={tags} onChange={(e)=>setTags(e.target.value)} />
            </div>
            <div className="form-class-audio">
              <label htmlFor="beat">
              <p>AUDIO FILE</p>
              <input 
              type="file"  
              onChange={handleAudioChange}
              id='beat'
              name='beat'
              hidden
              />
              </label>
            </div>
            
            <div className="form-class-check">
              <p>Select to feature beat</p>
              <input type="checkbox" checked={isChecked} onChange={handleChange} />
            </div>
            <div className="form-class">
              <button type='submit'>{loading?"UPLOADING":"UPLOAD"}</button>
            </div>
            <div className="form-class-audio-select">
              {
                audio && audio
                  ?
                  <audio 
                  ref={audio_tag} 
                  controls 
                  preload="auto" 
                  autoPlay
                  controlsList="nodownload" 
                  onContextMenu={(e) => e.preventDefault()}
                  >
                    <source src={URL.createObjectURL(audio)} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  :
                  <></>
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
)
}

export default BeatsPage;