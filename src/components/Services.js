import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <>
    <h2 className='services_header' id='services'>Our Services</h2>
    <div className='services' >
        <a href='/buyers' target='__blank'><button className='services__button services__button--buyer'>Buyer</button></a>
        <a href='/sellers' target='__blank'><button className='services__button services__button--seller'>Seller</button></a>
    </div>
    </>
  )
}

export default Services