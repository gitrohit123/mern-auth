import React from 'react';

export default function Home() {
  return (
    <div className='px-4 py-12 max-w-2xl mx-auto'>
      <h1 className='text-3xl font-bold  mb-4 text-slate-800'>
        Welcome to EU Taxonomy Aligner!
      </h1>
      <p className='mb-4 text-slate-700'>
        This web tool aims to enhance the speed, afordability, transparency, 
        traceability and accessibility of green finance for small and medium-sized 
        enterprises (SMEs), investors and service providers.
      </p>
      <select name="Activities" id="activities">
    <option value="Energy">Energy</option>
    <option value="Construction">Construction</option>
    <option value="Manufacturing">Manufacturing</option>
    </select>
    </div>
  );
}