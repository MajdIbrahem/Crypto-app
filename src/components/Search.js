import React, { useContext, useState } from 'react';
import searchIcon from '../assets/search-icon.svg';
import CryptoContext from '../context/Crypto-context';
const Search = () => {
    const [seacrchText, setSearchText] = useState("");
    const {getSearchData}=useContext(CryptoContext)
    const { searchData, setCoinSearch ,setSearchData} = useContext(CryptoContext)
    
    const handelInput = (e) => {
        e.preventDefault()
        const query = e.target.value;
        setSearchText(query)
        getSearchData(query)
        
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        getSearchData(seacrchText)
        
    }
    const selectCoin = (coin) => {
        setCoinSearch(coin)
        setSearchText("")
        setSearchData("")
    }
    
    return (
        <div className='relative'>
        <form className='w-[80%] md:w-96 flex items-center ml-7 font-nunito relative'>
            <input
                onChange={handelInput}
                value={seacrchText}
                className='w-full rounded bg-gray-200 my-2 placeholder:text-gray-100 required  outline-0 border border-transparent focus:border-cyan'
                placeholder='seacrch here....' type='text' name='search'></input>
                <button
                    onSubmit={handelSubmit}
                    className='absolute right-1  courser-pointer' type='submit'>
                <img src={searchIcon} alt=''></img>
            </button>
            </form>
            {
                seacrchText.length > 0 ?
                    <ul className='absolute top-11 right-0 w-full h-96 rounded overflow-x-hidden p-2 bg-gray-200  bg-opacity-50 backdrop-blur-md scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-200'>
                        {searchData ? searchData.map(coin => {
                            return <li key={coin.id}
                                onClick={()=>selectCoin(coin.id)}
                                className='flex items-center ml-4 my-2 cursor-pointer'>
                            <img className='w-[1rem] h-[1rem] mx-2' src={coin.thumb} alt={coin.name}></img>
                                <span>{coin.name}</span>
                        </li>}) :
                            <div className='flex justify-center items-center w-full h-full'>
                                <span className='my-4'>Searching</span> 
                                <div className='w-8 h-8 border-4 border-cyan rounded-full border-b-gray-200 animate-spin'></div>
                            </div>}
                    </ul>
                :
                    null
        }    
        </div>
    )
}

export default Search