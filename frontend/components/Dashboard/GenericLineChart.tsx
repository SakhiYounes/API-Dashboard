// components/Dashboard/GenericLineChart.tsx

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface GenericLineChartProps {
  data: Array<{ name: string; [key: string]: number }>;
  dataKey: string;
  type?: 'line' | 'area';
}

const GenericLineChart: React.FC<GenericLineChartProps> = ({ data, dataKey, type = 'line' }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type={type} dataKey={dataKey} stroke="#0088FE" />
        <Line type={type} dataKey={dataKey} stroke="#fc231c" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GenericLineChart;
