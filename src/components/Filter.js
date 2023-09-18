import React from 'react'
import Search from './Search'
import submitIcon from '../assets/submit-icon.svg'
import selectIcon from '../assets/select-icon.svg'
import { useContext ,useRef} from 'react'
import CryptoContext from '../context/Crypto-context';
const Filter = () => {
    const currencyRef=useRef(null)
    const { setCurrency,setSortBy,
         } = useContext(CryptoContext)
    const handelCurrencySubmit = (e) => {
        e.preventDefault()
        const val = currencyRef.current.value
        setCurrency(val)
        currencyRef.current.value = "";
    }
    const handelSort = (e) => {
        e.preventDefault();
        const value = e.target.value
        setSortBy(value)
    }
        
    return (
        <div className='flex  mt-9 border-gray-100  border-2 rounded w-[80%] flex-wrap' >
            <Search/>
            <div className='flex ml-7'>
                <form className='relative flex items-center font-nunito mr-12'
                onSubmit={handelCurrencySubmit}>
                    <label htmlFor='currency' className='relative felex justify-center items-center mr-2 font-bold'>Currency</label>
                    <input type="text"
                    ref={currencyRef}
                    name='currency'
                    placeholder='USD'
                    className='w-16 rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-tranparent focus:border-cyan leading-4 '></input>
                    <button type='submit'>
                        <img src={submitIcon} alt="submit" className='ml-2 cursor-pointer'></img>
                    </button>
                <label className=' justify-center items-center relative ml-4 md:flex hidden  '>
                    <span className='font-bold mr-2'>sort by :</span>
                        <select name='sortby'
                        onClick={handelSort}
                        className='rounded bg-gray-200 text-base pl-2 pr-10 py-0.5 leading-4 capitalize focus:outline-0 '>
                        <option value="market_cap_desc">market cap desc</option>
                        <option value="market_cap_asc">market cap asc</option>
                        <option value="volume_desc"> volume desc</option>
                        <option value="volume_asc">volume asc</option>
                        <option value="id_asc"> id asc</option>
                        <option value="id_desc">id desc</option>
                        </select>

                    </label>
                    
                </form>
            </div>

        </div>
    )
}

export default Filter