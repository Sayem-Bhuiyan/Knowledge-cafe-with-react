import { useState } from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  return (
    <>
      <div className='container mx-auto max-w-7xl'>
        <Header />
        <div className='md:flex'>
          <Blogs handleAddToBookmarks={handleAddToBookmarks}/>
          <Bookmarks bookmarks={bookmarks}/>
        </div>
      </div>
    </>
  )
}

export default App
