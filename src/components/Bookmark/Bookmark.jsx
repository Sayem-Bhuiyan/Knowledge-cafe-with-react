import PropTypes from 'prop-types';

const Bookmark = ({bookmark, index }) => {
    console.log(typeof index)
    const {title} = bookmark;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h3 className='text-xl'>{index + 1}. {title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object,
    index: PropTypes.number,
}

export default Bookmark;