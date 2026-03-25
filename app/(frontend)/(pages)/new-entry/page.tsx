import React from 'react';
import { FileText, Sparkles, Plus, AlertCircle } from 'lucide-react';

export default function NewEntryPage() {
  return (
    <>
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block w-8 h-0.5 bg-secondary"></span>
          <span className="label-small text-secondary">Journaling Console</span>
        </div>
        <h1 className="text-heading-mega">New Entry</h1>
        <p className="mt-4 text-outline font-body text-lg max-w-2xl">
          Document cognitive resistance, breakthroughs, and reflections to improve your behavioral loop design.
        </p>
      </section>

      <section className="max-w-4xl">
        <div className="card-base flex flex-col gap-8 shadow-sm p-8 md:p-12 border-t-4 border-t-secondary relative overflow-hidden">
          
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

          <div className="relative z-10 w-full">
            <input 
              type="text" 
              placeholder="Entry Headline..." 
              className="w-full bg-transparent border-none text-2xl md:text-3xl font-headline font-black text-on-surface placeholder-outline-variant/40 focus:outline-none mb-6" 
            />

            <div className="flex gap-4 items-center mb-8 pb-6 border-b border-outline-variant/20">
              <div className="flex items-center gap-2">
                <span className="label-tiny uppercase tracking-widest text-outline">Energy Level:</span>
                 <select className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-3 py-1.5 text-xs focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all text-on-surface">
                    <option>High / Flow</option>
                    <option>Stable</option>
                    <option>Depleted</option>
                 </select>
              </div>
              <div className="w-px h-6 bg-outline-variant/20"></div>
              <div className="flex items-center gap-2">
                 <span className="label-tiny uppercase tracking-widest text-outline">Type:</span>
                 <select className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-3 py-1.5 text-xs focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all text-on-surface">
                    <option>Observation</option>
                    <option>Friction Point (Blocker)</option>
                    <option>Breakthrough</option>
                 </select>
              </div>
            </div>

            <textarea 
              rows={12}
              placeholder="Start writing..." 
              className="w-full bg-transparent border-none text-base md:text-lg font-body leading-relaxed text-on-surface-variant placeholder-outline-variant/40 focus:outline-none resize-none custom-scrollbar" 
            />

            <div className="mt-8 pt-6 border-t border-outline-variant/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                 <span className="label-tiny uppercase tracking-widest text-outline">Tags:</span>
                 <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-1 bg-surface-container-high text-outline rounded-md text-[10px] font-bold uppercase cursor-pointer hover:bg-surface-container-highest flex items-center gap-1">
                      #Focus <span className="opacity-50">×</span>
                    </span>
                    <button className="w-6 h-6 rounded-md border border-outline-variant/30 flex items-center justify-center text-outline hover:text-primary hover:border-primary transition-colors cursor-pointer">
                      <Plus className="w-3 h-3" />
                    </button>
                 </div>
              </div>

              <div className="flex justify-end gap-3 w-full sm:w-auto mt-4 sm:mt-0">
                <button type="button" className="px-6 py-3 rounded-md font-bold text-on-surface hover:bg-surface-container-high transition-colors cursor-pointer text-sm">
                  Save Draft
                </button>
                <button type="button" className="btn-primary w-full sm:w-auto py-3 bg-secondary! hover:bg-secondary/90! text-on-secondary! shadow-md shadow-secondary/20 flex items-center gap-2 justify-center">
                  <FileText className="w-4 h-4" />
                  Publish Entry
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Prompt Suggestions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
           <button className="text-left p-4 rounded-xl relative overflow-hidden group bg-surface-container-low border border-outline-variant/10 hover:border-secondary/30 transition-all">
             <div className="absolute top-0 left-0 w-1 h-full bg-tertiary opacity-50 group-hover:opacity-100 transition-opacity"></div>
             <Sparkles className="w-4 h-4 mb-2 text-tertiary" />
             <h4 className="text-sm font-bold text-on-surface mb-1">Reflect on friction</h4>
             <p className="text-xs text-outline leading-relaxed">What made today&#39;s resistance stronger than your willpower?</p>
           </button>
           
           <button className="text-left p-4 rounded-xl relative overflow-hidden group bg-surface-container-low border border-outline-variant/10 hover:border-secondary/30 transition-all">
             <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-50 group-hover:opacity-100 transition-opacity"></div>
             <Sparkles className="w-4 h-4 mb-2 text-primary" />
             <h4 className="text-sm font-bold text-on-surface mb-1">Audit constraints</h4>
             <p className="text-xs text-outline leading-relaxed">Did your environmental design fail, or did you bypass it?</p>
           </button>
           
           <button className="text-left p-4 rounded-xl relative overflow-hidden group bg-surface-container-low border border-outline-variant/10 hover:border-secondary/30 transition-all md:col-span-2 lg:col-span-1">
             <div className="absolute top-0 left-0 w-1 h-full bg-error opacity-50 group-hover:opacity-100 transition-opacity"></div>
             <AlertCircle className="w-4 h-4 mb-2 text-error" />
             <h4 className="text-sm font-bold text-on-surface mb-1">Root cause analysis</h4>
             <p className="text-xs text-outline leading-relaxed">Ask &#34;Why?&#34; five times about today&#39;s missed target.</p>
           </button>
        </div>
      </section>
    </>
  );
}
