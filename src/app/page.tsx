"use client"
import React from 'react';
import Services from "./components/services";
import History from "./components/history";
import Portfolio from "./components/portfolio";
import Suscribe from "./components/suscribe";


export default function Home() {
  return (
  <div>
    <Services/>  
    <History/>
    <Portfolio/>
    <Suscribe/>      
  </div>
);
}
