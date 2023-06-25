import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface GenericBarChartProps {
  data: Array<{ name: string; value: number }>;
  dataKey: string;
}
const COLORS = ['#0088FE', '#fc231c'];

const GenericBarChart: React.FC<GenericBarChartProps> = ({ data, dataKey }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Bar dataKey={dataKey} fill={COLORS[0]} />
        <Bar dataKey={dataKey} fill={COLORS[1]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GenericBarChart;
