import React, { useContext } from 'react'
import CryptoContext from '../context/Crypto-context';
import paginationArrow from '../assets/pagination-arrow.svg'
const Pagination = () => {
    const {currentPage,setCurrentPage}=useContext(CryptoContext)
    const totalnumber = 250;
    const next = () => {
        if (currentPage === totalnumber) {
            return null;
        } else {
            setCurrentPage(currentPage+1)
        }
    }
    const prev = () => {
        if (currentPage === 1) {
            return null;
        } else {
            setCurrentPage(currentPage-1)
        }
    }
    const multiStepNext = () => {
        if (currentPage+3 >= totalnumber) {
            setCurrentPage(currentPage-1)
        } else {
            setCurrentPage(currentPage+3)
        }
    }
    const multiStepPrev = () => {
        if (currentPage-3 <= 1) {
            setCurrentPage(currentPage+1)
        } else {
            setCurrentPage(currentPage-2)
        }
    }
    return (
        <div className='flex items-center'>
            <ul className='flex items-center justify-end text-sm'>
                <li className='flex items-center'>
                    <button className='outline-0 hover:text-cyan w-8' onClick={prev}>
                        <img src={paginationArrow} alt='' className='w-full h-auto rotate-180'></img>
                    </button>
                </li>
                {(currentPage === totalnumber || currentPage+1=== totalnumber) ?
                <li className='flex items-center'>
                    <button onClick={multiStepPrev} className='outline-0 hover:text-cyan w-8 rounded-full flex items-center justify-center text-lg'>...</button>
                </li>    
                : null}
                {(currentPage-1 !==0 ) ?
                <li className='flex items-center'>
                    <button onClick={prev} className='outline-0 hover:text-cyan w-8 rounded-full flex items-center justify-center text-lg bg-gray-200 mx-1.5'>{currentPage-1 }</button>
                </li>    
                : null}
                <li className='flex items-center'>
                    <button disabled className='outline-0 w-8 rounded-full flex items-center justify-center text-lg text-gray-200 bg-cyan mx-1.5'>{ currentPage}</button>
                </li>
                {(currentPage!== totalnumber &&currentPage+1!== totalnumber) ?
                <li className='flex items-center'>
                    <button onClick={next} className='outline-0 hover:text-cyan w-8 rounded-full flex items-center justify-center text-lg bg-gray-200 mx-1.5'>{currentPage+1}</button>
                </li>    
                : null}
                {(currentPage!== totalnumber &&currentPage+1!== totalnumber) ?
                    <li className='flex items-center'>
                    <button onClick={multiStepNext} className='outline-0 hover:text-cyan w-8 rounded-full flex items-center justify-center text-lg'>...</button>
                </li>
                : null}
                {(currentPage!== totalnumber) ?
                <li className='flex items-center'>
                    <button onClick={()=>{setCurrentPage(totalnumber)}} className='outline-0 hover:text-cyan w-8 rounded-full flex items-center justify-center text-lg bg-gray-200 mx-1.5'>{totalnumber }</button>
                </li>    
                : null}
                <li className='flex items-center'>
                    <button className='outline-0 hover:text-cyan w-8' onClick={next}><img src={paginationArrow} alt='' className='w-full h-auto'></img>
</button>
                </li>
            </ul>
        </div>
    )
}

export default Pagination