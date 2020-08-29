import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalProvider'
import Each from './Each'

export default function History() {
    const { transactions, getTransactions } = useContext(GlobalContext)
    useEffect(() => {
        getTransactions()
    }, [])

    return (
        <div>
            <h3>记录</h3>
            <ul className="list">
                {transactions.map(transaction => <Each key={transaction._id} transaction={transaction} />)
                }
            </ul>
        </div>
    )
}
