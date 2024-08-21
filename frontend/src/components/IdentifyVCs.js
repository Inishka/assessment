"use client";

// components/IdentifyVCs.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const IdentifyVCs = () => {
  const [vcs, setVCs] = useState([]);

  useEffect(() => {
    axios.get('/api/get_vcs')
      .then(response => setVCs(response.data))
      .catch(error => console.error('Error fetching VCs:', error));
  }, []);

  return (
    <div className=" container col-span-2 p-6">
      <h2 className="  text-black text-2xl font-semibold mb-4">Identify Relevant VCs</h2>
      <ul className="list-disc pl-5 space-y-2">
        {vcs.map(vc => (
          <li key={vc.id} className="text-lg">{vc.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default IdentifyVCs;
