import { Currency } from "../types";

interface CurrencyProp {
    coins: Currency,
}

function Coins({coins}: CurrencyProp) {
    

    return(
        <>
            <h3>Coins</h3>
            <div>Platinum: {coins.platinum}</div>
            <div>Gold: {coins.gold}</div>
            <div>Electrum: {coins.electrum}</div>
            <div>Silver: {coins.silver}</div>
            <div>Copper: {coins.copper}</div>
        </>
    )
}

export default Coins;