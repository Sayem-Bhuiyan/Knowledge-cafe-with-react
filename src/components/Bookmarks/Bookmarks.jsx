import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 p-4 bg-gray-300 ml-4 rounded-3xl">

            <div className='p-3 m-4 border-blue-500 bg-blue-200 rounded-xl'>
                <h2 className='text-2xl font-bold text-blue-500'>Spent Time on Read: {readingTime} min</h2>
            </div>
            
            <h2 className='text-3xl mb-4'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,index) => <Bookmark key={bookmark.id} bookmark={bookmark} index={index} />)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number,
}

export default Bookmarks;