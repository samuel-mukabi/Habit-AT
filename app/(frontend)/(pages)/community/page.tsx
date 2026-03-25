import React from 'react';
import { UserPlus, Heart, Megaphone } from 'lucide-react';

export default function CommunityPage() {
  return (
    <>
      <section className="mb-10 lg:flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-8 h-0.5 bg-primary"></span>
            <span className="label-small text-primary">Collective Growth</span>
          </div>
          <h1 className="text-heading-mega">Ecosystem</h1>
          <p className="mt-4 text-outline font-body text-lg max-w-2xl">
            See the ripple effects. Connect with other deep workers and share active routines.
          </p>
        </div>
        <button className="btn-primary mt-6 lg:mt-0" style={{ width: 'auto' }}>
          <UserPlus className="w-5 h-5" />
          Find Seedlings
        </button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card-base flex flex-col gap-4">
          <div className="flex items-center gap-4 border-b border-outline-variant/20 pb-4">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest"></div>
            <div>
              <h4 className="text-heading-base">Alex.dev</h4>
              <p className="label-tiny">Focus Routine: 4x90m</p>
            </div>
          </div>
          <p className="font-body text-sm text-on-surface-variant">
            Just hit 100 hours of unbroken flow state this month. The earthy system is working beautifully.
          </p>
          <div className="mt-auto flex gap-2 items-center">
            <Heart className="w-4 h-4 text-outline" />
            <span className="label-small text-outline">12</span>
          </div>
        </div>

        <div className="card-base flex flex-col gap-4">
          <div className="flex items-center gap-4 border-b border-outline-variant/20 pb-4">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest"></div>
            <div>
              <h4 className="text-heading-base">Sarah T.</h4>
              <p className="label-tiny text-error">Routine Interrupted</p>
            </div>
          </div>
          <p className="font-body text-sm text-on-surface-variant">
            Failed my morning rhythm due to unforeseen travel. Recalibrating for an evening deep work session.
          </p>
          <div className="mt-auto flex gap-2 items-center">
            <Heart className="w-4 h-4 text-outline" />
            <span className="label-small text-outline">5</span>
          </div>
        </div>

        <div className="card-base flex flex-col gap-4 border-2 border-primary/20 bg-primary/5">
          <div className="flex items-center gap-4 border-b border-outline-variant/20 pb-4">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary">
              <Megaphone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-heading-base text-primary">System Notice</h4>
              <p className="label-tiny uppercase tracking-widest text-primary">Community Challenge</p>
            </div>
          </div>
          <p className="font-body text-sm text-on-surface-variant">
            Join the &quot;Digital Vegan&quot; week constraint block starting Monday. No algorithmic feeds for 7 days.
          </p>
          <button className="btn-primary mt-auto text-sm py-2">
            Accept Challenge
          </button>
        </div>
      </section>
    </>
  );
}
