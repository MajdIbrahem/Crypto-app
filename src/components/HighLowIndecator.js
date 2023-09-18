import React,{Fragment,useState,useEffect} from 'react'

const HighLowIndecator = (props) => {
    const [green, setGreen] = useState();
    useEffect(() => {
        let total = props.high - props.low;
        let greenZone = ((props.high - props.currentPrice) * 100) / total
        setGreen(Math.ceil(greenZone))
    },[props.high,props.low,props.currentPrice])
    return (<Fragment>
    <span className='bg-red h-1.5 rounded-l-lg w-[50%]' style={{width:`${100-green}%`}}></span>
    <span className='bg-green h-1.5 rounded-r-lg w-[50%]' style={{width:`${green}%`}}></span>
</Fragment>
)
}

export default HighLowIndecator