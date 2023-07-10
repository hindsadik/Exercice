import React from 'react';
import { Button, Label, TextInput } from 'flowbite-react';
import { useForm } from '@inertiajs/inertia-react';

export default function PostForm() {

  const { data, setData, errors, post } = useForm({
    name: "",
    description: "",
  });

  const submit = e => {
    e.preventDefault();
    post(route('task.store'));
  };

  return (
    <div className="min-h-screen bg-gray-100  flex flex-col justify-center ">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto w-[50%]">
        <div className="absolute inset-0 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4  bg-white shadow-lg sm:rounded-3xl ">
          <div className="max-w-md mx-auto">
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <form onSubmit={submit}>
                  <div className="relative">
                    <Label htmlFor="taskName" value="Task Name" />
                    <TextInput
                      type="text"
                      placeholder="Enter task name"
                      value={data.name}
                      onChange={e => setData('name', e.target.value)}
                      style={{ height: '40px', padding: '20px' }}
                    />
                    {errors.name && <div className="text-red-600">{errors.name}</div>}
                  </div>
                  <div className="relative">
                    <Label htmlFor="taskDescription" value="Task Description" />
                    <TextInput
                      placeholder="Enter task description"
                      value={data.description}
                      onChange={e => setData('description', e.target.value)}
                      rows={4}
                      style={{ padding: '20px', Height: "40px" }}
                    />
                    {errors.description && <div className="text-red-600">{errors.description}</div>}
                  </div>
                  <div className="flex items-center justify-center mt-8">
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
