import React from 'react';
import Link from 'next/link';
import { SquarePen, Star, AlertCircle } from 'lucide-react';

export default function JournalPage() {
  return (
    <>
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block w-8 h-0.5 bg-primary"></span>
          <span className="label-small text-primary">Documentation</span>
        </div>
        <h1 className="text-heading-mega">The Journal</h1>
        <p className="mt-4 text-outline font-body text-lg max-w-2xl">
          Detailed cognitive logs, habit reflections, and friction point analysis.
        </p>
      </section>

      <div className="flex gap-4 mb-8">
        <Link href="/new-entry" className="btn-primary">
          <SquarePen className="w-5 h-5" />
          New Entry
        </Link>
        <Link href="/habit-filter" className="btn-secondary">
          Filter by Habit
        </Link>
      </div>

      <section className="space-y-6">
        <div className="journal-entry">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="text-heading-base">Mental Clarity Threshold</h4>
              <p className="label-small text-outline tracking-wider">Today • 11:30 AM</p>
            </div>
            <div className="flex gap-1">
              <Star className="w-4 h-4 text-secondary fill-secondary" />
              <Star className="w-4 h-4 text-secondary fill-secondary" />
            </div>
          </div>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            Noticed a significant dip in focus around the 3-hour mark without a break. Need to strictly enforce the 90-15 minute cycle instead of pushing through. 
          </p>
          <div className="mt-4 flex gap-2">
            <span className="journal-tag">#Observation</span>
            <span className="journal-tag">#DeepWork</span>
          </div>
        </div>

        <div className="journal-entry-error">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="text-heading-base">Missed Evening Routine</h4>
              <p className="label-small text-outline tracking-wider">Yesterday • 10:00 PM</p>
            </div>
            <AlertCircle className="w-4 h-4 text-error" />
          </div>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            Doomscrolling on Twitter bypassed the wind-down routine. Blue light exposure definitely ruined sleep architecture. App blockers need to be reinstated at 9 PM.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="journal-tag">#Failure</span>
            <span className="journal-tag">#Sleep</span>
          </div>
        </div>

        <div className="journal-entry">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="text-heading-base">Perfect Diet Execution</h4>
              <p className="label-small text-outline tracking-wider">Jan 16, 2024 • 08:00 PM</p>
            </div>
            <div className="flex gap-1">
              <Star className="w-4 h-4 text-secondary fill-secondary" />
              <Star className="w-4 h-4 text-secondary fill-secondary" />
              <Star className="w-4 h-4 text-secondary fill-secondary" />
            </div>
          </div>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed">
            Meal prepped ahead of time. Saved at least 45 minutes of decision fatigue today. Energy levels remained constant avoiding the usual 2 PM crash.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="journal-tag">#Success</span>
            <span className="journal-tag">#Nutrition</span>
          </div>
        </div>
      </section>
    </>
  );
}
