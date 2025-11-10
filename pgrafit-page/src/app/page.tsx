"use client";

import AboutUs from "@/components/app/AboutUs"; 
import Graph_Section from "@/components/app/GraphSection";

export default function Home() {
  return (
    <div className="bg-primary  font-">
      <AboutUs/>
      <Graph_Section/>
    </div>
  );
}
