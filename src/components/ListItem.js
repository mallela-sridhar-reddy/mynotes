import React from 'react'
import { Link } from 'react-router-dom'

let getTitle = (note) => {
  let title = note.body.split('\n')[0]
  if (title.length > 50) {
    return title.slice(0, 50)
  }
  return title
}

let getTime = (note) => {
  return new Date(note.updated).toLocaleDateString()
}


let getContent = (note) => {
  let title = getTitle(note)
  let content = note.body.replaceAll('\n', ' ')
  content = content.replaceAll(title, '')

  if (content.length > 100){
    return content.slice(0, 100) + "......"
  }else {
    return content
  }
}

const Listitem = ({note}) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className='notes-list-item'>
      <h3>{getTitle(note)}</h3>
      <p><span>{getTime(note)}</span>{getContent(note)}</p>
      </div>

    </Link>
  )
}

export default Listitem
