import React from 'react'
import DefaultForm from '../components/Forme'

function Edit({data}) {
  return (
    <div>
      <DefaultForm type='Edit' tache={data.tache} statusTags={data.statusTags} />    
    </div>
  )
}

export default Edit
