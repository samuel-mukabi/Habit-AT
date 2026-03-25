import React from 'react';
import { Filter, Search, Calendar, Star, Tag } from 'lucide-react';

export default function HabitFilterPage() {
  return (
    <>
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block w-8 h-0.5 bg-secondary"></span>
          <span className="label-small text-secondary">Advanced Search</span>
        </div>
        <h1 className="text-heading-mega">Filter Journal</h1>
        <p className="mt-4 text-outline font-body text-lg max-w-2xl">
          Isolate your documentation by specific behavioral vectors to identify long-term patterns.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl">
        
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="card-base flex flex-col gap-5 sticky top-6">
            <div className="flex items-center gap-2 border-b border-outline-variant/20 pb-3">
               <Filter className="w-5 h-5 text-on-surface" />
               <h3 className="text-heading-2">Parameters</h3>
            </div>
            
            <div className="flex flex-col gap-2">
               <label className="label-tiny uppercase tracking-widest text-outline">Target Habit</label>
               <select className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all text-on-surface">
                  <option>All Habits</option>
                  <option>90m Deep Work Block</option>
                  <option>10k Steps</option>
                  <option>Morning Hydration</option>
                  <option>10 Min Vipassana</option>
               </select>
            </div>

            <div className="flex flex-col gap-2">
               <label className="label-tiny uppercase tracking-widest text-outline">Date Range</label>
               <input 
                 type="date" 
                 className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all text-on-surface"
               />
            </div>

            <div className="flex flex-col gap-2">
               <label className="label-tiny uppercase tracking-widest text-outline">Entry Type</label>
               <div className="flex flex-col gap-1">
                  <label className="flex items-center gap-2 cursor-pointer p-1 hover:bg-surface-container-high rounded-md transition-colors">
                     <input type="checkbox" className="accent-secondary" defaultChecked />
                     <span className="text-sm text-on-surface">Observation</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-1 hover:bg-surface-container-high rounded-md transition-colors">
                     <input type="checkbox" className="accent-secondary" defaultChecked />
                     <span className="text-sm text-on-surface">Friction Point</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer p-1 hover:bg-surface-container-high rounded-md transition-colors">
                     <input type="checkbox" className="accent-secondary" defaultChecked />
                     <span className="text-sm text-on-surface">Breakthrough</span>
                  </label>
               </div>
            </div>

            <button className="w-full py-2 bg-secondary text-white rounded-md font-bold text-sm shadow-md hover:bg-secondary/90 transition-colors mt-2 text-center cursor-pointer">
               Apply Filters
            </button>
          </div>
        </div>

        {/* Results Feed */}
        <div className="lg:col-span-3 flex flex-col gap-6">
           <div className="flex items-center justify-between pb-4 border-b border-outline-variant/20">
              <span className="text-sm font-bold text-on-surface">3 entries found for &#34;90m Deep Work Block&#34;</span>
              <div className="relative w-64 hidden sm:block">
                 <Search className="w-4 h-4 text-outline absolute left-3 top-1/2 -translate-y-1/2" />
                 <input 
                   type="text" 
                   placeholder="Search within results..." 
                   className="w-full bg-surface-container-low border border-outline-variant/30 rounded-full pl-9 pr-4 py-1.5 text-xs focus:ring-1 focus:ring-secondary outline-none text-on-surface" 
                 />
              </div>
           </div>

           {/* Entry Card */}
           <div className="journal-entry">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-heading-base text-on-surface">Mental Clarity Threshold</h4>
                  <div className="flex items-center gap-2 mt-1">
                     <Calendar className="w-3 h-3 text-outline" />
                     <p className="label-small text-outline tracking-wider">Today • 11:30 AM</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Star className="w-3.5 h-3.5 text-secondary fill-current" />
                  <Star className="w-3.5 h-3.5 text-secondary fill-current" />
                </div>
              </div>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Noticed a significant dip in focus around the 3-hour mark without a break. Need to strictly enforce the 90-15 minute cycle instead of pushing through. 
              </p>
              <div className="mt-4 flex gap-2">
                <span className="journal-tag flex items-center gap-1"><Tag className="w-3 h-3" /> Observation</span>
                <span className="journal-tag flex items-center gap-1"><Tag className="w-3 h-3" /> DeepWork</span>
              </div>
            </div>

            <div className="journal-entry-error">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-heading-base text-error">Friction Point: Environmental Noise</h4>
                  <div className="flex items-center gap-2 mt-1">
                     <Calendar className="w-3 h-3 text-outline" />
                     <p className="label-small text-outline tracking-wider">Jan 18, 2024 • 02:40 PM</p>
                  </div>
                </div>
              </div>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                Attempted an afternoon session. The environment was too volatile. Learned that secondary deep work blocks require a location shift for better mental anchoring.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="journal-tag border-error/20 text-error flex items-center gap-1"><Tag className="w-3 h-3" /> Blocker</span>
              </div>
            </div>

            <div className="journal-entry border border-secondary/20 bg-secondary/5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-heading-base text-secondary">Flow State Reached (Early Morning)</h4>
                  <div className="flex items-center gap-2 mt-1">
                     <Calendar className="w-3 h-3 text-outline" />
                     <p className="label-small text-outline tracking-wider">Jan 17, 2024 • 07:15 AM</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Star className="w-3.5 h-3.5 text-secondary fill-current" />
                  <Star className="w-3.5 h-3.5 text-secondary fill-current" />
                  <Star className="w-3.5 h-3.5 text-secondary fill-current" />
                </div>
              </div>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                The 90-minute block felt effortless. Eliminating digital noise before 9 AM has drastically increased the initial immersion speed. No blockers identified.
              </p>
              <div className="mt-4 flex gap-2">
                <span className="journal-tag flex items-center gap-1"><Tag className="w-3 h-3" /> MorningRhythm</span>
                <span className="journal-tag flex items-center gap-1"><Tag className="w-3 h-3" /> Breakthrough</span>
              </div>
            </div>
        </div>

      </div>
    </>
  );
}
