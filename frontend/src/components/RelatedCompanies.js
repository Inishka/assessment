"use client";

// components/RelatedCompanies.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RelatedCompanies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios.get('/api/get_companies')
      .then(response => setCompanies(response.data))
      .catch(error => console.error('Error fetching companies:', error));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Related Companies</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Company Name</th>
            <th className="px-4 py-2">Industry</th>
          </tr>
        </thead>
        <tbody>
          {companies.map(company => (
            <tr key={company.id} className="bg-gray-100">
              <td className="border px-4 py-2">{company.name}</td>
              <td className="border px-4 py-2">{company.industry}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RelatedCompanies;
