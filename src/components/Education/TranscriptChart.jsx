import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

function TranscriptChart() {
    const data = [
        { name: "HK1 (2020 - 2021)", value: 7.24 },
        { name: "HK2 (2020 - 2021)", value: 8.28},
        { name: "HK1 (2021 - 2022)", value: 8.28 },
        { name: "HK2 (2021 - 2022)", value: 8.14 },
        { name: "HK1 (2022 - 2023)", value: 9.09 },
        { name: "HK2 (2022 - 2023)", value: 8.36 },
        { name: "HK1 (2023 - 2024)", value: 7.65},
        { name: "HK2 (2023 - 2024)", value: 9.00 },
        { name: "", value: 10 }, 
      ];
      
    return (   
        <div>
            <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="var(--pattern-color)" strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </div>
        
    )

}

export default TranscriptChart
