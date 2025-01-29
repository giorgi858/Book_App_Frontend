import React, { useEffect, useState } from 'react'

const App = () => {
  const [ books, setBooks ] = useState('')
  const [fetchError, setFetchError] = useState(null)


  useEffect(() => {
    const getBookNotes  =  async() => {
      try {
        const response = await fetch('api/')
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
    <div>
      {fetchError && <p>{`Error : ${fetchError}`}</p>}
      {books && 
      <>
      {books.map((book, id) => {
        return (
          <React.Fragment key={id}>
            <li>{book.title}</li>
            <li>{book.content}</li>
          </React.Fragment>
        )
      })}
      </>
      }
    </div>
  )
}

export default App