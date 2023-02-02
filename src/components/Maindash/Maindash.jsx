import Table from '../Table/Table'
import React from 'react'
import Cards from '../Cards/Cards'
import './Maindash.css'


const Maindash = () => {
  return (
    <div className="Maindash">
      <h1 className='text'>DASHBOARD</h1>
      <Cards />
      <Table/>
      
      
    </div>
  )
}

export default Maindash