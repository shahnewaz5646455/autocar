import React from 'react'

export default function PaymentCard() {
  return (
    <div className='paymentcard'>
      <div className='img-container'>
        <img src="paypal.png" alt="" />
      </div>
      <div className='img-container'>
        <img src="payoneer.png" alt="" />
      </div>
      <div className='img-container'>
        <img src="discover.png" alt="" />
      </div>
      <div className='img-container'>
        <img src="amirican express.png" alt="" />
      </div>
      <div className='img-container'>
        <img src="visa.png" alt="" />
      </div>
    </div>
  )
}
