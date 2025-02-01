import React, { useEffect, useState } from 'react'
import ListItems from '../components/ListItems'
import AddButton from '../components/AddButton'

const ListsPage = () => {

    const [ books, setBooks ] = useState('')
    const [fetchError, setFetchError] = useState(null)

    useEffect(() => {
        const getBookNotes  =  async() => {
          try {
            const response = await fetch('/api/books/')
            console.log('response', response);
            const data = await response.json()
            console.log('data', data);
            setBooks(data)
          } catch (error) {
            setFetchError(error.message)
          }
        }
        getBookNotes()
      },[])
    
    
  return (
    <div className='books'>

      <div  className='books-header'>
          <h2 className='books-title'>&#9782; Books</h2>
          <p className='books-count'>{books.length}</p>
      </div>
    
      {fetchError && <p className='error'>{`Error : ${fetchError}`}</p>}

      <div className='books-list'>
        {books &&  <> {books.map((book, index) => {
        return ( <ListItems book={book} key={index}/>)})} </>}
      </div>
      <AddButton/>
      
    </div>
  )
}

export default ListsPage