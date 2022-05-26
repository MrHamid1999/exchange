import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"


const Item = () => {

const {id} = useParams()
const charts = useSelector(state => state.chart) || []
const selectedChart = charts.filter(item => item.id == id)

console.log(selectedChart);

  return (
    <div>item</div>
  )
}

export default Item