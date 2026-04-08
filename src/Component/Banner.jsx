import React from 'react';

const Banner = () => {
    return (
<div>
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse ">
    <img
      src="/banner.png"
    />
    <div>
        <button className="btn text-purple-700 bg-gray-200 rounded-3xl">New: AI-Powered Tools Available</button>
      <h1 className="text-7xl font-bold">Supercharge Your <br /> Digital Workflow</h1>
      <p className="py-6">
        Access premium AI tools, design assets, templates, and productivity <br /> software—all in one place. Start creating faster today. <br /> Explore Products
      </p>
      <div className="space-x-3">
        <button className="btn btn-primary rounded-3xl">Get Started</button>
        <button className="btn border-primary text-primary rounded-3xl"> <img src="/Play.png" alt="" /> Watch Demo</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;