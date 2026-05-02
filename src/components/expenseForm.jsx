import {useState} from "react"

function ExpenceForm({dispatch}) {
    const [form, setForm] = useState({
        description:"",
        amount:"",
        category:"Food",
        type:"expense",
        date:""
    })

    const handleChange=(e)=>{
        setForm({ ...form, [e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log("Submitting:", form)
        if(!form.description || !form.amount || !form.date) return 
        console.log("Form data:", form)
        dispatch({
            type:"ADD_TRANSACTION",
            payload: {
                ...form,
                id:Date.now(),
                amount:parseFloat(form.amount)
            
            }
            
        })
        setForm({
            description:"",
            amount:"",
            category:"Food",
            type:"expense",
            date:""
        })

    }

  return (
  <section className="bg-white rounded-xl p-6 mb-6 shadow-md">
    <h2 className="text-xl font-bold mb-4 text-gray-800">Add Transaction</h2>
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Date</label>
            <input type="date" name="date" value={form.date}
            onChange={handleChange} 
            className="border rounded-lg px-3 py-2 text-sm"/>
        </div>
        <div className ="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Description</label>
            <input type ="text" name="description" value={form.description}
            onChange={handleChange} placeholder="e.g Lunch"
            className="border rounded-lg px-3 py-2 text-sm"
            />
        </div>
        <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Amount</label>
            <input type="number" name="amount" value={form.amount}
             onChange={handleChange} placeholder="0.00" step="0.01"
             className="border rounded-lg px-3 py-2 text-sm" />
        </div>
        <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Type</label>
            <select name="type" value={form.type} onChange={handleChange}
            className="border rounded-lg px-3 py-2 text-sm">
                <option value="expense">Expense</option>
                <option value="income">Income</option>
            </select>
        </div>
        <div className ="flex flex-col gap-1">
            <label className="text-sm text-gray-600">Category</label>
            <select name="category" value={form.category} onChange={handleChange}
            className="border rounded-lg px-3 py-2 text-sm">
                <option value="food">Food</option>
                <option value="transport">Transport</option>
                <option value="bills">Bills</option>
                <option value="entertainment">Entertainment</option>
                <option value="other">Other</option>
            </select>
        </div>
        <div className="flex items-end">
            <button type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-lg 
            hover:bg-green-600 transition-colors font-medium text-sm">
                Add Transaction
            </button>
        </div>
    </form>
  </section>
    )
}
export default ExpenceForm