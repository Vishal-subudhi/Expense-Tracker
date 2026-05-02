import {Pie} from "react-chartjs-2"
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from "chart.js"

ChartJS.register(ArcElement,Tooltip,Legend)

function ChartSection({transactions}) {
  const expenses= transactions.filter(t=>t.type==="expense")

  const categoryTotals=expenses.reduce((acc,t)=>{
    acc[t.category]=(acc[t.category] || 0) +t.amount
    return acc
  }, {})

  if(Object.keys(categoryTotals).length ===0){
    return(
      <div className="bg-white rounded-xl p-6 shadow-sm mb-6 text-center text-gray-400">
        Add Some Expenses in the chart!!
      </div>
    )
  }
  const data={
    labels: Object.keys(categoryTotals),
    datasets:[{
      data: Object.values(categoryTotals),
      backgroundColor:[
        "#8B5CF6", "#EF4444", "#F59E0B", 
        "#10B981", "#3B82F6"
      ],
      borderWidth:1
    }]
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
      <p className="text-xl font-bold text-gray-800 mb-4">
        Expenses by Category
      </p>
      <div style={{width:"250px", height:"250px"}} className="mx-auto">
        <Pie data={data}/>
      </div>  
    </div>
  )
}
export default ChartSection