import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (time, id) => {
    setReadingTime(readingTime + time)
    // remove the read blog from bookmark
    const newBookmarks = bookmarks.filter(item => item.id !== id)
    setBookmarks(newBookmarks)

  }

  return (
    <>
      <div className='container mx-auto max-w-7xl'>
        <Header />
        <div className='md:flex'>
          <Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead}/>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
        </div>
      </div>
    </>
  )
}

export default App
