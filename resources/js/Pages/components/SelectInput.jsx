import React from 'react';

  'use client';

import { Label, Select } from 'flowbite-react';

// export default function SelectInput({ label, object, selectedOption , onValueChange }) {
//     function handleSelectChange(event){
//         const newValue = event.target.value;
//         onValueChange(newValue)
//     }
//     return (
//       <div>
//         <label>{label}</label>
//         <select onChange={handleSelectChange}>
          
//         </select>
//       </div>
//     );
//   }



export default function SelectInput({ label, object, selectedOption , onValueChange }) {
    function handleSelectChange(event){
        const newValue = event.target.value;
        onValueChange(newValue)
    }
  return (
    <div
      className="max-w-md"
      id="select"
    >
      <div className="mb-2 block">
        <Label
          htmlFor="j"
          value={label}
        />
      </div>
      <Select
        id="j"
        required
        onChange={handleSelectChange}
      >
        {object.map((e, i) => (
            <option key={i} defaultValue={selectedOption === e.value} value={e.value} >
              {e.optionName}
            </option>
          ))}
      </Select>
    </div>
  )
}


