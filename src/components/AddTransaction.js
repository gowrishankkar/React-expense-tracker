import React, {useState} from 'react'

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    return (
        <div>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-controls">
                    <label htmlFor="text"> Text</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />

                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br />
                    </label>
                </div>
            </form>
        </div>
    )
}
