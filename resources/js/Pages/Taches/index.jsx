import React from 'react'
import TableData from '../components/TableData'
function index({taches}) {
  return (

      <div className="bg-gray-100 text-white p-4 h-screen w-full m-0 px-0">
            <TableData  taches={taches}/>
        </div>
    
  )
}

export default index
