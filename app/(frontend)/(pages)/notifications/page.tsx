import React from 'react';
import { Bell, Trophy, Zap, AlertTriangle, Users, CheckCheck } from 'lucide-react';

export default function NotificationsPage() {
  return (
    <>
      <section className="mb-8 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-8 h-0.5 bg-secondary"></span>
            <span className="label-small text-secondary">System Intelligence</span>
          </div>
          <h1 className="text-heading-mega">Notifications</h1>
          <p className="mt-4 text-outline font-body text-lg max-w-2xl">
            Behavioral nudges, community engagements, and milestone alerts.
          </p>
        </div>
        
        <button className="flex items-center gap-2 text-outline hover:text-primary transition-colors text-sm font-bold bg-transparent border-none cursor-pointer">
           <CheckCheck className="w-5 h-5" />
           Mark all read
        </button>
      </section>

      <section className="max-w-4xl flex flex-col gap-4">
        
        {/* Unread Section */}
        <h3 className="text-heading-2 mt-4 text-on-surface">New</h3>
        
        <div className="flex items-start gap-4 p-5 rounded-xl bg-primary/5 border border-primary/20 relative shadow-sm transition-all group hover:bg-primary/10 cursor-pointer">
           <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-primary animate-pulse"></div>
           <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md">
             <Trophy className="w-6 h-6 text-on-primary" />
           </div>
           <div>
             <h4 className="text-heading-base text-primary mb-1">Badge Unlocked: Rhythmic Master</h4>
             <p className="font-body text-sm text-on-surface-variant mb-2">
               You&#39;ve successfully completed 7 consecutive days of perfectly executed morning routines. Your neural pathways are strengthening.
             </p>
             <span className="label-tiny text-outline">Just now</span>
           </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-xl bg-secondary/5 border border-secondary/20 relative shadow-sm transition-all group hover:bg-secondary/10 cursor-pointer">
           <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0 shadow-md">
             <Users className="w-6 h-6 text-on-secondary" />
           </div>
           <div>
             <h4 className="text-heading-base text-secondary mb-1">Alex.dev clapped for your Journal Entry</h4>
             <p className="font-body text-sm text-on-surface-variant mb-2">
               &#34;Flow State Reached (Early Morning)&#34; resonated with 4 people in your localized ecosystem.
             </p>
             <span className="label-tiny text-outline">2 hours ago</span>
           </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-xl bg-error/5 border border-error/20 relative shadow-sm transition-all group hover:bg-error/10 cursor-pointer">
           <div className="w-12 h-12 rounded-full bg-error flex items-center justify-center shrink-0 shadow-md">
             <AlertTriangle className="w-6 h-6 text-white" />
           </div>
           <div>
             <h4 className="text-heading-base text-error mb-1">Consistency Warning</h4>
             <p className="font-body text-sm text-on-surface-variant mb-2">
               You are at risk of breaking your 14-day streak for &#34;10 Min Vipassana&#34;. The evening cycle closes in 3 hours.
             </p>
             <button className="btn-primary py-2 text-xs w-auto mt-2">Log it now</button>
             <span className="label-tiny text-outline block mt-3">5 hours ago</span>
           </div>
        </div>

        {/* Read Section */}
        <h3 className="text-heading-2 mt-8 text-outline">Earlier</h3>
        
        <div className="flex items-start gap-4 p-5 rounded-xl bg-surface-container-low border border-transparent shadow-sm transition-all group hover:border-outline-variant/20 cursor-pointer opacity-80">
           <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
             <Zap className="w-6 h-6 text-outline" />
           </div>
           <div>
             <h4 className="text-heading-base text-on-surface mb-1">System Update: Version 2.1</h4>
             <p className="font-body text-sm text-outline mb-2">
               We&#39;ve deployed new radar charts for outcome correlation. Check your deep dive analytics.
             </p>
             <span className="label-tiny text-outline">Yesterday</span>
           </div>
        </div>

        <div className="flex items-start gap-4 p-5 rounded-xl bg-surface-container-low border border-transparent shadow-sm transition-all group hover:border-outline-variant/20 cursor-pointer opacity-80">
           <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center shrink-0">
             <Bell className="w-6 h-6 text-outline" />
           </div>
           <div>
             <h4 className="text-heading-base text-on-surface mb-1">Daily Briefing Ready</h4>
             <p className="font-body text-sm text-outline mb-2">
               Your cognitive load for today is estimated at 85%. Proceed with scheduled deep work blocks carefully.
             </p>
             <span className="label-tiny text-outline">Yesterday</span>
           </div>
        </div>

        <div className="py-8 flex justify-center">
            <button className="text-sm font-bold text-outline hover:text-primary transition-colors bg-transparent border-none cursor-pointer">
                Load older communications
            </button>
        </div>

      </section>
    </>
  );
}
