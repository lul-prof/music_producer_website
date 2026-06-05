import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const username = "the_don";
  const currency = "kes";

  const [token, setToken] = useState("");

  const [userId, setUserId] = useState("");

  const [pic, setPic] = useState(false);

  const [user, setUser] = useState(false);

  const [searched, setSearched] = useState([]);

  const [cartItems, setCartItems] = useState({});
  const [products,setProducts]=useState([]);

  const [loading,setLoading]=useState(false);

  const backend_url = import.meta.env.VITE_BACKEND_URL;
  const admin_url = import.meta.env.VITE_ADMIN_URL;
  const frontend_url=import.meta.env. VITE_FRONTEND_URL;

  const [beats, setBeats] = useState([]);

  const [artists,setArtists]=useState([]);

  const [blogs,setBlogs]=useState([]);

  const [producers,setProducers]=useState([]);

  const [merchandise, setMerchandise] = useState([]);

  const [users,setUsers]=useState([])



  const [notifications,setNotifications]=useState([])

  useEffect(() => {
    const fetchMerchandise = async () => {
      try {
        const response = await axios.get(`${backend_url}/api/user/merchandise`);
        if (response.data.success) {
          setMerchandise(response.data.merchandise);
        } else console.log(response.data.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMerchandise();
  }, [merchandise, backend_url]);

  useEffect(()=>{
          const fetchNotifs=async()=>{
              try {
                const response=await axios.get(`${backend_url}/api/admin/notifications`); 
                
                if(response.data.success){
                  setNotifications(response.data.notifications);
                }
                
              } catch (error) {
                  console.log(error);
                  
              }
          }
          fetchNotifs();       
      },[notifications,backend_url])
  useEffect(()=>{
        const fetchProducers=async()=>{
            try {
                const response=await axios.get(`${backend_url}/api/user/producers`);                
                if(response.data.success){
                    setProducers(response.data.producers);
                }else{
                    console.log(response.data.message);
                }
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchProducers();
  },[producers,backend_url])


   useEffect(()=>{
        const fetchUSers=async()=>{
            try {
                const response=await axios.get(`${backend_url}/api/user/users`);                
                if(response.data.success){
                    setUsers(response.data.users);
                }else{
                    console.log(response.data.message);
                }
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchUSers();
  },[users,backend_url])


  useEffect(()=>{
        const fetchBlogs=async()=>{
            try {
                const response=await axios.get(`${backend_url}/api/user/blogs`);
                if(response.data.success){
                    setBlogs(response.data.blogs);
                }else{
                    console.log(response.data.message);
                }
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchBlogs();
    },[blogs,backend_url])

  useEffect(()=>{
        const fetchArtists=async()=>{
            try {
                const response=await axios.get(`${backend_url}/api/user/artists`);
                if(response.data.success){
                    setArtists(response.data.artists);
                }else{
                    console.log(response.data.message);
                }
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchArtists();
    },[artists,backend_url])

  useEffect(() => {
    const fetchBeats = async () => {
      try {
        const response = await axios.get(`${backend_url}/api/user/beats`);
        if (response.data.success) {
          setBeats(response.data.beats);
        } else console.log(response.data.message);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBeats();
  }, [beats, backend_url]);

  const addToCart = async (productId) => {
    let cartData = structuredClone(cartItems);
    if (cartData[productId]) {
      cartData[productId] += 1;
    } else {
      cartData[productId] = {};
      cartData[productId] = 1;
    }
    setCartItems(cartData);
    if (token) {
      try {
        const response=await axios.post(`${backend_url}/api/user/addToCart`,{productId},{headers:{token}},);
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
  };

  const getCartCount=()=>{
    let totalCount=0;

    if(!cartItems || typeof cartItems !=="object"){
      return 0;
    }
    for(const productId in cartItems){
      try {
        if(cartItems[productId]>0){
          totalCount+=cartItems[productId];
        }
      } catch (error) {
        console.log(error);
        
      }
    }
    return totalCount;
    
  }

  useEffect(()=>{},[cartItems]);

  const updateQuantity=async(productId,quantity)=>{
    let cartData=structuredClone(cartItems);
    cartData[productId]=quantity;

    setCartItems(cartData);

    if(token){
      try {
        await axios.post(`${backend_url}/api/user/updateCart`,{productId,quantity},{headers:{token}},);

      } catch (error) {
        console.log(error);
        
      }
    }
  }

  const getCartAmount = () => {
    let totalAmount = 0;
    if(products){
      for(const productId in cartItems){
      const itemInfo=(products.merchandise?.find((product)=>product._id===productId) || products.beats?.find((product)=>product._id===productId));
      
      if(itemInfo && cartItems[productId]>0){
        totalAmount+=itemInfo.price * cartItems[productId];        
      }
    }
    }
    return totalAmount;
    
  };


  const myCart=async(token)=>{
    try {
      const response=await axios.post(`${backend_url}/api/user/cart`,{},{headers:{token}},);
      if(response.data.success){
        setCartItems(response.data.cartData);
      }else{
        console.log(response.data.message);
      }

    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    if(token){
      myCart(token);
    }
  },[token])

  

  useEffect(() => {
    const fetchToken = async () => {
      try {
        if(!token){
            const storedToken=localStorage.getItem("token");
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
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await localStorage.getItem("user");
        if (resp) {
          setUserId(resp);
          const response = await axios.post(
            `${backend_url}/api/user/user/${resp}`,
          );          
          setPic(response.data.user.avatar);
          setUser(response.data.user.username);
        } else {
          toast.error("login to update profile");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [userId, pic, backend_url]);

  useEffect(()=>{
    const fetchProducts=async()=>{
      try {
        const response=await axios.get(`${backend_url}/api/user/products`);
        if(response.data.success){
          setProducts(response.data.products)
        }else{
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error);
        
      }
    }
    fetchProducts()
  },[])


  const [myOrders,setMyOrders]=useState([]);

  useEffect(()=>{
    const fetchOrders=async()=>{
      try {
        const response=await axios.post(`${backend_url}/api/user/orders`,{},{headers:{token}})
        if(response.data.success){
          setMyOrders(response.data.orders)
          
        }else{
          console.log(response.data.message);
        } 
      } catch (error) {
        console.log(error);
      }
    }
    fetchOrders()
      
  },[myOrders,backend_url,token])

  const value = {
    username,
    currency,
    addToCart,
    token,
    setToken,
    backend_url,
    setUserId,
    userId,
    setPic,
    pic,
    setUser,
    user,
    searched,
    setSearched,
    getCartCount,
    updateQuantity,
    getCartAmount,
    myCart,
    products,
    setProducts,
    setCartItems,
    cartItems,
    loading,
    setLoading,
    beats,
    artists,
    blogs,
    producers,
    merchandise,
    notifications,
    users,
    admin_url,
    myOrders,
    setMyOrders,
    frontend_url
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
