
import React from "react";
    import {
      Area,
      AreaChart,
      Bar,
      BarChart,
      Line,
      XAxis,
      YAxis,
      CartesianGrid,
      Tooltip,
      Legend,
      Scatter,
      ScatterChart,
      LineChart,
      PieChart, 
      Pie,
      PolarAngleAxis,
      Radar,
      RadarChart,
      PolarGrid,
      PolarRadiusAxis
    } from "recharts";
    // Add some mock data
    const data = [
        {
          month: 'January',
          savings: 5000,
          loss: 500
        },
        {
          month: 'February',
          savings: 8000,
          loss: 300
        },
        {
          month: 'March',
          savings: 3000,
          loss: 800
        },
        {
          month: 'April',
          savings: 6000,
          loss: 100
        },
        {
          month: 'May',
          savings: 4000,
          loss: 700
        },
        {
          month: 'June',
          savings: 9000,
          loss: 1200
        },
      ]
      

export default function Chart() {
  return (
    <>
       <div className="chart-container">
    <LineChart
      width={650}  // Make sure the width of the chart takes up the entire parent container
      height={280}
      data={data}
      className="livechart"
    >
      <CartesianGrid />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="loss" stroke="green" />
      <Line type="monotone" dataKey="savings" stroke="red" />
    </LineChart>
  </div>
    </>
  )
}
