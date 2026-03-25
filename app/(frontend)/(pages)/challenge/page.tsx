import React from 'react';
import { Target, CheckCircle2, Zap, Users, Shield, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ChallengePage() {
  return (
    <>
      <Link href="/community" className="inline-flex items-center gap-2 text-outline hover:text-primary transition-colors label-small font-bold mb-8 cursor-pointer border-none bg-transparent">
         <ArrowLeft className="w-4 h-4" /> Return to Ecosystem
      </Link>

      <section className="mb-10 lg:flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-8 h-0.5 bg-error"></span>
            <span className="label-small text-error">Architectural Constraint</span>
          </div>
          <h1 className="text-heading-mega">Digital Vegan Week</h1>
          <p className="mt-4 text-outline font-body text-lg max-w-2xl">
            A radical isolation protocol designed to detox baseline dopamine levels and reclaim cognitive bandwidth.
          </p>
        </div>
        <button className="btn-primary mt-6 lg:mt-0 bg-error! hover:bg-error/90! text-white! shadow-error/20!" style={{ width: 'auto' }}>
          <Zap className="w-5 h-5" />
          Adopt Constraint
        </button>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 flex flex-col gap-8">
            {/* The Rules */}
            <section className="card-base flex flex-col gap-6">
               <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-4">
                  <Shield className="w-6 h-6 text-error" />
                  <h2 className="text-heading-2">Protocol Parameters</h2>
               </div>
               
               <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                     <span className="p-1 rounded-full bg-error/10 text-error shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4"/></span>
                     <div>
                        <strong className="text-on-surface text-sm block mb-1">Strict Ban on Algorithmic Infinite Feeds</strong>
                        <p className="text-outline font-body text-sm leading-relaxed">No TikTok, Instagram Reels, YouTube Shorts, or Twitter For You page. You may use utility functions (direct messages, search) but not passive consumption engines.</p>
                     </div>
                  </li>
                  <li className="flex items-start gap-3">
                     <span className="p-1 rounded-full bg-error/10 text-error shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4"/></span>
                     <div>
                        <strong className="text-on-surface text-sm block mb-1">News Blackout</strong>
                        <p className="text-outline font-body text-sm leading-relaxed">No checking news aggregators or headlines. Information must be sought out deliberately (e.g., reading a specific Longform article), not scrolled.</p>
                     </div>
                  </li>
                  <li className="flex items-start gap-3">
                     <span className="p-1 rounded-full bg-error/10 text-error shrink-0 mt-0.5"><CheckCircle2 className="w-4 h-4"/></span>
                     <div>
                        <strong className="text-on-surface text-sm block mb-1">The 30-Minute Daily Threshold</strong>
                        <p className="text-outline font-body text-sm leading-relaxed">If you must use social media for professional/social constraints, structural limitations require you to restrict total daily usage to a maximum of 30 isolated minutes.</p>
                     </div>
                  </li>
               </ul>

               <div className="p-4 bg-tertiary-container/30 border border-tertiary/20 rounded-md mt-2">
                  <p className="text-sm text-tertiary font-bold flex items-center gap-2 mb-1"><Target className="w-4 h-4"/> Objective Check</p>
                  <p className="text-xs text-outline font-body">Participants logging successful days report a 40% increase in deep work flow velocity within 48 hours of starting.</p>
               </div>
            </section>

            {/* Verification/Entry Input */}
            <section className="card-base opacity-50 grayscale pointer-events-none relative">
               <div className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-[1px]">
                  <span className="bg-surface-container-high text-on-surface px-4 py-2 rounded-md label-small border border-outline-variant/20 shadow-md">
                     You must adopt the constraint to log data.
                  </span>
               </div>
               <h3 className="text-heading-2 mb-4">Daily Honesty Ledger</h3>
               <textarea rows={3} placeholder="Did you bypass the protocol today? Be ruthless in your assessment." className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-md p-3 mb-4"></textarea>
               <button className="btn-primary w-full">Log Cycle</button>
            </section>
         </div>

         {/* Meta Information */}
         <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="card-base flex flex-col gap-4">
               <div>
                  <h4 className="label-tiny uppercase tracking-widest text-outline mb-1">Temporal Alignment</h4>
                  <p className="text-sm font-bold text-on-surface">Oct 14th — Oct 21st</p>
               </div>
               <div>
                  <h4 className="label-tiny uppercase tracking-widest text-outline mb-2">Participant Node</h4>
                  <div className="flex items-center gap-2">
                     <Users className="w-5 h-5 text-secondary" />
                     <span className="text-2xl font-black font-headline text-on-surface">4,291</span>
                     <span className="text-sm text-outline font-body">Seedlings</span>
                  </div>
               </div>
               
               <div className="mt-4 pt-4 border-t border-outline-variant/20">
                  <h4 className="label-tiny uppercase tracking-widest text-outline mb-3">Your Ecosystem</h4>
                  <div className="flex gap-[-8px]">
                     <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-highest z-30 flex items-center justify-center text-xs font-bold ml-0">A</div>
                     <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-high z-20 flex items-center justify-center text-xs font-bold -ml-3">S</div>
                     <div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-low z-10 flex items-center justify-center text-xs font-bold -ml-3">+2</div>
                  </div>
                  <p className="text-xs text-outline mt-3">2 of your linked routines have joined this constraint.</p>
               </div>
            </div>
         </div>
      </div>
    </>
  );
}
