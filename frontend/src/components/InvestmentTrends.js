"use client";

// components/InvestmentTrends.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const InvestmentTrends = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    axios.get('/api/get_insights')
      .then(response => setTrends(response.data.investmentTrends))
      .catch(error => console.error('Error fetching investment trends:', error));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Investment Trends</h2>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={trends}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="investment" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InvestmentTrends;
