import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalProvider'
import { numberWithCommas } from '../utils/format'

export default function Each({ transaction }) {

    let sign = transaction.amount > 0 ? '+' : '-'

    const { deleteTransaction } = useContext(GlobalContext)

    return (
        <li className={transaction.amount > 0 ? 'plus' : 'minus'}>
            {transaction.text}<span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction._id)}>x</button>
        </li>
    )
}
