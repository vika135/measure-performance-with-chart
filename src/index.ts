import "./style.css";
import { ChartResultData, measurePerformance } from "./measurePerformance"

import { Chart, ChartData, registerables } from "chart.js";
Chart.register(...registerables);

const ctx = (document.getElementById('myChart') as HTMLCanvasElement).getContext('2d');

const { labels, results }: ChartResultData = measurePerformance();
const data: ChartData = {
    labels,
    datasets: [{
        label: 'Comparison of Array.find and Binary Search efficiency',
        data: results,
        fill: false,
        borderColor: 'rgb(250,191,151)',
        tension: 0.1,
    }]
};

const myChart = new Chart(ctx, {
    type: 'line',
    data,
})