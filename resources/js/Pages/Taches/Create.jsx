import React from 'react'
import DefaultForm from '../components/Forme'

function Create({statusTags}) {
  return (
    <div>
      <DefaultForm type='Add' statusTags={statusTags}/>
    </div>
  )
}

export default Create
