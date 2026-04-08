import React from 'react';

const Stats = () => {
    return (
<div>
 <div className="stats rounded-none shadow h-50 w-full bg-purple-600">
  <div className="pt-15 space-y-4 place-items-center">
    <div className="stat-value text-5xl text-white">50K+</div>
    <div className="stat-desc text-sm text-white">Active Users</div>
  </div>

   <div class="divider divider-horizontal mx-auto"></div>

  <div className="pt-15 space-y-4 place-items-center">
    <div className="stat-value text-5xl text-white">200+</div>
    <div className="stat-desc text-sm text-white">Premium Tools</div>
  </div>

  <div class="divider divider-horizontal mx-auto divider-end"></div>

  <div className="pt-15 space-y-4 place-items-center">
    <div className="stat-value text-5xl text-white">4.9</div>
    <div className="stat-desc text-sm text-white">Rating</div>
  </div>
</div>
</div>
    );
};

export default Stats;