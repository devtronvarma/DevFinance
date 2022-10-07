import { useEffect, useState } from 'react';
// import Company from "./Company"

const data = {
    "apple": 154,
    "microsoft": 250,
    "amazon": 120,
}

const SearchParams = () => {
    const [ticker, setTicker] = useState("");
    const [stockPrice, setStockPrice] = useState("");
    // const [fullName, setFullName] = useState("");
    // const [companyOverview, setCompanyOverview] = useState("");

    useEffect(() => {
        console.log(`current ticker: ${ticker}`);
        if (!ticker) {
            setTicker("")
        } else {
            setStockPrice(data[ticker]);
        }
    }, [ticker])

    return (
        <div className="search-params">
            <form>
                <label htmlFor='ticker'>
                <input id="ticker" 
                    value={ticker} 
                    placeholder="Ticker" 
                    onChange={(e) => setTicker(e.target.value)} />
                </label>
            </form>
            <div>
                StockPrice: {stockPrice}
            </div>
        </div>
    )
};

export default SearchParams;
