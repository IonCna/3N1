import { render } from 'preact'
import { useState } from "preact/hooks"
// import { v4 } from "uuid"
// import Modal from './components/Modal'

import "./base.css"
import Graph from './components/Graph'

const App = () => {
  // const [isInputEmpty, setIsInputEmpty] = useState(false)
  // const [isValidInput] = useState(false)
  const [values, setValues] = useState<Data[]>([])

  const click = () => {
    const target = document.getElementById("target") as HTMLInputElement
    const { value } = target

    if (!value) return
    const targetToNumber = parseInt(value)
    const isInvalid = isNaN(targetToNumber)

    if (isInvalid) return

    const results: number[] = [targetToNumber]
    let number = targetToNumber

    do {
      number % 2 == 0 ? number /= 2 : number = (3 * number) + 1
      results.push(number)
    } while (number > 1);

    const data = results.map((item, index) => {
      return { name: `Iteration ${index}`, uv: item }
    })

    setValues(data)
  }

  return (
    <div className="w-full h-max grid justify-items-center">
      <div className="controls flex m-5">
        <input id="target" className="input w-full max-w-xs input-secondary" type="text" />
        <button onClick={click} className="btn btn-primary ml-4">Generar</button>
      </div>

      <div className="chart-container">
        {values.length > 0 && <Graph data={values} />}
      </div>

      { /** <Modal title='Ups!' content='No has ingresado ningún numero' open={isInputEmpty} /> */}
      { /** <Modal title='Ups!' content='El valor ingresado no es válido' open={isValidInput} />*/}
    </div>
  )
}

const container = document.getElementById('app')!
render(<App />, container)
