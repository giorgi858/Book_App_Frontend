import React from 'react'
import { Link } from 'react-router-dom'

let getTime = (book) => {
  return new Date(book.updated).toLocaleDateString()
}

const getTitle = (book) => {

  let title = book.content.split('\n')[0]
  if (title.length > 45) {
      return title.slice(0, 45)
  }
  return title
}

const getContent = (book) => {
  let title = getTitle(book)
  let content = book.content.replaceAll('\n', ' ')
  content = content.replaceAll(title, '')

  if (content.length > 45) {
      return content.slice(0, 45) + '...'
  } else {
      return content
  }
}


const ListItems = ({ book }) => {
  return (
    <Link to={`/book/${book.id}`}>
        <div className='books-list-item'>
          <h3>{getTime(book)}</h3>
          <p> <span>{getTitle(book)}</span> {getContent(book)}</p>
        </div>
    </Link>
  )
}

export default ListItems