import ChartSection from "./components/ChartSection"
import ExpenceForm from "./components/ExpenseForm"
import Navbar from "./components/Navbar"
import SummarySection from "./components/SummarySection"
import TransactionList from "./components/TransactionList"
import { useReducer,useEffect } from "react"

function init(){
  const saved= localStorage.getItem("transactions")
  return saved ? {transactions: JSON.parse(saved)}:{transactions:[]}
}

const initialState={
    transactions:[]
  }

function reducer(state, action){
  
  switch (action.type) {
    case "ADD_TRANSACTION":
      return{
        ...state,
        transactions:[...state.transactions,action.payload]
      }
    case "DELETE_TRANSACTION":
      return{
        ...state,
        transactions:state.transactions.filter(t=>t.id !==action.payload)
      }
    default:
      return state
  }
}


function App() {
  const [state, dispatch]=useReducer(reducer, undefined,init)

  useEffect(()=>{
  localStorage.setItem("transactions",JSON.stringify(state.transactions))
},[state.transactions])

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar brand="Expence Tracker" links="#"/>
      <div className="max-w-6xl mx-auto p-6">
        <ExpenceForm dispatch={dispatch}/>
        <SummarySection transactions={state.transactions}/>
        <TransactionList transactions={state.transactions} dispatch={dispatch} />
        <ChartSection transactions={state.transactions}/>  
      </div>
    </div>
  )
}

export default App
