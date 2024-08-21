//import CompanyList from "@/pages/CompanyList";
//import CompetitorSearch from "@/pages/CompetitorSearch";
//import D2CEntrepreneurs from "@/pages/D2CEntrepreneurs";
import CompetitorAnalysis from "@/components/CompetitorAnalysis";
import Competitors from "@/components/Competitors";
//import EmailSubmission from "@/components/EmailSubmission";
import ExploreRelationships from "@/components/ExploreRelationships";
import IdentifyVCs from "@/components/IdentifyVCs";
import InvestmentTrends from "@/components/InvestmentTrends";
import MarketGaps from "@/components/MarketGaps";
import Navbar from "@/components/Navbar";
import RelatedCompanies from "@/components/RelatedCompanies";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-7 max-md:pb-14 sm:px-14">
      <Navbar />
      <Sidebar />
      <IdentifyVCs />
      <RelatedCompanies />
      <Competitors companyName="" />
      <ExploreRelationships />
      <InvestmentTrends />
      <CompetitorAnalysis companyName="" />
      <MarketGaps />
    {/* <EmailSubmission />  */}

      {/*    <D2CEntrepreneurs />
      <CompanyList />
      <CompetitorSearch />  */} 
    </div>
  );
}
