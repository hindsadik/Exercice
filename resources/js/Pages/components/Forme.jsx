import React, { useState, useEffect } from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import SelectInput from './SelectInput';
import { Inertia } from '@inertiajs/inertia';

export default function DefaultForm({ type, tache, statusTags }) {
  const [taskName, setTaskName] = useState(tache ? tache.name : '');
  const [taskDescription, setTaskDescription] = useState(
    tache && tache.description ? tache.description : ''
  );
  const [selectedStatus, setSelectedStatus] = useState(
    tache ? tache.status : statusTags[0]
  );
  const [form, setForm] = useState({});
  const taskId = tache && tache.id;

  useEffect(() => {
    console.log('component did mount');
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setForm({
      name: taskName,
      description: taskDescription,
      status: selectedStatus,
    });
    switch (type) {
      case 'Edit':
        Inertia.put(`/taches/${taskId}`, form);
        break;
      case 'Add':
        Inertia.post(`/taches`, form);
        break;
      default:
        break;
    }
  };

  let statusTagsObj = statusTags.map((e) => {
    return { optionName: e, value: e };
  });

  function handleSelectChange(value) {
    setSelectedStatus(value);
  }

  return (
    <div className="min-h-screen bg-gray-100  flex flex-col justify-center ">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto w-[50%]">
        <div className="absolute inset-0 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4  bg-white shadow-lg sm:rounded-3xl ">
          <div className="max-w-md mx-auto">
           
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <form onSubmit={handleSubmit}>
                  <div className="relative">
                    <Label htmlFor="taskName" value="Task Name" />
                    <TextInput
                      id="taskName"
                      required
                      type="text"
                      placeholder="Enter task name"
                      value={taskName}
                      onChange={(e) => setTaskName(e.target.value)}
                      style={{ height: '40px', padding: '20px' }}
                    />
                  </div>
                  <div className="relative">
                    <Label htmlFor="taskDescription" value="Task Description" />
                    <TextInput
                      id="taskDescription"
                      required
                      placeholder="Enter task description"
                      value={taskDescription}
                      onChange={(e) => setTaskDescription(e.target.value)}
                      rows={4}
                      style={{ padding: '20px', Height: "40px" }}
                    />
                  </div>
                  <div className="relative w-40">
                    <Label htmlFor="taskStatus" value="Task Status" />
                    <SelectInput
                      id="taskStatus"
                      object={statusTagsObj}
                      selectedOption={selectedStatus}
                      onValueChange={handleSelectChange}
                      className="h-16"
                    />
                  </div>
                  <div class="flex items-center justify-center mt-8">
                    <Button className="ml-3 w-[50%] flex items-center justify-center text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 h-[45px]" type="submit">Submit</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
