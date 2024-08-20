import { React } from "react";

const Pagination = ({totalItems, itemsPerPage, currentPage, onPageChange}) => {

    const divStyle = {
        // display: 'flex',
        // justifyContent: 'center',
        // flexWrap: 'wrap',
      }
    

    const totalPages = Math.ceil(totalItems / itemsPerPage);    

    const pageNumbers = [];
    for(let i = 1; i <= totalPages; i++){
        pageNumbers.push(i)
    }

    return (
        <div style={divStyle}>
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled = {currentPage === 1}
                style={{color:'#f6ef00', marginRight: '10px', border: '3px solid #e0e0e0', backgroundColor: 'black'}}
            >
                Previous
            </button>

            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => onPageChange(number)}
                    className={currentPage === number ? 'active' : ''}
                    style={{color:'#f6ef00', marginRight: '10px', border: '3px solid #e0e0e0', backgroundColor: 'black'}}

                >
                    {number}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                style={{color:'#f6ef00', marginRight: '10px', border: '3px solid #e0e0e0', backgroundColor: 'black'}}

            >
                Next
            </button>
        </div>
    )
};

export default Pagination;