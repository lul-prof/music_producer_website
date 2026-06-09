import React, { useContext, useState } from "react";
import "./LoginPage.css";
import { ManagementContext } from "../../Context/ManagementContext";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const LoginPage = () => {
  const { token,setToken, backend_url } = useContext(ManagementContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading,setLoading]=useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      const response = await axios.post(`${backend_url}/api/admin/login`, {
        email: email,
        password: password,
      });
      if (response.data.success) {
        if (!token) {
          setToken(response.data.token);
          localStorage.setItem("admin-token", response.data.token);
          toast.success(response.data.message);
        }
        setLoading(false)
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }finally{
      setLoading(false);
    }
  };
  return (
    <>
      <Toaster />
      <div className="login-container">
        <div className="login-header">
          <h2>Welcome Back Admin</h2>
        </div>
        <div className="login-body">
          <form onSubmit={handleSubmit}>
            <div className="form-class">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Admin Email"
              />
            </div>
            <div className="form-class">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin Password"
              />
            </div>
            <div className="form-btn">
              <button type="submit">{loading?"Logging you In...":"Login"}</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
