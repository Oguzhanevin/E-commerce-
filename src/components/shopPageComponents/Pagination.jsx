import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    return (
        <div className="flex items-center justify-center space-x-2 mt-4 mb-6">
            {/* Pagination container */}
            <div className="flex items-center space-x-2 border rounded-md">
                {/* First Page Button */}
                <button
                    className={`p-2 px-4 border rounded-md text-sm ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-500 hover:text-white'}`}
                    onClick={() => onPageChange(1)}
                    disabled={currentPage === 1}
                >
                    İlk
                </button>

                {/* Page Number Buttons */}
                {pages.map(page => (
                    <button
                        key={page}
                        className={`p-2 px-4 border rounded-md text-sm ${currentPage === page ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-100'}`}
                        onClick={() => onPageChange(page)}
                    >
                        {page}
                    </button>
                ))}

                {/* Next Page Button */}
                <button
                    className={`p-2 px-4 border rounded-md text-sm ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-500 hover:text-white'}`}
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Sonraki
                </button>
            </div>
        </div>
    );
};

export default Pagination;


