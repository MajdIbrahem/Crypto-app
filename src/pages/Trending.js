import {useEffect,useState} from 'react'
import TrendingCoin from '../components/TrendingCoin'
const Trending = () => {
    const[trendData,setTrendData]=useState()
    useEffect(() => {
        const getTrendData = async () => {
            const response = await fetch(`https://api.coingecko.com/api/v3/search/trending`)
            const responseData = await response.json()
            
            setTrendData(responseData.coins)
            
        }
        getTrendData()
    }, [trendData])
    return (
        <section className='w-screen h-screen flex flex-col mt-16 mb-24  content-center items-center '>
            <div className='flex flex-wrap justify-evenly  py-8 mt-9 border-gray-100  border-2 rounded md:w-[80%] w-[100%] '>
                {trendData && trendData.map((coin) => {
                    return <TrendingCoin data={coin.item} key={trendData.coin_id}></TrendingCoin>
                    
                })}
            </div>
        </section >
    )
}

export default Trending