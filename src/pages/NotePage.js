import React from 'react'
import { useState,useEffect} from 'react'
// import notes from '../assets/data'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom'



const NotePage = ({ match }) => {
    let {id} = useParams();
    let navigate = useNavigate();


    // let note = notes.find(note => note.id === Number(id))

  let [note, setNote] = useState(null)

  useEffect(() => {
    getNote()
  }, [id])

  let getNote = async () => {
    if (id === 'new') return
    let response = await fetch(`http://localhost:8000/notes/${id}`)
    let data = await response.json()
    setNote(data)
  }

  let updateNote = async() => {
      await fetch(`http://localhost:8000/notes/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...note, 'updated': new Date()})
    })
  }

  let deleteNote = async () => {

    fetch(`http://localhost:8000/notes/${id}/`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(note)
    })
    navigate('/')

}


let createNote = async () => {

  await fetch(`http://localhost:8000/notes/`, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({...note, 'updated': new Date()})
  })
}


  let handleSubmit = () => {
    if (id !== 'new' && !note.body) {
      deleteNote()
    } else if (id !== 'new'){
      updateNote()
    } else if(id === 'new' && note !== null){
      createNote()
  }
    navigate('/')
  }



  let handleDelete = () => {
    deleteNote()
    navigate('/')
  }

  return (
    <div className='note'>
      <div className='note-header'>
        <h3 >
          <Link to='/' onClick={handleSubmit}>Back</Link>
        </h3>
        {id !== 'new' ? (
                <button onClick={handleDelete}>DELETE</button>
                ):(<button  onClick={handleSubmit}>Done</button>
                )}
      </div>
      <textarea value={note?.body} onChange={(e)=> {setNote({...note, 'body': e.target.value})}} >

      </textarea> {/* {note?.body} here we added question mark so that if an id does not exist react will not throw error */}
    </div>
  )
}

export default NotePage



