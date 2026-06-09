import React, { useContext } from 'react'
import './SubscribersPage.css'
import { ManagementContext } from '../../Context/ManagementContext'
import {assets} from '../../assets/assets'
import axios from 'axios'
import toast from 'react-hot-toast'

const SubscribersPage = () => {
  const {subscribers,backend_url}=useContext(ManagementContext);
  const deleteSubscriber=async(id)=>{
    try {
      const response=await axios.post(`${backend_url}/api/admin/deleteSubscriber/${id}`);
      if(response.data.success){
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error)
    }
  }
  return (
    <>
    <div className="subscribers">
      <div className="subscribers-top">
        <h2>SUBSCRIBERS MANAGEMENT</h2>
      </div>
      <div className="subscribers-class">
        <div className="subscriber-header">
          <div className="subscriber-header-id">
            <h3>ID</h3>
          </div>
          <div className="subscriber-header-email">
            <h3>EMAIL</h3>
          </div>
          <div className="subscriber-header-date">
            <h3>DATE</h3>
          </div>
          <div className="subscriber-header-actions">
            <h3>ACTIONS</h3>
          </div>
        </div>
        {
          subscribers.length>0
          ?
          subscribers.map((subscriber,index)=>(
            <div key={subscriber?._id} className="subscriber-class">
              <div className="subscriber-id">
                <p>{index+1}</p>
              </div>
              <div className="subscriber-email">
                <p>{subscriber?.email}</p>
              </div>
              <div className="subscriber-date">
                <p>
                  {new Date(subscriber?.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                    })}
                </p>
              </div>
              <div className="subscriber-actions">
                  <img src={assets.deleteI} alt="delete"  onClick={()=>(deleteSubscriber(subscriber?._id))}/>
                </div>
            </div>
          ))
          :
          <>
          <p className='zero'>No Subscribers yet</p>
          </>
        }
      </div>
    </div>
    </>
  )
}

export default SubscribersPage