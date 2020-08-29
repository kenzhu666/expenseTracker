import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalProvider'
import { numberWithCommas } from '../utils/format'

export default function IncExp() {
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)

    let income = amounts
        .filter(amount => amount > 0)
        .reduce((acc, item) => acc += item, 0)
        .toFixed(2)

    let expense = amounts
        .filter(amount => amount < 0)
        .reduce((acc, item) => acc += item, 0)
        .toFixed(2) * -1


    return (
        <div className="inc-exp-container">
            <div>
                <h4>收入</h4>
                <p className="money plus">+¥{numberWithCommas(income)}</p>
            </div>
            <div>
                <h4>支出</h4>
                <p className="money minus">-¥{numberWithCommas(expense)}</p>
            </div>
        </div>
    )
}
