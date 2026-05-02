function SummarySection({transactions}) {

  const income= transactions
  .filter(t=> t.type ==="income")
  .reduce((sum,t)=>sum+t.amount,0)

  const expense= transactions
  .filter(t=> t.type ==="expense")
  .reduce((sum,t)=>sum+t.amount,0)

  const balance=income-expense

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <p className="text-sm text-green font-medium mb-1">Total Income</p>
        <p className="text-2xl font-bold text-green-700">₹{income.toFixed(2)}</p>
      </div>
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <p className="text-sm text-red-600 font-medium mb-1">Total Expense</p>
        <p className="text-2xl font-bold text-red-700">₹{expense.toFixed(2)}</p>
      </div>
      <div className={`${balance >=0? 'bg-blue-50 border-blue-200':'bg-orange-50 border-orange-200'} border rounded-xl p-6`}>
        <p className={`text-sm font-medium mb-1 ${balance>=0? 'text-blue-600':'text-orange-600'}`}>Balance</p>
        <p className={`text-2xl font-bold ${balance>=0?'text-blue-700':'text-orange-700'}`}>₹{balance.toFixed(2)}</p>
      </div>
    </div>
  )
}
export default SummarySection