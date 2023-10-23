import { useEffect, useState } from "preact/hooks"
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts"

interface Props {
  data: Data[]
}

const heightMargin = 150
const widthMargin = 200

const Graph = ({ data }: Props) => {
  const [width, setWidth] = useState<number>(window.innerWidth - widthMargin)
  const [height, setHeight] = useState<number>(window.innerHeight - heightMargin)

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      event.preventDefault()

      const { innerWidth, innerHeight } = window
      setWidth(innerWidth - widthMargin)
      setHeight(innerHeight - heightMargin)
    })
  }, [])

  return (
    <LineChart width={width} height={height} data={data}>
      <Line type="monotone" dataKey="uv" stroke='#fff' />
      <CartesianGrid stroke="#ccc"/>
      <XAxis dataKey="name"/>
      <YAxis />
    </LineChart>
  )
}

export default Graph