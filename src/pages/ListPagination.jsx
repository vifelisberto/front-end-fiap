import PropTypes from 'prop-types';

export const ListPagination = ({ currentPage, totalPages, onPageChange }) => {

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center">
                {
                pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <a 
                            href="#pagination"
                            onClick={() => onPageChange(number)}
                            className={number === currentPage ? 'page-link active' : 'page-link'}
                        >{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

ListPagination.propTypes = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    onPageChange: PropTypes.func
};