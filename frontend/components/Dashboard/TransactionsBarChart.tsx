import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface TransactionsBarChartProps {
  data: any[];
}

const TransactionsBarChart: React.FC<TransactionsBarChartProps> = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="transactions" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default TransactionsBarChart;
