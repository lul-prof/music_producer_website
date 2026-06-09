import React, { useContext } from "react";
import "./UsersPage.css";
import { assets } from "../../assets/assets.js";
import { ManagementContext } from "../../Context/ManagementContext.jsx";
import axios from "axios";
import toast from "react-hot-toast";

const UsersPage = () => {
  const { backend_url ,users} = useContext(ManagementContext);

  const deleteUser=async(id)=>{
    try {
      const response=await axios.post(`${backend_url}/api/admin/deleteUser/${id}`);
      if(response.data.success){
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error)
    }
  }


  const validateUser=async(id)=>{
    try {
      const response=await axios.post(`${backend_url}/api/admin/validateUser/${id}`);
      if(response.data.success){
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error)
    }
  }

  const featureUser=async(id)=>{
    try {
      const response=await axios.post(`${backend_url}/api/admin/feature/${id}`);
      if(response.data.success){
        toast("User has been featured")
      }else{
        toast.error("Could not Feature user.")
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error)
      
    }
  }

 
  return (
    <>
      <div className="users">
        {/*--------------------*/}
        <div className="users-top">
            <h1>USER MANAGEMENT</h1>
        </div>
        {/*--------------------*/}
        <div className="users-mid">
          <div className="users-mid-header">
            <div className="users-mid-header-name">
              <h3>NAME</h3>
            </div>
            <div className="users-mid-header-role">
              <h3>ROLE</h3>
            </div>
            <div className="users-mid-header-date">
              <h3>DATE</h3>
            </div>
            <div className="users-mid-header-status">
              <h3>STATUS</h3>
            </div>
            <div className="users-mid-header-actions">
              <h3>ACTIONS</h3>
            </div>
          </div>
          {
            users.map((user)=>(
              <div className="user-class">
                <div className="user-class-name">
                    <div className="user-class-name-left">
                      <img src={user?.avatar} alt="avatar" />
                    </div>
                    <div className="user-class-name-right">
                      <div className="user-class-name-right-top">
                        <p>{user?.username}</p>
                      </div>
                      <div className="user-class-name-right-mid">
                        <p>{user?.phone}</p>
                      </div>
                      <div className="user-class-name-right-bottom">
                        <p>{user?.email}</p>
                      </div>
                    </div>
                </div>
                <div className="user-class-role">
                  <p>{user?.role}</p>
                </div>
                <div className="user-class-date">
                  {new Date(user?.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                </div>
                <div className="user-class-status">
                  <p>{user?.isVerified?"Verified":"Not Verified"}</p>
                </div>
                <div className="user-class-actions">
                  <div className="user-class-actions-left">
                    <img onClick={()=>(validateUser(user?._id))} src={user?.isVerified?assets.approve:assets.approved} alt="validate" />
                  </div>
                  <div className="user-class-actions-mid">
                      <img onClick={()=>(featureUser(user?._id))} src={user?.isFeatured?assets.featured:assets.feature} alt="feature" />
                  </div>
                  <div className="user-class-actions-right">
                      <img onClick={()=>(deleteUser(user?._id))} src={assets.deleteI} alt="delete" />
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default UsersPage;
