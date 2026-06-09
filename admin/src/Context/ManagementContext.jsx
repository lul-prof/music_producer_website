import { createContext, useEffect, useState } from "react";
import {toast} from 'react-hot-toast'
import axios from 'axios'

export const ManagementContext=createContext();

const ManagementContextProvider=(props)=>{
    const username="the_don";
    const [token, setToken]=useState("");

    const frontend_url=import.meta.env.VITE_FRONTEND_URL;
    const backend_url=import.meta.env.VITE_BACKEND_URL;

    const [users,setUsers]=useState([]);
    const [orders,setOrders]=useState([]);

    const [beats,setBeats]=useState([])
    const [merchandise,setMerchandise]=useState([])
    const [blogs,setBlogs]=useState([])

    const [subscribers,setSubscribers]=useState([])

    const currency="kes";

  useEffect(() => {
    const fetchToken = async () => {
      try {
        if(!token){
            const storedToken=localStorage.getItem("admin-token");
            if(storedToken){
                setToken(storedToken);
            }else{
                console.log("Could not set token");   
            }
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    fetchToken();
  }, [token]);



   useEffect(()=>{
    const fetchUsers=async()=>{
      try {
        const response=await axios.get(`${backend_url}/api/user/users`);
        if(response.data.success){
          setUsers(response.data.users);
        }else{
          toast.error(response.data.message);
        }
        
      } catch (error) {
        toast.error(error);
        console.log(error);
        
      }
    }
    fetchUsers();
  },[])

  useEffect(() => {
    const fetchBlogs=async()=>{
      try {
        const response=await axios.get(`${backend_url}/api/admin/blogs`);
        if(response.data.success){
          setBlogs(response.data.blogs);
        }else{
          toast.error(response.data.message);
        }
        
      } catch (error) {
        toast.error(error);
        console.log(error);
      }
    }
    fetchBlogs()
  }, [])
  

  useEffect(() => {
    const fetchMerchandise=async()=>{
      try {
        const response=await axios.get(`${backend_url}/api/admin/merchandise`);
        if(response.data.success){
          setMerchandise(response.data.merchandise);
        }else{
          toast.error(response.data.message);
        }
        
      } catch (error) {
        toast.error(error);
        console.log(error);
      }
    }
    fetchMerchandise()
  }, [])
  

  useEffect(() => {
    const fetchBeats=async()=>{
      try {
        const response=await axios.get(`${backend_url}/api/admin/beats`);
        if(response.data.success){
          setBeats(response.data.beats);
        }else{
          toast.error(response.data.message);
        }
        
      } catch (error) {
        toast.error(error);
        console.log(error);
      }
    }
    fetchBeats()
  }, [])
  

  useEffect(() => {
    const fetchOrders=async()=>{
      try {
        const response=await axios.get(`${backend_url}/api/admin/orders`);
        if(response.data.success){
          setOrders(response.data.orders);
        }else{
          toast.error(response.data.message);
        }
        
      } catch (error) {
        toast.error(error);
        console.log(error);
      }
    }
    fetchOrders()
  }, [])
  
  useEffect(() => {
    const fetchSubscribers=async()=>{
      try {
        const response=await axios.get(`${backend_url}/api/admin/subscribers`);
        if(response.data.success){
          setSubscribers(response.data.subscribers);
        }else{
          toast.error(response.data.message);
        }
        
      } catch (error) {
        toast.error(error);
        console.log(error);
      }
    }
    fetchSubscribers();
  }, [subscribers,backend_url])
    

    const value={
        username,
        setToken,
        token,
        frontend_url,
        backend_url,
        users,
        orders,
        beats,
        merchandise,
        blogs,
        currency,
        subscribers
    };

return (
    <ManagementContext.Provider value={value}>{props.children}</ManagementContext.Provider>
);
};

export default ManagementContextProvider;

