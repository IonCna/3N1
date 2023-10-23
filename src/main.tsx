import { render } from 'preact'
import { useState } from "preact/hooks"
import { v4 } from "uuid"

import Graph from './components/Graph'
import Modal from './components/Modal'

import "./base.css"
import About from './components/About'

const App = () => {
  const [isInputEmpty, setIsInputEmpty] = useState(false)
  const [isValidInput, setIsValidInput] = useState(true)
  const [isLowerCero, setIsLowerCero] = useState(false)
  const [isWeirdInput, setIsWeirdInput] = useState(false)

  const [values, setValues] = useState<Data[]>([])

  const click = () => {
    const target = document.getElementById("target") as HTMLInputElement
    const { value } = target

    if (!value) return setIsInputEmpty(true)
    const targetToNumber = parseInt(value)
    const isInvalid = isNaN(targetToNumber)

    if (value.startsWith("e")) return setIsWeirdInput(true)

    if (isInvalid) return setIsValidInput(false)
    if (targetToNumber <= 0) return setIsLowerCero(true)

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

  const clear = () => {
    const input = document.querySelector("#target") as HTMLInputElement
    
    setValues([])
    input.value = ""
  }

  return (
    <div className="w-full h-max grid justify-items-center relative">
      <div className="controls flex m-5">
        <button onClick={clear} class="btn btn-primary mr-4">Limpiar</button>
        <input id="target" className="input w-full max-w-xs input-secondary" type="text" />
        <button onClick={click} className="btn btn-primary ml-4">Generar</button>
      </div>

      <div className="chart-container">
        {values.length > 0 && <Graph data={values} />}
      </div>

      { values.length == 0 && <About /> }

      <Modal message='No has puesto nada para mostrar :(' open={isInputEmpty} id={v4()} />
      <Modal message='El input no es válido' open={!isValidInput} id={v4()} />
      <Modal message='El valor ingresado es menor o igual a 0, eso no se vale!' open={isLowerCero} id={v4()} />
      <Modal message='Nada de cosas raras he...' open={isWeirdInput} id={v4()} />
    </div>
  )
}

const container = document.getElementById('app')!
render(<App />, container)
