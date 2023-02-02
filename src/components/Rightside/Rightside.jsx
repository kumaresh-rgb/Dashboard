import React from 'react'
import  CustomerReview  from '../CustomerReview/CustomerReview'
import Updates from '../Updates/Updates'
import './Rightside.css'


const Rightside = () => {
  return (
    <div className="Rightside">
      <h3>UPDATES</h3>
      <Updates/>
   
    <div >
      <h3>Customer Review</h3>
      <CustomerReview/>
    </div>
    </div>
  )
}

export default Rightside