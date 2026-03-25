import React from 'react';
import { Bolt, Plus, Check, Clock, CalendarHeart } from 'lucide-react';

export default function QuickLogPage() {
  return (
    <>
      <section className="mb-10 lg:flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-8 h-0.5 bg-primary"></span>
            <span className="label-small text-primary">Instant Action Recording</span>
          </div>
          <h1 className="text-heading-mega">Quick Log</h1>
          <p className="mt-4 text-outline font-body text-lg max-w-2xl">
            Register a completed routine or an impromptu deep work session without friction.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
        <section className="card-base flex flex-col gap-6">
          <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-2">
            <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center">
               <Bolt className="w-4 h-4 text-primary" />
            </div>
            <h2 className="text-xl font-headline font-bold text-on-surface">Log Entry</h2>
          </div>

          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-heading-base">Select Habit</label>
              <select className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all w-full text-on-surface">
                <option value="">Select a tracked unit...</option>
                <option value="1">90m Deep Work Block</option>
                <option value="2">Zone 2 Cardio</option>
                <option value="3">Morning Hydration</option>
                <option value="4">10 Min Vipassana</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-heading-base gap-2 flex items-center">
                  <Clock className="w-4 h-4 text-secondary" /> Duration
                </label>
                <input 
                  type="number" 
                  placeholder="Minutes" 
                  className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all w-full text-on-surface" 
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-heading-base gap-2 flex items-center">
                  <CalendarHeart className="w-4 h-4 text-tertiary" /> Quality
                </label>
                <select className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all w-full text-on-surface">
                   <option>Exceptional</option>
                   <option>Standard</option>
                   <option>Struggled</option>
                   <option>Barely passing</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-heading-base">Optional Note</label>
              <textarea 
                rows={2}
                placeholder="Briefly note any friction or flow observed..." 
                className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all w-full text-on-surface placeholder-outline-variant resize-y" 
              />
            </div>

            <button type="button" className="btn-primary mt-2">
               Stamp It
            </button>
          </form>
        </section>

        {/* Recent & Suggestions */}
        <div className="flex flex-col gap-6">
          <section className="card-base">
             <h3 className="text-heading-2 mb-4 text-outline">Frequently Logged</h3>
             <div className="flex flex-col gap-3">
                <button className="flex items-center justify-between p-3 rounded-md bg-surface-container-low hover:bg-surface-container-high transition-colors border border-outline-variant/10 text-left group">
                   <div>
                     <span className="block font-headline font-bold text-on-surface group-hover:text-primary transition-colors">Morning Hydration</span>
                     <span className="block label-tiny text-outline">16oz</span>
                   </div>
                   <Plus className="w-5 h-5 text-outline group-hover:text-primary" />
                </button>
                <button className="flex items-center justify-between p-3 rounded-md bg-surface-container-low hover:bg-surface-container-high transition-colors border border-outline-variant/10 text-left group">
                   <div>
                     <span className="block font-headline font-bold text-on-surface group-hover:text-secondary transition-colors">Deep Work Block</span>
                     <span className="block label-tiny text-outline">90 minutes</span>
                   </div>
                   <Plus className="w-5 h-5 text-outline group-hover:text-secondary" />
                </button>
             </div>
          </section>

          <div className="card-base border-primary/20 bg-primary/5 flex items-start gap-4 flex-1">
             <div className="w-10 h-10 rounded-full bg-primary flex shrink-0 items-center justify-center">
                 <Check className="w-5 h-5 text-on-primary" />
             </div>
             <div>
                <h4 className="text-heading-base text-primary mb-1">Consistency Check</h4>
                <p className="font-body text-sm text-on-surface-variant">
                   You are currently on a 4-day streak for logging deep work. Logging today will unlock the <em>Rhythmic Master</em> badge!
                </p>
             </div>
          </div>
        </div>
      </div>
    </>
  );
}
