const Pagination = (props) => {
  const {
    currentPage,
    totalPages,
    onPageChange,
  } = props;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <ul className='flex justify-center items-center gap-2 h-max p-5'>
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? 'bg-blue-500' : ''}
          >
            <a
              href="#"
              className='text-gray-600 hover:text-gray-800 bg-gray-300 p-2'
              onClick={(e) => {
                e.preventDefault();
                onPageChange(page);
              }}
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

}
export default Pagination;