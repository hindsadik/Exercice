'use client';

import { Table } from 'flowbite-react';


export default function TableData() {
  return (
    <div className='mx-auto max-w-screen-md'>
      <div className="flex items-center justify-between p-4 bg-blue-200 text-black rounded-tl-md rounded-tr-md">
        <h1 className="text-2xl font-bold">Task</h1>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
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
          <Table.Row className="bg-white">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
              Apple MacBook Pro 17"
            </Table.Cell>
            <Table.Cell>
              Sliver
            </Table.Cell>
            <Table.Cell>
              Laptop
            </Table.Cell>
            <Table.Cell>
              <div className='flex justify-between '>
                <a
                  className="font-medium text-cyan-600 hover:underline"
                  href="/tables"
                >
                  <p>
                    Edit
                  </p>
                </a>
                <a
                  className="font-medium text-red-600 hover:underline"
                  href="/tables"
                >
                  <p>
                    Delete
                  </p>
                </a>
              </div>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  )
}