import React from 'react';
import { HelpCircle, MessagesSquare, FileText, Wrench, ExternalLink, ArrowRight } from 'lucide-react';

export default function SupportPage() {
  return (
    <>
      <section className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block w-8 h-0.5 bg-primary"></span>
          <span className="label-small text-primary">Systems Assistance</span>
        </div>
        <h1 className="text-heading-mega">Support Hub</h1>
        <p className="mt-4 text-outline font-body text-lg max-w-2xl">
          Troubleshoot behavioral pipelines or contact systems engineering for technical roadblocks.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
         <button className="card-base flex flex-col items-start gap-4 hover:border-primary/50 transition-colors text-left group">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
               <FileText className="w-5 h-5 text-primary" />
            </div>
            <div>
               <h3 className="text-heading-base text-on-surface group-hover:text-primary transition-colors">Documentation</h3>
               <p className="text-xs font-body text-outline mt-1 leading-relaxed">Read the structural guide to Habit-AT&#39;s methodology.</p>
            </div>
         </button>
         
         <button className="card-base flex flex-col items-start gap-4 hover:border-tertiary/50 transition-colors text-left group">
            <div className="w-10 h-10 rounded-full bg-tertiary/10 flex items-center justify-center">
               <HelpCircle className="w-5 h-5 text-tertiary" />
            </div>
            <div>
               <h3 className="text-heading-base text-on-surface group-hover:text-tertiary transition-colors">FAQ Archives</h3>
               <p className="text-xs font-body text-outline mt-1 leading-relaxed">Solutions to common operational friction points.</p>
            </div>
         </button>

         <button className="card-base flex flex-col items-start gap-4 hover:border-secondary/50 transition-colors text-left group">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
               <MessagesSquare className="w-5 h-5 text-secondary" />
            </div>
            <div>
               <h3 className="text-heading-base text-on-surface group-hover:text-secondary transition-colors">Community Form</h3>
               <p className="text-xs font-body text-outline mt-1 leading-relaxed">Crowdsourced diagnostics from other Habit-AT users.</p>
            </div>
         </button>

         <button className="card-base flex flex-col items-start gap-4 hover:border-error/50 transition-colors text-left group">
            <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center">
               <Wrench className="w-5 h-5 text-error" />
            </div>
            <div>
               <h3 className="text-heading-base text-on-surface group-hover:text-error transition-colors">System Status</h3>
               <p className="text-xs font-body text-outline mt-1 leading-relaxed">Check server uptime and database health metrics.</p>
            </div>
         </button>
      </div>

      <section className="card-base max-w-3xl">
         <h2 className="text-heading-2 mb-6 border-b border-outline-variant/20 pb-4">Open a Ticket</h2>
         <form className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="flex flex-col gap-2">
                 <label className="text-heading-base">Vector (Topic)</label>
                 <select className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all w-full text-on-surface">
                   <option>Bug/Glitch Report</option>
                   <option>Account Access</option>
                   <option>Data Export/Privacy</option>
                   <option>Feature Request</option>
                 </select>
               </div>
               <div className="flex flex-col gap-2">
                 <label className="text-heading-base">Urgency Metrics</label>
                 <select className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all w-full text-on-surface">
                   <option>Low (Cosmetic/Query)</option>
                   <option>Medium (Functional friction)</option>
                   <option>High (Data loss/Crash)</option>
                 </select>
               </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-heading-base">Incident Details</label>
              <textarea 
                rows={5}
                placeholder="Describe the discrepancy clearly. Include steps to reproduce if applicable." 
                className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all w-full text-on-surface placeholder-outline-variant resize-y" 
                required
              />
            </div>

            <div className="flex justify-end pt-2">
               <button type="button" className="btn-primary flex items-center gap-2 w-auto px-8">
                  Submit Diagnostics <ArrowRight className="w-4 h-4" />
               </button>
            </div>
         </form>
      </section>

      <div className="mt-8 text-center text-outline text-xs flex items-center justify-center gap-2">
         Average response time: 4.2 hours <ExternalLink className="w-3 h-3" />
      </div>
    </>
  );
}
