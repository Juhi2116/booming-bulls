
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, Users, Shield, Zap } from 'lucide-react';

const TradingPlatformPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [revenue, setRevenue] = useState<number>(999151);

 const steps = [
    { id: 1, title: "Register your account" },
    { id: 2, title: "Deposit your funds" },
    { id: 3, title: "KYC" },
    { id: 4, title: "Start Trading & Earn Profits" }
  ];

const accounts = [
    {
      name: "Abcd Vintage",
      subtitle: "Perfect for balanced, all-level traders looking for consistency and solid growth.",
      initialCapital: "$10k",
      spread: "from 0.2 pips",
      commission: "No Commission",
      leverage: "1:Unlimited",
      lotSize: "0.01",
      tradeLimit: "200 trades during peak hours",
      openPosition: "Unlimited",
      stopOut: "0%",
      marginCall: "30%",
      swapPolicy: "0%",
      riskExposure: "Moderate",
      assets: "Forex, Crypto, Stocks, Commodities, Indices",
      buttonText: "Start Trading",
      cardClass: "bg-gradient-to-br from-purple-900 to-purple-800"
    },
    {
      name: "Abcd Cent",
      subtitle: "Designed for beginners ready to step into the trading world with minimal risk.",
      initialCapital: "$10",
      spread: "from 0.3 pips",
      commission: "Zero Commission",
      leverage: "1:Unlimited",
      lotSize: "Same",
      tradeLimit: "200 trades during peak hours",
      openPosition: "Unlimited",
      stopOut: "0%",
      marginCall: "30%",
      swapPolicy: "0%",
      riskExposure: "Low",
      assets: "Forex, Crypto, Stocks, Commodities, Indices",
      buttonText: "Start Trading",
      cardClass: "bg-gray-800"
    },
    {
      name: "Abcd Pro",
      subtitle: "Ideal for experienced traders seeking precision, speed, and high-stakes performance.",
      initialCapital: "$500",
      spread: "from 0.1 pips",
      commission: "No Commission",
      leverage: "1:Unlimited",
      lotSize: "Same",
      tradeLimit: "200 trades during peak hours",
      openPosition: "Unlimited",
      stopOut: "0%",
      marginCall: "30%",
      swapPolicy: "0%",
      riskExposure: "High",
      assets: "Forex, Crypto, Stocks, Commodities, Indices",
      buttonText: "Start Trading",
      cardClass: "bg-gradient-to-br from-purple-900 to-purple-800"
    }
  ];

  const features = [
    "Who It's For",
    "Initial Capital Requirement",
    "Spread Advantage",
    "Trading Fees",
    "Leverage Capacity",
    "Minimum Lot Size",
    "Trade Execution Limit",
    "Open Position Capacity",
    "Stop Out Threshold",
    "Margin Call Activation",
    "Swap Policy",
    "Risk Exposure",
    "Asset Options"
  ];
    useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [steps.length]);

  // Revenue counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => prev + Math.floor(Math.random() * 100));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen ">
      {/* Hero & Process Section - Dark Theme */}
      <div className="relative overflow-hidden ">
        {/* Background Pattern */}
        
       {/* Hero Title */}
          <div className="text-center my-28">
            <div className="inline-flex items-center gap-2  backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
              <span className="text-sm font-medium text-[#9F8BCF]">
                Our Process
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-medium text-white mb-6 leading-tight">
              Become a{" "}
              <span className=" bg-[#A35CA2] bg-clip-text text-transparent">
                Abcd Pro
              </span>
              in sec...
            </h1>
            <p className="text-slate-400 text-lg">
              🚀 Sign up. Fund. Trade.
            </p>
          </div>
<div
  className="relative container  px-6 py-2 bg-cover bg-center bg-no-repeat before:absolute before:inset-0 before:bg-black/80 before:z-0"
  style={{ backgroundImage: "url('/herobg.webp')" }}
> 
          {/* Vertical Process Flow */}
      <div className="max-w-4xl mx-auto relative">
        {steps.map((step, index) => {
          const isActive = activeStep === index;
          const isRight = index % 2 === 0; // step 1,3 → right; step 2,4 → left

          return (
            <div
              key={step.id}
              className="relative flex items-center mb-32 last:mb-0"
            >
              {/* Step Number */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <span
                  className={`text-5xl  font-bold transition-colors duration-300 ${
                    isActive ? "text-white" : "text-slate-400"
                  }`}
                >
                  {String(step.id).padStart(2, "0")}
                </span>

                {/* Vertical connector (only if not last step) */}
                {index < steps.length - 1 && (
                  <div className="absolute left-1/2 top-full w-px h-32 bg-slate-600 transform -translate-x-1/2" />
                )}
              </div>

              {/* Step Content */}
              <div className="w-full flex">
                {isRight ? (
                  <>
                    <div className="flex-1 " />
                    <div className="flex-1 pl-32 ml-10 text-left">
                      <p className="text-md text-slate-500 mb-1">Step {step.id}</p>
                      <h3
                        className={`text-xl font-medium transition-colors duration-300 text-white`}
                      >
                        {step.title}
                      </h3>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex-1 pr-32 mr-10 text-right">
                      <p className="text-sm text-slate-500 mb-1">Step {step.id}</p>
                      <h3
                        className={`text-xl font-medium transition-colors duration-300 text-white`}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <div className="flex-1" />
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
  


      
        </div>
            {/* CTA Button */}
          <div className="text-center mt-20">
            <Button
              className="bg-[#6242A5]  text-white px-12 py-6 text-md font-semibold rounded-2xl "
            >
              Open FREE Account
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
      </div>

      {/* Account Comparison Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-16">
    <div className="inline-flex items-center gap-2  backdrop-blur-sm rounded-full px-6 py-2 border border-white/20">
              <span className="text-sm font-medium text-[#9F8BCF]">
                Compare Plans
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-medium text-white mb-6 leading-tight">
              Compare your
              <span className=" bg-[#A35CA2] bg-clip-text text-transparent">
                Abcd plan
              </span>
             <p className="text-slate-400 text-lg">
Flexible Deposits for Every Trader

            </p>
            </h1>
          </div>

           <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature Labels Column */}
          <div className="col-span-2 lg:col-span-1">
            <div className="space-y-4 pt-20 text-center lg:text-left">
              {features.map((feature, index) => (
                <div key={index} className="h-16 flex items-center text-gray-300 text-sm font-medium">
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Account Cards */}
          {accounts.map((account, accountIndex) => (
            <div key={accountIndex} className="col-span-1">
              <div className={`${account.cardClass} rounded-2xl p-6 h-full`}>
                {/* Header */}
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold mb-3">{account.name}</h2>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {account.subtitle}
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-4">
                  {/* Initial Capital */}
                  <div className="h-16 flex items-center justify-center">
                    <span className="text-xl font-semibold">{account.initialCapital}</span>
                  </div>

                  {/* Spread */}
                  <div className="h-16 flex items-center justify-center">
                    <span className="text-sm">{account.spread}</span>
                  </div>

                  {/* Commission */}
                  <div className="h-16 flex items-center justify-center">
                    <span className="text-sm">{account.commission}</span>
                  </div>

                  {/* Leverage */}
                  <div className="h-16 flex items-center justify-center">
                    <span className="text-sm">{account.leverage}</span>
                  </div>

                  {/* Lot Size */}
                  <div className="h-16 flex items-center justify-center">
                    <span className="text-sm">{account.lotSize}</span>
                  </div>

                  {/* Trade Limit */}
                  <div className="h-16 flex items-center justify-center text-center">
                    <span className="text-sm">{account.tradeLimit}</span>
                  </div>

                  {/* Open Position */}
                  <div className="h-16 flex items-center justify-center">
                    <span className="text-sm">{account.openPosition}</span>
                  </div>

                  {/* Stop Out */}
                  <div className="h-16 flex items-center justify-center">
                    <span className="text-sm">{account.stopOut}</span>
                  </div>

                  {/* Margin Call */}
                  <div className="h-16 flex items-center justify-center">
                    <span className="text-sm">{account.marginCall}</span>
                  </div>

                  {/* Swap Policy */}
                  <div className="h-16 flex items-center justify-center">
                    <span className="text-sm">{account.swapPolicy}</span>
                  </div>

                  {/* Risk Exposure */}
                  <div className="h-16 flex items-center justify-center">
                    <span className="text-sm">{account.riskExposure}</span>
                  </div>

                  {/* Assets */}
                  <div className="h-16 flex items-center justify-center text-center">
                    <span className="text-sm">{account.assets}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 text-center">
                  <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 px-8 py-3 rounded-full text-white font-semibold transition-all duration-200 transform hover:scale-105">
                    {account.buttonText}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
        </div>
    

      {/* Revenue Section */}
      <div className="relative bg-gradient-to-br from-slate-900 to-purple-900/20 py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-48 bg-gradient-to-t from-purple-500/30 to-transparent rounded-full blur-3xl" />
        </div>
        
        <div className="relative text-center">
          <p className="text-slate-400 text-xl mb-8">Profits</p>
          <h3 className="text-7xl md:text-8xl font-bold text-white mb-8">
            ${revenue.toLocaleString()}<span className="text-purple-400">+</span>
          </h3>
          
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full px-8 py-4 shadow-2xl">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-semibold">Keep Growing</span>
          </div>
        </div>
      </div>

      {/* QR Code Section */}
      <div className="bg-slate-900 py-20 text-center">
        <div className="w-48 h-48 mx-auto mb-8 bg-white rounded-lg p-4">
          <div className="w-full h-full bg-slate-200 rounded flex items-center justify-center">
            <div className="text-slate-600 text-xs">QR CODE</div>
          </div>
        </div>
        
        <div className="flex justify-center items-center gap-4">
          <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
            <span className="text-slate-900 text-xs font-bold">A</span>
          </div>
          <span className="text-white font-semibold">Download App</span>
        </div>
      </div>
    </div>
  );
};

export default TradingPlatformPage;