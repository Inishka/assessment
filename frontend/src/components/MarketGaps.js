"use client";

// components/MarketGaps.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
//import { HeatMap } from 'react-heatmap-grid';
import dynamic from 'next/dynamic';

const HeatMap = dynamic(() => import('react-heatmap-grid'), { ssr: false });

const MarketGaps = () => {
  const [gaps, setGaps] = useState({ xLabels: [], yLabels: [], data: [] });

  useEffect(() => {
    axios.get('/api/get_insights')
      .then(response => setGaps(response.data.marketGaps))
      .catch(error => console.error('Error fetching market gaps:', error));
  }, []);
  
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Market Gaps</h2>
      <div className="w-full h-[400px]">
        <HeatMap
          xLabels={gaps.xLabels}
          yLabels={gaps.yLabels}
          data={gaps.data}
          squares
          cellRender={(value) => value && `${value}`}
          cellStyle={(background, value) => ({
            background: `rgb(255, ${255 - value * 2.5}, ${255 - value * 2.5})`,
            color: '#000',
          })}
        />
      </div>
    </div>
  );
};

export default MarketGaps;
