// components/Dashboard/GenericPieChart.tsx

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface GenericPieChartProps {
  data: Array<{ name: string; value: number }>;
}

const GenericPieChart: React.FC<GenericPieChartProps> = ({ data }) => {
  const COLORS = ['#0088FE', '#fc231c'];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default GenericPieChart;
