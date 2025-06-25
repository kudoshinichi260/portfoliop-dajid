import React from 'react'
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

function Chart({charts}) {
    return (
        <div className="chart__container container grid">
            {charts.map((chart, index) => (
                <div className='donut-chart__wapper' key={index}>
                    
                <PieChart width={chart.size || 100} height={chart.size || 100} className="donut-chart">
                
                <Pie
                    data={[{ value: 100 }]} 
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={25}
                    outerRadius={40}
                    startAngle={90}
                    endAngle={-270}
                    fill="#ddd" 
                />
                <Pie
                    data={[{ value: chart.value }]}
                    dataKey="value"
                    cx="50%"
                    cy="50%"
                    innerRadius={25}
                    outerRadius={40}
                    startAngle={90}
                    endAngle={90 - (chart.value / 100) * 360} 
                >
                    <Cell className='chart-cell' />
                </Pie>
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" fontSize={12} fontWeight="bold">
                    {chart.value} 
                </text>
                <Tooltip></Tooltip>
                </PieChart>
                <p className='donut-chart__title'>{chart.name}</p>
                </div>
            ))}
            
        </div>
    )
}

export default Chart