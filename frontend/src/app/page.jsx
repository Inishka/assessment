"use client";

import { useState } from 'react'
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Dashboard from '@/components/Dashboard';
import "./globals.css";

export default function Home() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  
  return (
    <div className="grid-container">
      <Navbar OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      < Dashboard />
      

      {/* <IdentifyVCs />
      <RelatedCompanies />
      <Competitors companyName="" />
      <ExploreRelationships />
      <InvestmentTrends />
      <CompetitorAnalysis companyName="" />
      <MarketGaps /> 
       <EmailSubmission />  
       <D2CEntrepreneurs />
      <CompanyList />
      <CompetitorSearch />  */} 
    </div>
  );
}
