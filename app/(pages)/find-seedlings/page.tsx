import React from 'react';
import { Search, UserPlus, Flame, Target, MapPin, Hexagon } from 'lucide-react';

export default function FindSeedlingsPage() {
  return (
    <>
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block w-8 h-0.5 bg-secondary"></span>
          <span className="label-small text-secondary">Ecosystem Expansion</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-heading-mega">Find Seedlings</h1>
              <p className="mt-4 text-outline font-body text-lg max-w-2xl">
                Connect with behavioral architects sharing similar constraints and daily routines.
              </p>
            </div>
            
            <div className="relative w-full md:w-80">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-outline-variant" />
              </div>
              <input
                type="text"
                placeholder="Search usernames or shared habits..."
                className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-full focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-sm text-on-surface"
              />
            </div>
        </div>
      </section>

      {/* Suggested Matches */}
      <section className="mb-12">
         <h2 className="text-heading-2 mb-6 text-on-surface">Algorithmic Matches</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* User Card */}
            <div className="card-base flex flex-col items-center text-center group border border-transparent hover:border-secondary/20 transition-all">
               <div className="w-20 h-20 rounded-full bg-surface-container-highest mb-4 overflow-hidden border-2 border-surface relative shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" alt="Avatar" className="w-full h-full object-cover" />
               </div>
               <h3 className="text-heading-base text-on-surface group-hover:text-secondary transition-colors mb-1">Emma.C</h3>
               <p className="text-xs text-outline font-body flex items-center gap-1 mb-3">
                  <MapPin className="w-3 h-3" /> Pacific Standard Time
               </p>
               
               <div className="flex gap-2 w-full justify-center mb-6">
                  <span className="label-tiny bg-primary/10 text-primary px-2 py-1 rounded-md border border-primary/20 flex items-center gap-1"><Flame className="w-3 h-3"/> 32 Days</span>
                  <span className="label-tiny bg-secondary/10 text-secondary px-2 py-1 rounded-md border border-secondary/20 flex items-center gap-1"><Hexagon className="w-3 h-3"/> Titan</span>
               </div>

               <div className="w-full text-left mb-6 flex-1">
                  <span className="label-tiny text-outline uppercase tracking-widest block mb-2">Overlapping Routines:</span>
                  <div className="flex gap-2 flex-wrap">
                     <span className="text-xs text-on-surface-variant font-bold bg-surface-container-high px-2 py-1 rounded-md">Deep Work Segment</span>
                     <span className="text-xs text-on-surface-variant font-bold bg-surface-container-high px-2 py-1 rounded-md">Zone 2 Cardio</span>
                  </div>
               </div>

               <button className="w-full py-2.5 bg-surface-container-high text-on-surface hover:bg-secondary hover:text-white rounded-md font-bold text-sm transition-colors flex items-center justify-center gap-2 mt-auto">
                  <UserPlus className="w-4 h-4" /> Link Routine
               </button>
            </div>

            <div className="card-base flex flex-col items-center text-center group border border-transparent hover:border-tertiary/20 transition-all">
               <div className="w-20 h-20 rounded-full bg-surface-container-highest mb-4 overflow-hidden border-2 border-surface relative shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" alt="Avatar" className="w-full h-full object-cover" />
               </div>
               <h3 className="text-heading-base text-on-surface group-hover:text-tertiary transition-colors mb-1">Marcus.SYS</h3>
               <p className="text-xs text-outline font-body flex items-center gap-1 mb-3">
                  <MapPin className="w-3 h-3" /> Central European
               </p>
               
               <div className="flex gap-2 w-full justify-center mb-6">
                  <span className="label-tiny bg-primary/10 text-primary px-2 py-1 rounded-md border border-primary/20 flex items-center gap-1"><Target className="w-3 h-3"/> 98% AC</span>
               </div>

               <div className="w-full text-left mb-6 flex-1">
                  <span className="label-tiny text-outline uppercase tracking-widest block mb-2">Overlapping Routines:</span>
                  <div className="flex gap-2 flex-wrap">
                     <span className="text-xs text-on-surface-variant font-bold bg-surface-container-high px-2 py-1 rounded-md">Digital Sunset</span>
                     <span className="text-xs text-on-surface-variant font-bold bg-surface-container-high px-2 py-1 rounded-md">10 Min Vipassana</span>
                  </div>
               </div>

               <button className="w-full py-2.5 bg-surface-container-high text-on-surface hover:bg-tertiary hover:text-white rounded-md font-bold text-sm transition-colors flex items-center justify-center gap-2 mt-auto">
                  <UserPlus className="w-4 h-4" /> Link Routine
               </button>
            </div>

            <div className="card-base flex flex-col items-center text-center group border border-transparent hover:border-primary/20 transition-all">
               <div className="w-20 h-20 rounded-full bg-surface-container-highest mb-4 overflow-hidden border-2 border-surface relative shadow-sm flex items-center justify-center text-xl font-bold text-primary">
                  J.K
               </div>
               <h3 className="text-heading-base text-on-surface group-hover:text-primary transition-colors mb-1">Julian.K</h3>
               <p className="text-xs text-outline font-body flex items-center gap-1 mb-3">
                  <MapPin className="w-3 h-3" /> GMT+8
               </p>
               
               <div className="flex gap-2 w-full justify-center mb-6">
                  <span className="label-tiny bg-primary/10 text-primary px-2 py-1 rounded-md border border-primary/20 flex items-center gap-1"><Flame className="w-3 h-3"/> 14 Days</span>
                  <span className="label-tiny bg-tertiary/10 text-tertiary px-2 py-1 rounded-md border border-tertiary/20 flex items-center gap-1"><Hexagon className="w-3 h-3"/> Initiator</span>
               </div>

               <div className="w-full text-left mb-6 flex-1">
                  <span className="label-tiny text-outline uppercase tracking-widest block mb-2">Overlapping Routines:</span>
                  <div className="flex gap-2 flex-wrap">
                     <span className="text-xs text-on-surface-variant font-bold bg-surface-container-high px-2 py-1 rounded-md">Morning Hydration</span>
                  </div>
               </div>

               <button className="w-full py-2.5 bg-surface-container-high text-on-surface hover:bg-primary hover:text-on-primary rounded-md font-bold text-sm transition-colors flex items-center justify-center gap-2 mt-auto">
                  <UserPlus className="w-4 h-4" /> Link Routine
               </button>
            </div>

         </div>
      </section>
    </>
  );
}
