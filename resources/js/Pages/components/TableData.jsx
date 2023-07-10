'use client';

import { Table } from 'flowbite-react';
import { Head, Link } from '@inertiajs/inertia-react'
import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';

export default function TableData({ tasks }) {

  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  <Head>Tasks</Head>
  return (

    <div className='mx-auto max-w-screen-md w-[90%] mt-48 '>


      <div className="flex justify-end mt-12">
        <Link className="px-4 py-2 text-white font-bold bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 shadow-lg transform -skew-y-6 sm:skew-y-0  sm:rounded-xl w-[13%]"
          href={route('task.create')}>
          Add task
        </Link>
      </div>
      <Table hoverable className='bg-gray-200 mt-12 border-b-2  '>
        <Table.Head >
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
          {tasks?.map((e, i) => {
            return (<Table.Row key={i} className="bg-white">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                {e.name}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                {e.description}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 ">
                {e.status}
              </Table.Cell>
              <Table.Cell>
                <div className='flex justify-between '>
                  <Link
                    className="font-medium text-cyan-600 hover:underline"
                    href={route('task.edit', e.id)}>
                    Edit
                  </Link>
                  <Button onClick={toggleModal}>Toggle modal</Button>
                  <Modal open={isOpen} onClose={toggleModal}>
                    <Modal.Header>Terms of Service</Modal.Header>
                    <Modal.Body>
                      <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          With less than a month to go before the European Union enacts new consumer privacy laws for its citizens,
                          companies around the world are updating their terms of service agreements to comply.
                        </p>
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to
                          ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as
                          possible of high-risk data breaches that could personally affect them.
                        </p>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={toggleModal}>I accept</Button>
                      <Button color="gray" onClick={toggleModal}>
                        Decline
                      </Button>
                    </Modal.Footer>
                  </Modal>
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