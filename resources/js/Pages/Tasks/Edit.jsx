import React from 'react'
import PutForm from '../components/PutForm'

function Edit({ task }) {
  return (
    <div>
      <PutForm task={task} />
    </div>
  )
}

export default Edit
