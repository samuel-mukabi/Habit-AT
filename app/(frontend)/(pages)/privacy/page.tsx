import React from 'react';
import { Lock, FileKey2, EyeOff } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <>
      <section className="mb-12 max-w-3xl">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block w-8 h-0.5 bg-primary"></span>
          <span className="label-small text-primary">Data Integrity Principles</span>
        </div>
        <h1 className="text-heading-mega">Privacy Policy</h1>
        <p className="mt-4 text-outline font-body text-lg">
          Habit-AT is engineered to enhance your cognitive endurance, not exploit your behavioral data. Transparency is our structural baseline.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
         {/* Table of Contents - Sidebar */}
         <div className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-6 flex flex-col gap-3 border-l-2 border-outline-variant/20 pl-4 py-2">
               <div className="text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Directory</div>
               <a href="#data-collection" className="text-sm font-bold text-primary hover:underline transition-all">Data Collection Vector</a>
               <a href="#telemetry" className="text-sm font-medium text-outline hover:text-on-surface transition-all">Telemetry Rules</a>
               <a href="#encryption" className="text-sm font-medium text-outline hover:text-on-surface transition-all">Military Grade Encryption</a>
               <a href="#export" className="text-sm font-medium text-outline hover:text-on-surface transition-all">Sovereignty & Export</a>
               <a href="#third-party" className="text-sm font-medium text-outline hover:text-on-surface transition-all">Third-Party Blacklist</a>
            </div>
         </div>

         {/* Document Body */}
         <div className="lg:col-span-9 max-w-3xl">
            <div className="flex flex-col gap-10">
               <div className="card-base bg-surface-container-lowest border-transparent shadow-none p-0">
                  <h2 id="data-collection" className="text-heading-1 mb-4 flex items-center gap-3 border-b border-outline-variant/20 pb-4">
                     <FileKey2 className="w-6 h-6 text-primary" />
                     Data Collection Vector
                  </h2>
                  <div className="font-body text-on-surface-variant leading-relaxed space-y-4 text-[15px]">
                     <p>
                        We explicitly log only the data structures you manually input: habit names, journal entries, and manually triggered time trackers. We do not stealth-log location data, background accelerometer patterns, or cross-site tracking cookies.
                     </p>
                     <p>
                        The core premise of Habit-AT requires friction to learn. Passive data collection removes intrinsic friction. Thus, we require active inputs. 
                     </p>
                  </div>
               </div>

               <div className="card-base bg-surface-container-lowest border-transparent shadow-none p-0">
                  <h2 id="encryption" className="text-heading-1 mb-4 flex items-center gap-3 border-b border-outline-variant/20 pb-4">
                     <Lock className="w-6 h-6 text-primary" />
                     Encryption Architecture
                  </h2>
                  <div className="font-body text-on-surface-variant leading-relaxed space-y-4 text-[15px]">
                     <p>
                        All journal entries are subject to End-to-End Encryption (E2EE) while at rest in our database parameters. This means even Habit-AT systems engineers cannot access the plaintext of your personal reflections. 
                     </p>
                     <p>
                        Your cognitive blocks and friction points remain yours. Authentication tokens are cycled dynamically.
                     </p>
                  </div>
               </div>

               <div className="card-base bg-surface-container-lowest border-transparent shadow-none p-0">
                  <h2 id="export" className="text-heading-1 mb-4 flex items-center gap-3 border-b border-outline-variant/20 pb-4">
                     <EyeOff className="w-6 h-6 text-primary" />
                     Data Sovereignty
                  </h2>
                  <div className="font-body text-on-surface-variant leading-relaxed space-y-4 text-[15px]">
                     <p>
                        At any point within your settings console, you may initiate a full JSON extraction of your metadata, habit history, and journals. Once downloaded, you can trigger a <strong>hard deletion protocol</strong> that wipes your existence from our server frames.
                     </p>
                     <div className="p-4 bg-tertiary-container/20 border-l-4 border-tertiary mt-4">
                        <p className="text-sm font-bold text-tertiary m-0">Zero Dark Pattern Policy</p>
                        <p className="text-xs text-on-surface-variant mt-1">We will never hide the &#34;Delete Account&#34; button or force you to email support to leave.</p>
                     </div>
                  </div>
               </div>

               <div className="card-base bg-surface-container-lowest border-transparent shadow-none p-0">
                  <h2 id="third-party" className="text-heading-1 mb-4 border-b border-outline-variant/20 pb-4">
                     Third-Party Interactions
                  </h2>
                  <div className="font-body text-on-surface-variant leading-relaxed space-y-4 text-[15px]">
                     <p>
                        Habit-AT explicitly rejects funding from algorithmic advertising firms. Your data is not the product. The tool is the product. We do not sell, rent, or lease behavior analytics to third-party ad networks, period.
                     </p>
                     <p className="text-xs text-outline italic mt-6">
                        Last updated: System Cycle 2024-02-14. Alterations to this document will result in an immediate ping to your Notifications feed.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </>
  );
}
