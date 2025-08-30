
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

  const accountTypes = [
    {
      id: "vintage",
      name: "Abcd Vintage",
      badge: "VINTAGE",
      badgeColor: "bg-purple-600 text-white",
      description: "Perfect for advanced, all-level traders looking for consistency and solid growth.",
      features: {
        "Who It's For": "Advanced traders",
        "Initial Capital Requirement": "$10k",
        "Spread Advantage": "from 0.2 pips",
        "Trading Fees": "No Commission",
        "Leverage Capacity": "1:500",
        "Minimum Lot Size": "0.01",
        "Trade Execution Limit": "Unlimited",
        "Open Position Capacity": "Unlimited",
        "Stop Out Threshold": "50%",
        "Margin Call Activation": "80%",
        "Swap Policy": "0%",
        "Risk Exposure": "High",
        "Asset Options": "Forex, Crypto, Stocks, Commodities, Indices"
      },
      highlight: true
    },
    {
      id: "cent",
      name: "Abcd Cent",
      badge: "CENT",
      badgeColor: "bg-green-600 text-white",
      description: "Designed for beginners ready to step into the trading world with minimal risk.",
      features: {
        "Who It's For": "Beginners",
        "Initial Capital Requirement": "$10",
        "Spread Advantage": "from 0.3 pips",
        "Trading Fees": "Zero Commission",
        "Leverage Capacity": "1:500",
        "Minimum Lot Size": "0.01",
        "Trade Execution Limit": "Unlimited",
        "Open Position Capacity": "Unlimited",
        "Stop Out Threshold": "50%",
        "Margin Call Activation": "80%",
        "Swap Policy": "0%",
        "Risk Exposure": "Low",
        "Asset Options": "Forex, Crypto, Stocks, Commodities, Indices"
      }
    },
    {
      id: "pro",
      name: "Abcd Pro",
      badge: "PRO",
      badgeColor: "bg-blue-600 text-white",
      description: "Ideal for experienced traders seeking precision, speed, and high-stakes performance.",
      features: {
        "Who It's For": "Professional traders",
        "Initial Capital Requirement": "$500",
        "Spread Advantage": "from 0.1 pips",
        "Trading Fees": "No Commission",
        "Leverage Capacity": "1:500",
        "Minimum Lot Size": "0.01",
        "Trade Execution Limit": "Unlimited",
        "Open Position Capacity": "Unlimited",
        "Stop Out Threshold": "50%",
        "Margin Call Activation": "80%",
        "Swap Policy": "0%",
        "Risk Exposure": "High",
        "Asset Options": "Forex, Crypto, Stocks, Commodities, Indices"
      }
    }
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

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {accountTypes.map((account) => (
              <Card
                key={account.id}
                className={`relative bg-slate-800/50 border-slate-700 text-white transition-all duration-300 cursor-pointer hover:bg-slate-800/70 ${
                  account.highlight
                    ? "ring-2 ring-purple-400 shadow-2xl scale-105"
                    : "hover:scale-105"
                } ${hoveredCard === account.id ? "transform scale-105 shadow-2xl" : ""}`}
                onMouseEnter={() => setHoveredCard(account.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <CardHeader className="pb-4">
                  <div className="text-center mb-6">
                    <Badge className={`${account.badgeColor} px-4 py-2 text-sm font-semibold mb-4`}>
                      {account.badge}
                    </Badge>
                    <h4 className="text-2xl font-bold text-white mb-4">{account.name}</h4>
                    <p className="text-slate-300 leading-relaxed text-sm">{account.description}</p>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-4 mb-8">
                    {Object.entries(account.features).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-start py-2 border-b border-slate-700/50">
                        <span className="text-sm text-slate-400 flex-1 pr-4">{key}</span>
                        <span className="text-sm font-medium text-white text-right flex-shrink-0">
                          {value}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full transition-all duration-300 ${
                      account.highlight
                        ? "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                        : "bg-slate-700 hover:bg-slate-600 text-white"
                    } py-3 rounded-lg font-semibold`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
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