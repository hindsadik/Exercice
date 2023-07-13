import { Table, Button, Modal } from 'flowbite-react';
import { Head, Link } from '@inertiajs/inertia-react'
import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';

export default function TableData({ tasks }) {

  const [openModal, setOpenModal] = useState();
  const props = { openModal, setOpenModal };

  const submit = (event, taskId) => {
    event.preventDefault();
    Inertia.delete(route('task.destroy', taskId));
    props.setOpenModal(undefined);
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
                <div className='flex'>
                  <Button>
                    <Link
                      href={route('task.edit', e.id)}>
                      Edit
                    </Link>
                  </Button>
                  <Button onClick={() => props.setOpenModal('default')}>Toggle modal</Button>
                  <Modal show={props.openModal === 'default'} onClose={() => props.setOpenModal(undefined)}>
                    <Modal.Header>Confirm Delete</Modal.Header>
                    <Modal.Body>
                      <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                          Are you sure you want to delete this task?
                        </p>
                      </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <form onSubmit={(event) => submit(event, e.id)}>
                        <Button type="submit">Delete</Button>
                        <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
                          Cancel
                        </Button>
                      </form>
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