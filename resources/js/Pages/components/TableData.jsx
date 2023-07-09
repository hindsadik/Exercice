'use client';

import { Table } from 'flowbite-react';
import { Inertia } from '@inertiajs/inertia';

export default function TableData({taches}) {

  function handleRoute(type,id){

    switch (type) {
      case 'Add':
        Inertia.get(`/taches/create`)   
        break;
      
      case 'Delete':
        Inertia.delete(`/taches/${id}`)   
        break;
      default:
        break;
    }
  }

  return (
    <div className='mx-auto max-w-screen-md'>
      <div className="flex items-center justify-between p-4 bg-blue-200 text-black rounded-tl-md rounded-tr-md">
        <h1 className="text-2xl font-bold">Task</h1>
        
          <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600" onClick={()=>handleRoute("Add")}>
            Add task
          </button>
        
      </div>
      <Table hoverable className='bg-gray-300'>
        <Table.Head>
          <Table.HeadCell>
            Task name
          </Table.HeadCell>
          <Table.HeadCell>
            Description
          </Table.HeadCell>
          <Table.HeadCell>
            Status
          </Table.HeadCell>
          <Table.HeadCell>
            Actions
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            taches.map((e,i)=>{
              
              return  ( <Table.Row key={i} className="bg-white">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                {e.name}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900"> 
                {e.description}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                {e.status}
              </Table.Cell>
              <Table.Cell>
                <div className='flex justify-between '>
                  <a
                    className="font-medium text-cyan-600 hover:underline"
                    href={`/taches/${e.id}/edit`}
                  >
                    <p>
                      Edit
                    </p>
                  </a>
                  <a
                    className="font-medium text-red-600 hover:underline"
                    href={`/taches/${e.id}`}
                  >
                    <p onClick={()=>handleRoute("Delete",e.id)}>
                      Delete
                    </p>
                  </a>
                </div>
              </Table.Cell>
                  </Table.Row>)
            })
          }
        </Table.Body>
      </Table>
    </div>
  )
}