import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalProvider'
import { numberWithCommas } from '../utils/format'

export default function Balance() {
    const { transactions } = useContext(GlobalContext)

    const amount = transactions.map(transaction => transaction.amount)

    const total = amount.reduce((acc, item) => acc += item, 0).toFixed(2)
    return (
        <div>
            <h4>当前余额</h4>
            <h1>¥{numberWithCommas(total)}</h1>
        </div>
    )
}
