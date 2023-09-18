
import {useContext} from 'react'
import CryptoContext from '../context/Crypto-context';
import { Link } from 'react-router-dom';
import SaveBtn from '../components/SaveBtn';
const Trending = () => {
    const{savedData,currency}=useContext(CryptoContext)
    return (
        <section className='w-screen h-screen flex flex-col mt-16 mb-24  content-center items-center '>
            <div className='flex  py-8 mt-9 border-gray-100  border-2 rounded  '>
                {savedData ?  <table className='w-[full] table-auto'>
                <thead className='text-base text-gray-100 capitalize font-medium border-b border-gray-100'>
                    <tr>
                        <th className='py-1'>asset</th>
                        <th className='py-1'>name</th>
                        <th className='py-1'>price</th>
                        <th className='py-1 md:table-cell hidden'>total volume</th>
                        <th className='py-1 md:table-cell hidden'>market cap change</th>
                        <th className='py-1 md:table-cell hidden'>current price</th>
                        <th className='py-1 lg:table-cell hidden'>1H</th>
                        <th className='py-1 lg:table-cell hidden'>24H</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {savedData.map(data => {
                        return(<tr key={data.id} className='text-center text-base border-b border-gray-100 hover:bg-gray-200 last:border-0'>
                            <td className='py-4 flex items-center justify-center uppercase'>
                                
                                <img className='w-[1.5rem] h-[1.5rem] mx-2' src={data.image} alt={data.name}></img>
                                <span>
                                <Link to={`/${data.id}`} className='cursor-pointer'>{data.symbol}</Link></span>
                            </td>
                            <td className='py-4'><Link to={`/${data.id}`} className='cursor-pointer'>{data.name}</Link></td>
                            <td className='py-4'>{new Intl.NumberFormat("en-IN", {
                                style: 'currency', currency:currency
                            }).format(data.current_price)}</td>
                            <td className='py-4 md:table-cell hidden'>{data.current_price}</td>
                            <td className='py-4 md:table-cell hidden'>{data.total_volume}</td>
                            <td className='py-4 md:table-cell hidden'>{+data.market_cap_change_percentage_24h} %</td>
                            <td className={+data.price_change_percentage_1h_in_currency>0 ? 'text-green py-4 lg:table-cell hidden':'text-red py-4 lg:table-cell hidden' }>{+data.price_change_percentage_1h_in_currency.toFixed(2)}</td>
                            <td className={+data.price_change_percentage_24h > 0 ?'text-green py-4 lg:table-cell hidden':'text-red py-4 lg:table-cell hidden'}>{+data.price_change_percentage_24h.toFixed(2)}</td>
                            
                    </tr>)
                        
                    })}
                </tbody>
                    </table>
                    
                :<h1 className='min-h-[60vh] text-lg text-cyan items-center justify-center m-52'>there is no data to dispaly</h1>}
            </div>
        </section >
    )
}

export default Trending