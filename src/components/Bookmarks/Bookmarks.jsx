import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 p-4 bg-gray-300">
            
            <h2 className='text-3xl mb-4'>Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark,index) => <Bookmark key={bookmark.id} bookmark={bookmark} index={index} />)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
}

export default Bookmarks;