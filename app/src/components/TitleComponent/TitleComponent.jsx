import React from 'react'
import './TitleComponent.css'

const TitleComponent = (props) => {
  return (
    <div className="title">
      <h2>{props.title}</h2> 
      <hr />
    </div>
  )
}

export default TitleComponent