'use client';
import React, { useState , useEffect } from 'react';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';

import SelectInput from './SelectInput';

import { Inertia } from '@inertiajs/inertia';

export default function DefaultForm({ type, tache, statusTags}) {
  const [taskName, setTaskName] = useState(tache ? tache.name : "");
  const [taskDescription, setTaskDescription] = useState(tache && tache.description ? tache.description : "");
  const [selectedStatus, setSelectedStatus] = useState(tache ? tache.status : statusTags[0]);
  const [form , SetForm] = useState({})
  const taskId = tache &&  tache.id

  useEffect(()=>{
    console.log("component did mount")
  },[]) 

  const handleSubmit = (event) => {
    event.preventDefault();
    SetForm({
        name : taskName,
        description : taskDescription,
        status : selectedStatus
    })
    switch (type) {
        case 'Edit':
                Inertia.put(`/taches/${taskId}`,form)   
            break;
        case 'Add':
        Inertia.post(`/taches`,form)   
        break;
        default:
            break;

    }
  };

  let statusTagsObj = statusTags.map((e) => {
    return { optionName: e, value: e };
  });
  function handleSelectChange (value) {
    setSelectedStatus(value);
  };
  
  return (
    <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <div className="mb-2 block">
          <SelectInput
            label="Select task status"
            object={statusTagsObj}
            selectedOption={selectedStatus} 
            onValueChange={handleSelectChange}
          />
        </div>
        <div className="mb-2 block">
          <Label htmlFor="taskName" value="Task name" />
        </div>
        <TextInput
          id="taskName"
          required
          type="text"
          placeholder="task name.."
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="taskDescription" value="task description" />
        </div>
        <Textarea
          id="taskDescription"
          required
          placeholder="task description..."
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          rows={4}
        />
      </div>

      <Button type="submit">Submit</Button>
    </form>
  );
}
