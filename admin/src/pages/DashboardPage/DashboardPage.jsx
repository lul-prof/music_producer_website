import React, { useContext } from 'react'
import './DashboardPage.css'
import { ManagementContext } from '../../Context/ManagementContext'
import {assets} from '../../assets/assets'
import axios from 'axios'
import toast from 'react-hot-toast'

const DashboardPage = () => {
  const {users,orders,merchandise,blogs,beats,currency,backend_url}=useContext(ManagementContext);
  const stats={
    totalRevenue:orders?.reduce((sum,order)=>sum+order.amount,0)
  };

  const deleteOrder=async(id)=>{
    try {
      const response=await axios.post(`${backend_url}/api/admin/deleteOrder/${id}`);
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
    <div className="dashboard">
      {/*------------------------*/}
      <div className="dashboard-top">
        <div className="dashboard-top-header">
          <h1>WELCOME, ADMIN!👋</h1>
        </div>
        <div className="dashboard-top-text">
          <p>This is your Admin dashboard for the purpose of making insights and managing the site effectively.</p>
        </div>
      </div>
      {/*------------------------*/}
      <div className="dashboard-mid">
        <div className="dashboard-mid-header">
          <h2>Key Metrics Summary</h2>
        </div>
        <div className="dashboard-mid-class">
          <div className="dashboard-mid-class-item">
            <div className="dashboard-mid-class-item-img">
              <img src={assets.orderIcon} alt="orders" />
            </div>
            <div className="dashboard-mid-class-item-top">  
              <p>Total Orders</p>
            </div>
            <div className="dashboard-mid-class-item-bottom">
              <h3>{orders?.length}</h3>
            </div>
          </div>
          <div className="dashboard-mid-class-item">
            <div className="dashboard-mid-class-item-img">
              <img src={assets.revenueIcon} alt="orders" />
            </div>
            <div className="dashboard-mid-class-item-top">
              <p>Revenue</p>
            </div>
            <div className="dashboard-mid-class-item-bottom">
              <h3>{stats.totalRevenue.toLocaleString()}</h3>
            </div>
          </div>
          <div className="dashboard-mid-class-item">
            <div className="dashboard-mid-class-item-img">
              <img src={assets.userIcon} alt="orders" />
            </div>
            <div className="dashboard-mid-class-item-top">
              <p>Active Users</p>
            </div>
            <div className="dashboard-mid-class-item-bottom">
              <h3>{users?.length}</h3>
            </div>
          </div>
          <div className="dashboard-mid-class-item">
            <div className="dashboard-mid-class-item-img">
              <img src={assets.beatIcon} alt="orders" />
            </div>
            <div className="dashboard-mid-class-item-top">
              <p>Total Beats</p>
            </div>
            <div className="dashboard-mid-class-item-bottom">
              <h3>{beats?.length}</h3>
            </div>
          </div>
          <div className="dashboard-mid-class-item">
            <div className="dashboard-mid-class-item-img">
              <img src={assets.merch} alt="orders" />
            </div>
            <div className="dashboard-mid-class-item-top">
              <p>Merchandise</p>
            </div>
            <div className="dashboard-mid-class-item-bottom">
              <h3>{merchandise?.length}</h3>
            </div>
          </div>
          <div className="dashboard-mid-class-item">
            <div className="dashboard-mid-class-item-img">
              <img src={assets.blog} alt="orders" />
            </div>
            <div className="dashboard-mid-class-item-top">
              <p>Blogs Tally</p>
            </div>
            <div className="dashboard-mid-class-item-bottom">
              <h3>{blogs?.length}</h3>
            </div>
          </div>
        </div>
      </div>
      {/*----------------------------*/}
      <div className="dashboard-bottom">
        <div className="dashboard-bottom-header">
          <h2>Recent Orders</h2>
        </div>
       
        <div className="dashboard-bottom-orders">
          <div className="dashboard-bottom-orders-header">
            <div className="dashboard-bottom-orders-header-id">
              <h3>ID</h3>
            </div>
            <div className="dashboard-bottom-orders-header-name">
              <h3>NAME</h3>
            </div>
            <div className="dashboard-bottom-orders-header-phone">
              <h3>PHONE</h3>
            </div>
            <div className="dashboard-bottom-orders-header-address">
              <h3>ADDRESS</h3>
            </div>
            <div className="dashboard-bottom-orders-header-date">
              <h3>DATE</h3>
            </div>
            <div className="dashboard-bottom-orders-header-amount">
              <h3>AMOUNT</h3>
            </div>
            <div className="dashboard-bottom-orders-header-status">
              <h3>STATUS</h3>
            </div>
            <div className="dashboard-bottom-orders-header-method">
              <h3>METHOD</h3>
            </div>
            <div className="dashboard-bottom-orders-header-paid">
              <h3>PAID</h3>
            </div>
            <div className="dashboard-bottom-orders-header-actions">
              <h3>ACTIONS</h3>
            </div>
          </div>
          {
            orders.length>0
            ?
            orders.map((order)=>{
              console.log(order);
              
              const user=users.find(user=>user._id===order.userId)
              return(
                <div className="order-class">
                  <div className="order-class-id">
                      <p>{order?.reference}</p>
                  </div>
                  <div className="order-class-name">
                    <div className="order-class-name-avatar">
                      <img src={user?.avatar} alt="avatar" />
                    </div>
                    <div className="order-class-name-right">
                      <p>{user?.first_name} {user?.last_name}</p>
                    </div>
                  </div>
                  <div className="order-class-phone">
                      <p>{user?.phone}</p>
                    </div>
                  <div className="order-class-address">
                    <p>{order?.address.county} {order?.address.ward}</p>
                  </div>
                  <div className="order-class-date">
                    <p>
                      {new Date(order?.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                    </p>
                  </div>
                  <div className="order-class-amount">
                    <p>{currency} {order?.amount.toLocaleString()}</p>
                  </div>
                  <div className="order-class-status">
                    <p>{order?.status}</p>
                  </div>
                  <div style={{backgroundColor:order?.paymentMethod==="Mpesa"?'	#4CBB17':order?.paymentMethod==="Paypal"?'#009CDE':"#FFD900"}} className="order-class-method">
                    <p>{order?.paymentMethod}</p>
                  </div>
                  <div className="order-class-paid">
                    <p>{order?.paymentStatus?"Paid":"Pending"}</p>
                  </div>
                  <div className="order-class-actions">
                    <div className="order-class-actions-left">
                      <img onClick={()=>(deleteOrder(order._id))} src={assets.deleteI} alt="delete" />
                    </div>
                    <div className="order-class-actions-right">
                      <img onClick={()=>(toast.error('Feature under development!'))} src={assets.edit} alt="delete" />
                    </div>
                  </div>
              </div>
              )
            })
            :
            <>
            <div className="order-box">
              <h2>No orders yet</h2>
            </div>
            </>
          }
        </div>
      </div>
      </div>
    </>
  )
}

export default DashboardPage