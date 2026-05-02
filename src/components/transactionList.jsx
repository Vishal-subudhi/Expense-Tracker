function TransactionList({transactions, dispatch}) {
  if(transactions.length ===0){
    return(
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6 text-center text-gray-500">
        No transactions yet. Please add some transactions to see them here.
      </div>
    )
  }
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
      <p className="text-xl font-bold text-gray-800 mb-4">Transactions</p>
      {transactions.map(t=>(
        <div key={t.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
          <div className="flex flex-col">
            <span className="font-medium text-gray-800">{t.description}</span>
            <span className="text-xs text-gray-400">{t.category}.{t.date}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className ={`font-bold ${t.type ==="income" ? "text-green-600":"text-red-600"}`}>
              {t.type==="income"? "+":"-"}₹{t.amount.toFixed(2)}
            </span>
        </div>
      <button onClick={()=>dispatch({type: "DELETE_TRANSACTION", payload: t.id})} 
      className="text-sm text-red-400 hover:text-red-600 font-medium">Delete</button>
    </div>
  ))}
  </div>
  )
}
export default TransactionList