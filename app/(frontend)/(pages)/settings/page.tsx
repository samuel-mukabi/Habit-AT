import React from 'react';
import { Shield, Bell, Palette, Database, Lock, User, MonitorSmartphone } from 'lucide-react';

export default function SettingsPage() {
  return (
    <>
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block w-8 h-0.5 bg-primary"></span>
          <span className="label-small text-primary">System Configuration</span>
        </div>
        <h1 className="text-heading-mega">Settings</h1>
        <p className="mt-4 text-outline font-body text-lg max-w-2xl">
          Calibrate your ecosystem parameters and privacy guardrails.
        </p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <nav className="flex flex-col gap-1 sticky top-6">
             <button className="flex items-center gap-3 px-4 py-3 rounded-md text-left text-sm font-bold bg-surface-container-highest text-on-surface transition-colors cursor-pointer">
                <User className="w-4 h-4 shrink-0" />
                Account
             </button>
             <button className="flex items-center gap-3 px-4 py-3 rounded-md text-left text-sm font-medium text-outline hover:bg-surface-container-high transition-colors cursor-pointer">
                <MonitorSmartphone className="w-4 h-4 shrink-0" />
                Appearance
             </button>
             <button className="flex items-center gap-3 px-4 py-3 rounded-md text-left text-sm font-medium text-outline hover:bg-surface-container-high transition-colors cursor-pointer">
                <Bell className="w-4 h-4 shrink-0" />
                Notifications
             </button>
             <button className="flex items-center gap-3 px-4 py-3 rounded-md text-left text-sm font-medium text-outline hover:bg-surface-container-high transition-colors cursor-pointer">
                <Shield className="w-4 h-4 shrink-0" />
                Privacy
             </button>
             <button className="flex items-center gap-3 px-4 py-3 rounded-md text-left text-sm font-medium text-outline hover:bg-surface-container-high transition-colors cursor-pointer">
                <Database className="w-4 h-4 shrink-0" />
                Data & Export
             </button>
          </nav>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3 pb-20">
          <div className="flex flex-col gap-8">
            
            {/* Account Settings */}
            <section className="card-base flex flex-col gap-6">
              <h2 className="text-heading-2 border-b border-outline-variant/20 pb-4">Account Metadata</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-heading-base">Display Name</label>
                  <input 
                    type="text" 
                    defaultValue="Alex.dev" 
                    className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all w-full text-on-surface" 
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-heading-base">Email Architecture</label>
                  <input 
                    type="email" 
                    defaultValue="alex@deepwork.dev" 
                    className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all w-full text-outline pointer-events-none" 
                    readOnly
                  />
                  <p className="text-[10px] text-outline mt-1 font-body">Contact support to change core routing email.</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-heading-base">Biography / Personal Vector</label>
                <textarea 
                  rows={3}
                  defaultValue="Focusing on cognitive endurance and systems engineering. Seeking 100hrs deeply concentrated output per month."
                  className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-4 py-3 text-sm focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all w-full text-on-surface resize-y" 
                />
              </div>

              <div className="flex justify-end border-t border-outline-variant/20 pt-4 mt-2">
                <button className="btn-primary text-sm py-2 px-6 w-auto">Update Profile</button>
              </div>
            </section>

            {/* Appearance (Aesthetic) */}
            <section className="card-base flex flex-col gap-6">
              <div className="flex items-center gap-3 border-b border-outline-variant/20 pb-4">
                <Palette className="w-5 h-5 text-tertiary" />
                <h2 className="text-heading-2">Aesthetic Parameters</h2>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between py-2 border-b border-outline-variant/10">
                  <div>
                    <h4 className="font-bold text-on-surface text-sm">Dark Mode Enforcement</h4>
                    <p className="text-xs text-outline">Forces the earthy aesthetic into a low-light configuration for deep focus sessions.</p>
                  </div>
                  {/* Custom Toggle */}
                  <div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer shadow-inner">
                    <div className="w-4 h-4 bg-on-primary rounded-full absolute top-1 right-1 shadow-sm transition-all"></div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-2 border-b border-outline-variant/10">
                  <div>
                    <h4 className="font-bold text-on-surface text-sm">Zen Mode Interface</h4>
                    <p className="text-xs text-outline">Hides secondary navigational elements and metrics to reduce visual noise.</p>
                  </div>
                  <div className="w-12 h-6 bg-surface-container-high rounded-full relative cursor-pointer shadow-inner border border-outline-variant/20">
                    <div className="w-4 h-4 bg-outline rounded-full absolute top-1 left-1 shadow-sm transition-all"></div>
                  </div>
                </div>

                 <div className="flex items-center justify-between py-2">
                  <div>
                    <h4 className="font-bold text-on-surface text-sm">Intensity Accents</h4>
                    <p className="text-xs text-outline">Determines the saturation of habit streaks and heatmap colors.</p>
                  </div>
                  <select className="bg-surface-container-lowest border border-outline-variant/30 rounded-md px-3 py-2 text-xs focus:ring-2 focus:ring-primary outline-none transition-all text-on-surface">
                     <option>Muted (Earthy)</option>
                     <option>Vibrant (Dopamine)</option>
                     <option>Monochrome</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Danger Zone */}
            <section className="card-base border-error/30 bg-error/5 flex flex-col gap-4">
               <div className="flex items-center gap-3 mb-2">
                <Lock className="w-5 h-5 text-error" />
                <h2 className="text-heading-2 text-error">Danger Zone</h2>
              </div>
              <p className="text-sm font-body text-on-surface-variant">
                Irreversible account operations. Proceed with extreme caution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                 <button className="px-5 py-2.5 bg-transparent border border-error text-error font-bold rounded-md hover:bg-error hover:text-white transition-colors text-sm w-full sm:w-auto text-center cursor-pointer">
                    Export All Data
                 </button>
                 <button className="px-5 py-2.5 bg-error text-white border border-error font-bold rounded-md hover:bg-error/90 transition-colors shadow-md shadow-error/20 text-sm w-full sm:w-auto text-center cursor-pointer">
                    Terminate Account
                 </button>
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
