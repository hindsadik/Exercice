import React from 'react'
import TableData from '../components/TableData'

const index = ({ tasks }) => {
  return (
    <div className="bg-gray-100 text-white p-4 h-screen w-full m-0 px-0">
      <TableData tasks={tasks} />
    </div>

  )
}

export default index
