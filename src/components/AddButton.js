import React from 'react'
import { Link } from 'react-router-dom'

const AddButton = () => {
  return (
    <Link to='/note/new/' className='floating-button'>
      <h1>&#9769;</h1>
    </Link>
  )
}

export default AddButton
