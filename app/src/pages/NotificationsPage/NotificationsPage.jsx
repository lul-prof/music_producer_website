import React, { useContext } from 'react'
import './NotificationsPage.css'
import { ShopContext } from '../../Context/ShopContext'

const NotificationsPage = () => {

  const {notifications} = useContext(ShopContext);

  
  return (
    <>
    <div className="notifications-container">
      <div className="notifs-header">
        <h2>Notifications</h2>
      </div>
        <div className="notifs-bottom">
                <div className="notifs-class">
                    {
                        notifications.map((notif)=>(
                            <div className="single-notif">
                                <div className="single-notif-header">
                                    <h4>{notif.title}</h4>
                                </div>
                                <div className="single-notif-descr">
                                    <p>{notif.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
      </div>
    </>
  )
}

export default NotificationsPage