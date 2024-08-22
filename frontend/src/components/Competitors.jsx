"use client";

// components/Competitors.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Competitors = ({ companyName }) => {
  const [competitors, setCompetitors] = useState([]);

  useEffect(() => {
    axios.get(`/api/get_competitors/${companyName}`)
      .then(response => setCompetitors(response.data))
      .catch(error => console.error('Error fetching competitors:', error));
  }, [companyName]);

  return (
    <div className="p-6">
      <h2 className="text-2xl text-black font-semibold mb-4">Competitor Analysis</h2>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={competitors}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="marketShare" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Competitors;
