import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import ReactPaginate from 'react-paginate';

const PaginationButtons = ({pageCount, handlePageClick}) => {

    return(
        <div>
            <ReactPaginate
                breakLabel={<p className="mx-2">...</p>}
                nextLabel={<div className="p-2 bg-white border border-[#2D4944] rounded-xl text-[#2D4944] flex justify-center items-center hover:bg-[#bddbd5]"> 
                                <FaArrowRight size={17}/> 
                            </div>}
                onPageChange={(e) => handlePageClick(e)}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel={<div className="p-2 bg-white border border-[#2D4944] rounded-xl text-[#2D4944] flex justify-center items-center hover:bg-[#bddbd5]"> 
                                    <FaArrowLeft size={17}/> 
                                </div>}
                renderOnZeroPageCount={null}
                containerClassName="flex items-center justify-center text-[#2D4944] font-bold text-xs"
                pageClassName="border border-[#2D4944] mx-2 w-10 flex items-center justify-center p-2 rounded-xl hover:bg-[#bddbd5]"
                activeClassName="bg-[#2D4944] text-white hover:bg-[#6a938c] hover:border-none"
            />
        </div>
    );
}

export default PaginationButtons;