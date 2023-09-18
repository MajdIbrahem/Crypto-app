import CryptoContext from "./Crypto-context";
import {useEffect, useState} from "react";
const CryptProvider = (props) => {
    const [cryptoData, setCryptoData] = useState()
    const [searchData, setSearchData] = useState()
    const [coinData, setCoinData] = useState()
    const [coinSearch, setCoinSearch] = useState("")
    const [currency, setCurrency] = useState("usd")
    const [sortBy, setSortBy] = useState("market_cap_desc")
    const [currentPage, setCurrentPage] = useState(1)
    const [allCoins, setAllcoins] = useState([]);
    const [savedData,setSavedData]=useState()
    const getData = async () => {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coinSearch}&order=${sortBy}&per_page=10&page=${currentPage}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en
`)
        const responseData = await response.json()
        
        setCryptoData(responseData)
    }
    const getCoinData = async (coinid) => {
        console.log(coinid)
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinid}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`)
        const responseData = await response.json()
        console.log(responseData)
        setCoinData(responseData)
    }
    const getSearchData = async (query) => {
        console.log(query)
        const response = await fetch(`
https://api.coingecko.com/api/v3/search?query=${query}`)
        const responseData = await response.json()
        
        
        setSearchData(responseData.coins)
    }
    const reset = () => {
        
        setCurrentPage(1);
        setCoinSearch("")
    }
    const saveCoin = (coinId) => {
        const oldcoins = JSON.parse(localStorage.getItem("coins"));
        if (oldcoins.includes(coinId)) {
            return;
        } else {
            const newCoin = [...oldcoins, coinId];
            localStorage.setItem("coins",JSON.stringify(newCoin))
        }
        
    }
    const removeCoin = (coinId) => {
        const oldcoins = JSON.parse(localStorage.getItem("coins"));
        const newcoin = oldcoins.filter(coin => coin !== coinId);
        setAllcoins(newcoin)
        localStorage.setItem("coins",JSON.stringify(newcoin))
    }
        const getSavedData = async (totalCoins=allCoins) => {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${totalCoins.join(",")}&order=${sortBy}&per_page=10&page=${currentPage}&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en
`)
        const responseData = await response.json()
        
        setSavedData(responseData)
    }
    useEffect(() => {
        getData()
        
        
    },[coinSearch,currency,sortBy,currentPage])
    useEffect(() => {
        let isThere = JSON.parse(localStorage.getItem("coins")) ||false;
        if (!isThere) {
            localStorage.setItem("coins",JSON.stringify([]))
        } else {
            let totalCoins = JSON.parse(localStorage.getItem("coins")) 
            setAllcoins(totalCoins)
            if (totalCoins.length > 0) {
            getSavedData(totalCoins)
        }
        }

        
    },
    [])
    
    return (
        <CryptoContext.Provider value={{
            cryptoData, searchData, getSearchData, setCoinSearch,
            setSearchData, currency, setCurrency, sortBy, setSortBy,
            currentPage, setCurrentPage, reset,
            coinData, setCoinData, getCoinData, allCoins, setAllcoins, saveCoin,
            removeCoin,savedData
            
        }
}>
        {props.children}
        </CryptoContext.Provider>
    );
};
export default CryptProvider;
