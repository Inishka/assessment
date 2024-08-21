"use client";

// components/ExploreRelationships.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';

// Dynamically import ForceGraph2D with no SSR
const ForceGraph2D = dynamic(() => import('react-force-graph').then(mod => mod.ForceGraph2D), {
  ssr: false,
});

const ExploreRelationships = () => {
  const [relationships, setRelationships] = useState({ nodes: [], links: [] });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      axios.get('/api/get_relationships')
        .then(response => setRelationships(response.data))
        .catch(error => console.error('Error fetching relationships:', error));
    }
  }, []);

  if (typeof window === 'undefined') {
    return null; // Prevent rendering on the server side
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Explore Relationships</h2>
      <div className="w-full h-[600px] bg-gray-100">
        <ForceGraph2D
          graphData={relationships}
          nodeAutoColorBy="group"
          linkDirectionalParticles={4}
        />
      </div>
    </div>
  );
};

export default ExploreRelationships;
