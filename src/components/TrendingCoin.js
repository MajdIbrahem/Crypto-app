import {Fragment} from 'react'
import { useNavigate } from 'react-router-dom';
const TrendingCoin = (props) => {
  const navigate = useNavigate();
  return (
    
    <div className=' w-[80%] flex md:flex-row flex-col  bg-gray-200 mb-12 last:mb-0 rounded-lg p-4 relative cursor-pointer hover:bg-gray-100 bg-opacity-40'
    onClick={()=>{navigate(`/${props.data.id}`)}}
    >
      {props.data ?
        <Fragment>
        <h3 className='text-base flex justify-between items-center my-0.5'>
          <span className='text-gray-100 capitalize'>name:</span>
          <span className='text-cyan'>{props.data.name}</span>
          <img src={props.data.small} alt={props.data.name}
          className="w-[5.5rem] h-[5.5rem] ml-7 rounded-full"
          ></img>
      </h3>  
        <h3 className='text-base flex justify-between items-center my-0.5'>
          <span className='text-gray-100 capitalize'>market cap rank:</span>
          <span className='text-cyan'>{props.data.market_cap_rank}</span>
          
      </h3>  
        <h3 className='text-base flex justify-between items-center my-0.5'>
          <span className='text-gray-100 capitalize'>price (inBtc):</span>
            <span className='text-cyan'>
              {new Intl.NumberFormat("en-IN", {
                                style: 'currency', currency:"btc",maximumSignificantDigits:5
                            }).format(props.data.price_btc)}
              </span>
          
          </h3> 
      <h3 className='text-base flex justify-between items-center my-0.5'>
          <span className='text-gray-100 capitalize'>score:</span>
          <span className='text-cyan'>{props.data.score}</span>
          
      </h3>     
        </Fragment>
        : 
          <div className='flex justify-center items-center w-full h-full min-h-[60vh]'>
                                <span className='my-4'>please wait....</span> 
                                <div className='w-8 h-8 border-4 border-cyan rounded-full border-b-gray-200 animate-spin'></div>
                            </div>}
          </div>
  )
}

export default TrendingCoin