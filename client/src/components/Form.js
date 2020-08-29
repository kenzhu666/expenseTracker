import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalProvider'

export default function Form() {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState('')

    const { transactions } = useContext(GlobalContext)
    const { addTransaction } = useContext(GlobalContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newAdd = {
            id: transactions.length + 1,
            text,
            amount: +amount // shorthand of parseInt
        }
        addTransaction(newAdd)
        setText('')
        setAmount('')
    }
    return (
        <div>
            <h3>添加收入或支出</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">名称</label>
                    <input value={text} onChange={(e) => setText(e.target.value)} type="text" />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >金额 <br />
                    (输入负数 - 支出, 输入正数 - 收入)</label>
                    <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" />
                </div>
                <button className="btn">添加</button>
            </form>
        </div>
    )
}
