"use client";

// components/CompetitorAnalysis.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';

const CompetitorAnalysis = ({ companyName }) => {
  const [analysis, setAnalysis] = useState([]);

  useEffect(() => {
    axios.get(`/api/get_competitors/${companyName}`)
      .then(response => setAnalysis(response.data))
      .catch(error => console.error('Error fetching competitor analysis:', error));
  }, [companyName]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Competitor Analysis</h2>
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart data={analysis}>
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" />
          <PolarRadiusAxis angle={30} />
          <Radar name="Competitors" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompetitorAnalysis;

