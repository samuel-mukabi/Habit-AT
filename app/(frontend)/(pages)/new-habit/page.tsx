import React from 'react';
import { 
    Clock, 
    Target,
    Zap, 
    Award,
    Sun, 
    Moon, 
    Sunset, 
    Sunrise 
} from 'lucide-react';

export default function NewHabitPage() {
  return (
    <>
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block w-8 h-0.5 bg-primary"></span>
          <span className="label-small text-primary">Habit Initialization</span>
        </div>
        <h1 className="text-heading-mega">Create Habit</h1>
        <p className="mt-4 text-outline font-body text-lg max-w-2xl">
          Design your new behavioral loop with precision. A highly specific routine dramatically increases the probability of successful integration into your daily ecosystem.
        </p>
      </section>

      <section className="card-base max-w-4xl mx-auto">
        <form className="flex flex-col gap-10">
          
          {/* 1. Core Identification */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-2">
              <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center">
                 <Target className="w-4 h-4 text-primary" />
              </div>
              <h2 className="text-xl font-headline font-bold text-on-surface">Core Identification</h2>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-heading-base">Habit Designation (Name)</label>
              <input 
                type="text" 
                placeholder="e.g. 90m Deep Work Block, Morning Hydration, 10k Steps" 
                className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-4 py-3 text-base focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all w-full text-on-surface placeholder-outline-variant" 
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-heading-base">Primary Ecosystem (Category)</label>
              <div className="flex gap-3 flex-wrap">
                {['Cognitive', 'Physical', 'Recovery', 'Nutrition', 'Mindfulness', 'Language', 'Productivity'].map((cat, idx) => (
                    <button 
                      key={cat}
                      type="button" 
                      className={`px-5 py-2.5 label-small rounded-md border-none transition-all cursor-pointer ${
                          idx === 0 
                          ? 'bg-primary text-on-primary ring-2 ring-primary ring-offset-2 ring-offset-surface-container-low' 
                          : 'bg-surface-container-lowest border border-outline-variant/20 text-outline hover:bg-surface-container-high'
                      }`}
                    >
                      {cat}
                    </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-heading-base">Intrinsic Motivation / &#34;The Why&#34;</label>
              <textarea 
                rows={3}
                placeholder="Why is adding this to your life critical? What long-term identity are you building?" 
                className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all w-full text-on-surface placeholder-outline-variant resize-y" 
              />
            </div>
          </div>

          {/* 2. Loop Architecture */}
          <div className="flex flex-col gap-6 pt-4">
            <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-2">
              <div className="w-8 h-8 rounded-full bg-secondary-container/30 flex items-center justify-center">
                 <Zap className="w-4 h-4 text-secondary" />
              </div>
              <h2 className="text-xl font-headline font-bold text-on-surface">Loop Architecture</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-heading-base">Activation Cue (Trigger)</label>
                  <p className="text-xs text-outline font-body mb-1">What immediately precedes this habit?</p>
                  <input 
                    type="text" 
                    placeholder="e.g. After brushing my teeth..." 
                    className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all w-full text-on-surface placeholder-outline-variant" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-heading-base">Routine Sequence (Action)</label>
                  <p className="text-xs text-outline font-body mb-1">The exact tiny action to perform.</p>
                  <input 
                    type="text" 
                    placeholder="e.g. I will put on my running shoes." 
                    className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all w-full text-on-surface placeholder-outline-variant" 
                  />
                </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-heading-base gap-2 flex items-center">
                 Immediate Reward 
                 <Award className="w-4 h-4 text-tertiary" />
              </label>
              <p className="text-xs text-outline font-body mb-1">What dopamine hit locks this in? (Important for the first 21 days)</p>
              <input 
                type="text" 
                placeholder="e.g. A hot cup of specialty coffee, checking off the box, 5 mins of social media." 
                className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all w-full text-on-surface placeholder-outline-variant" 
              />
            </div>
          </div>

          {/* 3. Scheduling & Parameters */}
          <div className="flex flex-col gap-6 pt-4">
            <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-2">
              <div className="w-8 h-8 rounded-full bg-tertiary-container/20 flex items-center justify-center">
                 <Clock className="w-4 h-4 text-tertiary" />
              </div>
              <h2 className="text-xl font-headline font-bold text-on-surface">Scheduling & Parameters</h2>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-heading-base">Time of Day</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                 {[
                   { id: 'morning', label: 'Morning', icon: <Sunrise className="w-4 h-4" /> },
                   { id: 'afternoon', label: 'Afternoon', icon: <Sun className="w-4 h-4" /> },
                   { id: 'evening', label: 'Evening', icon: <Sunset className="w-4 h-4" /> },
                   { id: 'night', label: 'Night', icon: <Moon className="w-4 h-4" /> }
                 ].map((tod, i) => (
                    <button 
                      key={tod.id}
                      type="button" 
                      className={`flex flex-col items-center gap-2 p-4 rounded-md border transition-all cursor-pointer ${
                          i === 0 
                          ? 'bg-primary-container/10 border-primary text-primary shadow-sm' 
                          : 'bg-surface-container-lowest border-outline-variant/20 text-outline hover:border-outline-variant/50 hover:bg-surface-container-high'
                      }`}
                    >
                      {tod.icon}
                      <span className="font-headline font-medium text-sm">{tod.label}</span>
                    </button>
                 ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                <div className="flex flex-col gap-2">
                  <label className="text-heading-base">Frequency</label>
                  <select className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all w-full text-on-surface">
                    <option>Everyday</option>
                    <option>Weekdays (Mon-Fri)</option>
                    <option>Weekends (Sat-Sun)</option>
                    <option>Specific Days</option>
                    <option>Flexible (e.g. 3x a week)</option>
                  </select>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-heading-base">Daily Target Metric</label>
                  <div className="flex gap-2 items-center">
                    <input 
                      type="number" 
                      placeholder="1" 
                      defaultValue={1}
                      min={1}
                      className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all w-24 text-on-surface" 
                    />
                    <select className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all flex-1 text-on-surface">
                      <option>Sessions</option>
                      <option>Minutes</option>
                      <option>Hours</option>
                      <option>Pages</option>
                      <option>Miles</option>
                      <option>Ounces</option>
                      <option>Checkboxes</option>
                    </select>
                  </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-heading-base">Difficulty Level</label>
              <div className="flex gap-4 items-center">
                 <input type="range" min="1" max="4" defaultValue="2" className="w-full accent-primary" />
                 <div className="w-24 text-right shrink-0">
                    <span className="label-tiny bg-primary text-on-primary shadow-sm">Medium</span>
                 </div>
              </div>
              <div className="flex justify-between w-full text-xs text-outline font-body mt-1 pr-28">
                 <span>Effortless</span>
                 <span>Moderate</span>
                 <span>Hard</span>
                 <span>Epic</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="border-t border-outline-variant/20 pt-8 mt-6 flex justify-end gap-4">
             <button type="button" className="px-6 py-3 rounded-md font-bold text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer">
               Discard
             </button>
             <button type="button" className="btn-primary w-auto cursor-pointer flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Initialize Habit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
