// TransactionsOverTime.tsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { eachDayOfInterval, format, startOfDay } from 'date-fns';

const TransactionsOverTime = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No data available.</p>;
  }

  // Sort the data by date in ascending order
  const sortedData = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));

  const startDate = new Date(sortedData[0].date);
  const endDate = new Date(sortedData[sortedData.length - 1].date);
  const dateRange = eachDayOfInterval({ start: startOfDay(startDate), end: startOfDay(endDate) });

  const transactionsData = dateRange.map((date) => {
    const filteredData = sortedData.filter((transaction) => format(new Date(transaction.date), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd'));
    return {
      date: format(date, 'yyyy-MM-dd'),
      transactions: filteredData.length,
    };
  });

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={transactionsData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="transactions" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TransactionsOverTime;
