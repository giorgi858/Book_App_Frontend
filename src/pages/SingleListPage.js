import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {  ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const   SingleListPage = () => {
  const { id } = useParams()
  const [book, setBook] = useState(null)
  const [fetchError, setFetchError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const getSingleBook  =  async() => {
      try {
        if (id === 'new') return
        
        const response = await fetch(`/api/books/${id}`)
        const data = await response.json()
        console.log('data', data);
        setBook(data)
      } catch (error) {
        setFetchError(error.message)
      }
    }
    getSingleBook()
  },[id])


const createBook = async() => {
  fetch(`/api/books/`,{
    method: "POST",
    "headers": {
      'Content-Type': 'application/json'
    },
   body: JSON.stringify(book)
 })
 }

 const updataBook = async() => {
  fetch(`/api/books/${id}/`,{
    method: "PUT",
    "headers": {
      'Content-Type': 'application/json'
    },
   body: JSON.stringify(book)
 })
 }



const deleteBook = async() => {
   fetch(`/api/books/${id}/`,{
    method: "DELETE",
    "headers": {
      'Content-Type': 'application/json'
    },
  })
  navigate('/')
  }


  let handleSubmit = () => {
    console.log('book:', book)
    if (id !== 'new' && book.content == '') {
        deleteBook()
    } else if (id !== 'new') {
        updataBook()
    } else if (id === 'new' && book.content!== null) {
        createBook()
    }
    navigate('/')
}
  const handleChange = (value) => {
    setBook(book => ({ ...book, 'content': value }))
    console.log('Handle Change:', book)  
  }

  return (
    <div className='book'>

      <div className='book-header'>
          <h3>
            <ArrowLeft onClick={handleSubmit}/>
          </h3>
          {id !== 'new' ? (
            <button onClick={deleteBook}>Delete</button>
          ): (
            <button onClick={handleSubmit}>Done</button>
          )}
      </div>

      {fetchError && <p className='error'>{`Error : ${fetchError}`}</p>}

      <textarea onChange={(e) => { handleChange(e.target.value) }} value={book?.content}></textarea>

    </div>
  )
}

export default SingleListPage
