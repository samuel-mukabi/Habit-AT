"use client";

import React, { useState } from 'react';
import { MOCK_USER_HABITS } from '../../lib/mockData';
import { 
    Bolt, 
    Timer, 
    CheckCircle2, 
    TrendingUp, 
    Brain, 
    Plus, 
    Star, 
    AlertTriangle 
} from 'lucide-react';
import Link from "next/link";

export default function DeepDivePage() {
    const [selectedHabitId, setSelectedHabitId] = useState(MOCK_USER_HABITS[0]?.id || '');
    const activeHabit = MOCK_USER_HABITS.find(h => h.id === selectedHabitId) || MOCK_USER_HABITS[0];

    return (
        <>
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-8">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="inline-block w-8 h-0.5 bg-primary"></span>
                            <span className="label-small text-primary">Active Routine</span>
                        </div>
                        <h1 className="text-heading-mega">{activeHabit.name}</h1>
                    </div>

                    <p className="mt-4 text-outline font-body text-lg max-w-2xl">
                        A systematic approach to cognitive endurance through scheduled isolation and rhythmic output cycles.
                    </p>
                </div>
                <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-6">
                    <div className="text-right hidden lg:block">
                        <span className="block label-mega">{activeHabit.streak}</span>
                        <span className="block label-small text-outline">Day Perfect Streak</span>
                    </div>
                    <div className="flex justify-between items-center w-full lg:hidden">
                        <div>
                            <span className="block text-2xl font-black text-on-surface">{activeHabit.streak}</span>
                            <span className="block label-tiny text-outline">Day Streak</span>
                        </div>
                        <Link href={'/quick-log'} className="btn-primary">
                            <Bolt className="w-5 h-5" />
                            Log
                        </Link>
                    </div>
                    <Link href={'/quick-log'} className="btn-primary hidden lg:flex">
                        <Bolt className="w-5 h-5" />
                        Quick Log
                    </Link>
                    <select
                        value={selectedHabitId}
                        onChange={(e) => setSelectedHabitId(e.target.value)}
                        className="bg-surface-container border border-outline-variant/30 rounded-md px-3 py-1.5 text-sm focus:ring-2 focus:ring-primary outline-none transition-all text-on-surface font-headline font-bold w-full lg:w-auto"
                    >
                        {MOCK_USER_HABITS.map(habit => (
                            <option key={habit.id} value={habit.id}>{habit.name}</option>
                        ))}
                    </select>
                </div>
            </section>

            {/* Main Data: Primary Area Chart Section */}
            <section className="card-base">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h3 className="text-heading-1">Focus Hours per Day</h3>
                        <p className="text-sm text-outline font-body">Performance versus baseline target over the last 30 cycles.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-primary"></span>
                            <span className="label-small text-outline">Actual</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-outline-variant"></span>
                            <span className="label-small text-outline">Target</span>
                        </div>
                    </div>
                </div>

                {/* Mock Chart Visualization */}
                <div className="relative h-64 flex items-end gap-0.5 group">
                    {/* Background Grid */}
                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                        <div className="h-px bg-on-surface"></div>
                        <div className="h-px bg-on-surface"></div>
                        <div className="h-px bg-on-surface"></div>
                        <div className="h-px bg-on-surface"></div>
                    </div>
                    {/* Bars */}
                    {[40, 55, 45, 70, 85, 60, 40, 90, 75, 65, 80, 95, 50, 40, 60, 75, 85, 90, 92].map((h, i) => (
                        <div key={i} className="flex-1 bg-primary/20 hover:bg-primary transition-colors rounded-t-sm relative" style={{ height: `${h}%` }}></div>
                    ))}
                    <div className="flex-1 bg-primary h-[98%] rounded-t-sm shadow-[0_-8px_16px_rgba(149,168,87,0.3)]"></div>
                </div>
                <div className="flex justify-between mt-4 label-small text-outline">
                    <span>30 Days Ago</span>
                    <span>Today</span>
                </div>
            </section>

            {/* Secondary Analytics: Heatmap & Radar Bento Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Consistency Heatmap */}
                <div className="lg:col-span-2 card-base">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="text-heading-2">Temporal Consistency</h3>
                        <span className="label-tiny">Last 12 Weeks</span>
                    </div>
                    <div className="grid grid-cols-12 gap-2">
                        <div className="col-span-1 flex flex-col justify-between label-small pt-4 pb-2 text-outline">
                            <span>MON</span>
                            <span>WED</span>
                            <span>FRI</span>
                            <span>SUN</span>
                        </div>
                        <div className="col-span-11 grid grid-cols-12 gap-1.5">
                            {Array.from({ length: 48 }).map((_, i) => {
                                const colors = ['bg-surface-container-highest', 'bg-primary/20', 'bg-primary/40', 'bg-primary/60', 'bg-primary', 'bg-tertiary'];
                                const rand = colors[(i * 7 + 3) % colors.length];
                                return <div key={i} className={`w-full aspect-square ${rand} rounded-sm`}></div>;
                            })}
                        </div>
                    </div>
                    <div className="mt-6 flex items-center justify-end gap-2">
                        <span className="label-small text-outline">Less</span>
                        <div className="flex gap-1">
                            <div className="w-3 h-3 bg-surface-container-highest rounded-sm"></div>
                            <div className="w-3 h-3 bg-primary/20 rounded-sm"></div>
                            <div className="w-3 h-3 bg-primary/60 rounded-sm"></div>
                            <div className="w-3 h-3 bg-primary rounded-sm"></div>
                            <div className="w-3 h-3 bg-tertiary rounded-sm"></div>
                        </div>
                        <span className="label-small text-outline">More</span>
                    </div>
                </div>

                {/* Distribution Radar / Correlation */}
                <div className="card-base flex flex-col">
                    <h3 className="text-heading-2 mb-6">Outcome Correlation</h3>
                    <div className="flex-1 flex items-center justify-center relative">
                        <div className="w-48 h-48 rounded-full border border-outline-variant/30 flex items-center justify-center relative">
                            <div className="w-32 h-32 rounded-full border border-outline-variant/30"></div>
                            <div className="w-16 h-16 rounded-full border border-outline-variant/30"></div>
                            <div className="absolute inset-0 p-4">
                                <svg className="w-full h-full fill-primary/30 stroke-primary stroke-2" viewBox="0 0 100 100">
                                    <polygon points="50,10 90,40 75,90 25,90 10,40"></polygon>
                                </svg>
                            </div>
                            <span className="absolute -top-4 label-small text-outline">Focus</span>
                            <span className="absolute -right-8 top-1/3 label-small text-outline">Energy</span>
                            <span className="absolute -bottom-4 right-0 label-small text-outline">Output</span>
                            <span className="absolute -bottom-4 left-0 label-small text-outline">Mood</span>
                            <span className="absolute -left-12 top-1/3 label-small text-outline">Cognitive</span>
                        </div>
                    </div>
                    <p className="text-[11px] text-center text-outline font-body italic mt-6">Highest synergy detected between Focus and Output.</p>
                </div>
            </section>

            {/* Milestones & Badges */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <h3 className="text-heading-1">Milestones</h3>
                    <div className="flex-1 h-px bg-outline-variant/20"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="milestone-base">
                        <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                            <Timer className="w-6 h-6 fill-current" />
                        </div>
                        <div>
                            <h4 className="text-heading-base">Deep Work Century</h4>
                            <p className="text-xs text-outline">100 total hours logged</p>
                        </div>
                        <div className="mt-auto">
                            <div className="flex justify-between label-small text-outline mb-1">
                                <span>82/100 hrs</span>
                                <span>82%</span>
                            </div>
                            <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                                <div className="bg-primary h-full w-[82%]"></div>
                            </div>
                        </div>
                    </div>

                    <div className="milestone-achieved">
                        <div className="absolute -right-4 -top-4 opacity-10 group-hover:rotate-12 transition-transform duration-500">
                            <CheckCircle2 className="w-24 h-24" />
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-on-primary">
                            <Star className="w-6 h-6 fill-current" />
                        </div>
                        <div>
                            <h4 className="text-heading-base text-on-primary">Rhythmic Master</h4>
                            <p className="text-xs text-white/70">7-Day Perfect Streak</p>
                        </div>
                        <div className="mt-auto">
                            <span className="inline-block px-2 py-1 bg-white/20 rounded-md label-small text-on-primary border-none">Achieved Jan 14</span>
                        </div>
                    </div>

                    <div className="milestone-base grayscale opacity-60">
                        <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-outline">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-heading-base">Cognitive Titan</h4>
                            <p className="text-xs text-outline">6 hour session duration</p>
                        </div>
                        <div className="mt-auto">
                            <div className="flex justify-between label-small text-outline mb-1">
                                <span>Locked</span>
                                <span>0%</span>
                            </div>
                            <div className="w-full h-1.5 bg-surface-container rounded-full"></div>
                        </div>
                    </div>

                    <div className="milestone-base">
                        <div className="w-12 h-12 rounded-full bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                            <Brain className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-heading-base">The Flow State</h4>
                            <p className="text-xs text-outline">30 sessions without interruption</p>
                        </div>
                        <div className="mt-auto">
                            <div className="flex justify-between label-small text-outline mb-1">
                                <span>12/30</span>
                                <span>40%</span>
                            </div>
                            <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                                <div className="bg-tertiary h-full w-[40%]"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Notes & Journal Section */}
            <section className="pb-12">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-heading-1">Deep Dive Journal</h3>
                    <button className="text-primary label-small flex items-center gap-1 hover:underline">
                        <Plus className="w-4 h-4" />
                        New Entry
                    </button>
                </div>
                <div className="space-y-4">
                    <div className="journal-entry">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h4 className="text-heading-base">Flow State Reached (Early Morning)</h4>
                                <p className="label-small text-outline tracking-wider">Yesterday • 07:15 AM</p>
                            </div>
                            <div className="flex gap-1">
                                <Star className="w-3.5 h-3.5 text-secondary fill-current" />
                                <Star className="w-3.5 h-3.5 text-secondary fill-current" />
                                <Star className="w-3.5 h-3.5 text-secondary fill-current" />
                            </div>
                        </div>
                        <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                            The 90-minute block felt effortless. Eliminating digital noise before 9 AM has drastically increased the initial immersion speed. No blockers identified.
                        </p>
                        <div className="mt-4 flex gap-2">
                            <span className="journal-tag">#MorningRhythm</span>
                            <span className="journal-tag">#Quiet</span>
                        </div>
                    </div>

                    <div className="journal-entry-error">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h4 className="text-heading-base">Friction Point: Environmental Noise</h4>
                                <p className="label-small text-outline tracking-wider">Jan 18, 2024 • 02:40 PM</p>
                            </div>
                            <AlertTriangle className="w-3.5 h-3.5 text-error" />
                        </div>
                        <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                            Attempted an afternoon session. The environment was too volatile. Learned that secondary deep work blocks require a location shift for better mental anchoring.
                        </p>
                        <div className="mt-4 flex gap-2">
                            <span className="journal-tag">#Blocker</span>
                            <span className="journal-tag">#Environment</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contextual FAB */}
            <Link href={'/new-habit'} className="fab-button">
                <Plus className="w-8 h-8" />
            </Link>
        </>
    );
}
