import { useContext, useEffect,useState} from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid,Tooltip,Legend,ResponsiveContainer} from 'recharts';
import CryptoContext from '../context/Crypto-context';

const Chart = (props) => {
    const [chartData, setChartData] = useState();
    const { currency } = useContext(CryptoContext);
    const [type, setType] = useState("prices");
    const [days,setdays]=useState(7)
    useEffect(() => {
        const getChartData = async () => {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${props.id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
            const responseData = await response.json()
            console.log(responseData)
            let convertData = responseData[type].map(item => {
                return {
                    date: new Date(item[0]).toLocaleString(),
                    [type]:item[1]
                }
            })
            setChartData(convertData)
}
    getChartData()
    }, [props.id,type,days])
    function CustomTooltip({ payload, label, active ,currency="usd"}) {
        if (active && payload && payload.length>0) {
            return (
            <div className="custom-tooltip">
                    <p className="label text-sm text-cyan">{`${label} : ${new Intl.NumberFormat("en-IN", {
                        style: 'currency', currency: currency,
                        minimumFractionDigits:5,
                            }).format(payload[0].value)}`}</p>
                
            </div>
            );
        }

        return null;
        }
    return (
        <div className='w-full h-[60%]'>
            <ResponsiveContainer height="90%">
            <LineChart width={400} height={400} data={chartData}>
            <Line type="monotone" dataKey={type} stroke="#14ffec" strokeWidth={"1px"} />
            <CartesianGrid stroke="#323232" />
            <XAxis dataKey="date"  hide/>
            <YAxis dataKey={type} hide domain={["auto","auto"]} /> 
                    <Tooltip content={<CustomTooltip />} currency={currency} cursor={false} wrapperStyle={{outline:"none"}} />
            <Legend></Legend>
                </LineChart>
            </ResponsiveContainer>
            <div className='flex md:flex-row flex-col '>
                <button className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${type==="prices"? 'bg-cyan text-cyan':'bg-gray-200 text-gray-200' }`} onClick={()=>{setType("prices")}}>Price</button>
                <button className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${type==="market_caps"? 'bg-cyan text-cyan':'bg-gray-200 text-gray-200' }`}  onClick={()=>{setType("market_caps")}}>Market caps</button>
                <button className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${type==="total_volumes"? 'bg-cyan text-cyan':'bg-gray-200 text-gray-200' }`}  onClick={()=>{setType("total_volumes")}}>Total volumes</button>
                
                <button className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${days===7? 'bg-cyan text-cyan':'bg-gray-200 text-gray-200' }`} onClick={() => { setdays(7)}}>7d</button>
                <button  className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${days===14 ? 'bg-cyan text-cyan':'bg-gray-200 text-gray-200' }`}  onClick={()=>{setdays(14)}}>14d</button>
                <button className={`text-sm py-0.5 px-1.5 ml-2 bg-opacity-25 rounded capitalize ${days===30 ? 'bg-cyan text-cyan':'bg-gray-200 text-gray-200' }`}  onClick={()=>{setdays(30)}}>30d</button>
            </div>
        
        </div>
    )
}

export default Chart