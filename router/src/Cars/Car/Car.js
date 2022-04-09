  import React from 'react'
  import './Car.scss'
  import { useNavigate } from "react-router-dom";
  
  const Car = props => {
    let navigate = useNavigate();
    
    const goToHomePage = () => {
      navigate(`/cars/${props.name.toLowerCase()}`)
    }
    return (
      <div className={'Car'}
      onClick={goToHomePage}
      >
        <h3>Сar name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
      </div>
    )
  }

  export default Car