import React, { useEffect } from "react"
import { Chart, registerables } from "chart.js"
Chart.register(...registerables)

import "nes.css/css/nes.min.css";
import "./styles/app.css"

import TNO from "../libs/3N1"

/**
 * 
 * @param { string } target 
 * @param { Chart } chart 
 */

function render(target, chart) {
    target = parseInt(target)

    const { data, labels } = TNO(target)

    // Removing the data

    chart.data.labels = 0
    chart.data.datasets.forEach(item => {
        item.data = 0
    })

    chart.update("none");

    // Adding new data


    chart.data.labels = labels
    chart.data.datasets.forEach(item => {
        item.data = data
        item.label = `X: ${target}`
    })

    chart.update("none");
}

const App = () => {
    /**
     * @type { Chart }
     */
    let chart

    useEffect(() => {
        const canvas = document.getElementById("graph").getContext("2d")

        chart = new Chart(canvas, {
            type: "line",
            data: {
                labels: 0,
                datasets: [
                    {
                        label: 'X',
                        data: [],
                        backgroundColor: "#ef0016",
                        borderColor: "#ef0016",
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: "Usless Graph"
                    },
                },
            }
        })
    })

    return (
        <>
            <canvas id="graph"></canvas>
            <div id="controls">
                <label htmlFor="target">Ingresa un numero</label>
                <input type="number" name="target" id="target" className="nes-textarea" /> <br />
                <button className="nes-btn is-primary" onClick={() => {
                    const value = document.getElementById("target").value
                    if (value == "") value = 0
                    render(value, chart)
                }}>Generate!</button>
                <div className="explicacion">
                    <p>Básicamente ingresas un numero "X" si este es par se divide entre 2, si es impar se multiplica por 3 y se le suma 1</p>
                    <h2>Utilidad</h2>
                    <p>Ninguna, esta cosa no sirve para nada, literalmente todo matemático te dirá que es un perdida de tiempo y lo es pero quería hacer un programa que lo graficara. Fin.</p>
                    <p>PD: Ya no hay bug, ya lo arreglé :D</p>
                </div>
            </div>
        </>
    )
}

export default App