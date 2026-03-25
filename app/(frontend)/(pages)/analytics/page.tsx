"use client";

import React, { useState, useMemo } from 'react';
import { Target, TrendingUp, Calendar as CalendarIcon, Zap, Award } from 'lucide-react';

// Mock data generator for 60-day charts
const generateChartData = (baseHeight: number, volatility: number) => {
  return Array.from({ length: 60 }).map((_, i) => {
    return Math.max(10, Math.min(100, baseHeight + Math.sin(i / volatility) * 30 + (Math.random() * 20 - 10)));
  });
};

const MOCK_HABIT_DATA = [
  {
    id: "habit-1",
    name: "10 Min Vipassana",
    category: "Mindfulness",
    description: "Sit in silence, focusing purely on the sensation of breath entering and leaving the nostrils. Essential practice for reducing baseline anxiety and increasing gray matter density in the prefrontal cortex.",
    requirement: "10 minutes unguided meditation",
    weeklyCompletionRate: 92,
    weeklyCompletionChange: "+5%",
    currentStreak: 14,
    longestStreak: 45,
    adherenceMap: [true, true, true, false, true, true, true], // MTWTFSS
    chartData: generateChartData(70, 5),
    color: "primary"
  },
  {
    id: "habit-2",
    name: "90m Deep Work Block",
    category: "Productivity",
    description: "Phone in another room, no tabs open except the task at hand. Pure focus. Protects cognitive bandwidth from algorithmic hijacking and builds deep career capital.",
    requirement: "90 minutes unbroken focus",
    weeklyCompletionRate: 65,
    weeklyCompletionChange: "-12%",
    currentStreak: 2,
    longestStreak: 12,
    adherenceMap: [true, true, false, true, true, false, false], // MTWTFSS
    chartData: generateChartData(40, 8),
    color: "secondary"
  },
  {
    id: "habit-3",
    name: "Zone 2 Cardio",
    category: "Physical",
    description: "Steady-state cardio (heart rate 130-140) to build mitochondrial density, lower resting heart rate, and accelerate metabolic recovery.",
    requirement: "45 minutes continuous effort",
    weeklyCompletionRate: 100,
    weeklyCompletionChange: "0%",
    currentStreak: 28,
    longestStreak: 28,
    adherenceMap: [true, false, true, false, true, false, true], // Doesn't require everyday
    chartData: generateChartData(85, 3),
    color: "tertiary"
  }
];

// Tailwind safely processes these explicitly defined classes
const colorMap: Record<string, { text: string, bg: string, containerText: string, iconBg: string }> = {
  primary: {
    text: "text-primary",
    bg: "bg-primary",
    containerText: "text-primary-container",
    iconBg: "bg-primary-container/20 text-primary"
  },
  secondary: {
    text: "text-secondary",
    bg: "bg-secondary",
    containerText: "text-secondary-container",
    iconBg: "bg-secondary-container/20 text-secondary"
  },
  tertiary: {
    text: "text-tertiary",
    bg: "bg-tertiary",
    containerText: "text-tertiary-container",
    iconBg: "bg-tertiary-container/20 text-tertiary"
  }
};

export default function AnalyticsPage() {
  const [selectedHabitId, setSelectedHabitId] = useState(MOCK_HABIT_DATA[0].id);

  const activeHabit = useMemo(() => {
    return MOCK_HABIT_DATA.find(h => h.id === selectedHabitId) || MOCK_HABIT_DATA[0];
  }, [selectedHabitId]);
  
  const theme = colorMap[activeHabit.color];

  return (
    <>
      <section className="mb-10 lg:flex justify-between items-end gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block w-8 h-0.5 bg-primary"></span>
            <span className="label-small text-primary">Data & Insights</span>
          </div>
          <h1 className="text-heading-mega">Analytics Hub</h1>
          <p className="mt-4 text-outline font-body text-lg max-w-2xl">
            Long-term correlation, success rates, and habit adherence.
          </p>
        </div>
        
        {/* Habit Selector */}
        <div className="mt-6 lg:mt-0 lg:w-72 bg-surface-container-low border border-outline-variant/30 rounded-md p-2">
            <label className="text-[10px] font-bold uppercase text-outline tracking-wider block mb-1 px-2 pt-1">Target Habit</label>
            <select 
              value={selectedHabitId}
              onChange={(e) => setSelectedHabitId(e.target.value)}
              className="w-full bg-transparent border-none text-on-surface font-headline font-bold text-sm focus:outline-none focus:ring-0 px-2 pb-1 cursor-pointer"
            >
              <optgroup label="Active Habits">
                {MOCK_HABIT_DATA.map(habit => (
                  <option key={habit.id} value={habit.id}>
                    {habit.name}
                  </option>
                ))}
              </optgroup>
            </select>
        </div>
      </section>

      {/* Habit Master Description */}
      <section className="card-base mb-8 border-l-4" style={{ borderColor: `var(--color-${activeHabit.color})` }}>
        <div className="flex justify-between items-start gap-4">
           <div>
              <h2 className="text-xl font-headline font-bold mb-2 flex items-center gap-3">
                 {activeHabit.name}
                 <span className="label-tiny tracking-widest">{activeHabit.category}</span>
              </h2>
              <p className="text-on-surface-variant font-body leading-relaxed max-w-4xl">
                 {activeHabit.description}
              </p>
           </div>
           
           <div className="hidden md:block text-right">
              <span className="text-xs text-outline font-bold uppercase tracking-widest block mb-1">Routine Standard</span>
              <span className={`text-sm font-bold bg-${activeHabit.color}-container/20 text-${activeHabit.color} px-3 py-1 rounded-md`}>
                 {activeHabit.requirement}
              </span>
           </div>
        </div>
      </section>

      {/* Top Metrics Row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        
        {/* Completion Rate */}
        <div className="card-base flex flex-col justify-between">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-heading-2">Weekly Completion</h3>
            <div className={`p-2 rounded-md ${theme.iconBg}`}>
               <Target className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="flex items-end gap-4 mb-3">
              <span className={`text-5xl font-black font-headline ${theme.text}`}>
                 {activeHabit.weeklyCompletionRate}%
              </span>
              <span className={`text-sm font-bold ${activeHabit.weeklyCompletionChange.startsWith('+') ? 'text-primary' : 'text-error'}`}>
                 {activeHabit.weeklyCompletionChange} vs last
              </span>
            </div>
            <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden">
               <div className={`${theme.bg} h-full transition-all duration-700 ease-out`} style={{ width: `${activeHabit.weeklyCompletionRate}%` }}></div>
            </div>
          </div>
        </div>
        
        {/* Current Streak */}
        <div className="card-base flex flex-col justify-between">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-heading-2">Current Streak</h3>
            <div className={`p-2 rounded-md ${colorMap.secondary.iconBg}`}>
               <Zap className="w-5 h-5" />
            </div>
          </div>
          <div>
            <div className="flex items-end gap-4 mb-2">
              <span className="text-5xl font-black font-headline text-secondary">
                 {activeHabit.currentStreak}
              </span>
              <span className="text-sm font-bold text-outline mb-1">
                 Days Fire
              </span>
            </div>
          </div>
        </div>

        {/* Longest Streak & Adherence */}
        <div className="card-base flex flex-col justify-between">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-heading-2">Longest Run</h3>
            <div className={`p-2 rounded-md ${colorMap.tertiary.iconBg}`}>
               <Award className="w-5 h-5" />
            </div>
          </div>
          <div className="flex items-end gap-4 mb-6">
             <span className="text-5xl font-black font-headline text-on-surface">
                {activeHabit.longestStreak}
             </span>
             <span className="text-sm font-bold text-outline mb-1">
                Days
             </span>
          </div>
          
          <div className="border-t border-outline-variant/20 pt-4">
             <div className="flex justify-between text-xs font-label font-bold text-outline mb-2">
                <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
             </div>
             <div className="flex justify-between gap-1">
                {activeHabit.adherenceMap.map((completed, idx) => (
                   <div key={idx} className={`h-2 flex-1 rounded-sm ${completed ? theme.bg : 'bg-surface-container-highest'}`}></div>
                ))}
             </div>
          </div>
        </div>

      </section>

      {/* Trajectory Chart */}
      <section className="card-base relative overflow-hidden">
        <div className="flex justify-between items-center mb-10">
           <div>
              <h3 className="text-heading-1">Performance Trajectory</h3>
              <p className="text-sm text-outline font-body mt-1">Rolling 60-day momentum index</p>
           </div>
           <div className={`p-3 rounded-full ${theme.iconBg}`}>
              <TrendingUp className="w-6 h-6" />
           </div>
        </div>
        
        <div className="relative h-64 flex items-end gap-1">
           {activeHabit.chartData.map((height, i) => {
              // Add gradient styling for performance indication
              const isHigh = height > 70;
              const isLow = height < 40;
              
              // Use explicit classes through theme definitions or standard strings
              // We'll use the theme background for the regular bar, and opacity classes with it
              let barStyle = `${theme.bg} opacity-60`;
              
              if (isHigh) barStyle = `${theme.bg} opacity-100`;
              if (isLow) barStyle = `bg-outline-variant/30`;

              return (
                <div 
                  key={i} 
                  className={`flex-1 transition-all duration-700 ease-out rounded-t-sm hover:opacity-80 group relative ${barStyle}`} 
                  style={{ height: `${height}%` }}
                >
                   {/* Tooltip on hover */}
                   <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-inverse-surface text-inverse-on-surface text-xs py-1 px-2 rounded-sm opacity-0 group-hover:opacity-100 whitespace-nowrap z-10 transition-opacity">
                      Day {60 - i}: {Math.round(height)}
                   </div>
                </div>
              );
           })}
        </div>
        
        <div className="flex justify-between mt-4 label-small text-outline border-t border-outline-variant/10 pt-4">
          <div className="flex items-center gap-2"><CalendarIcon className="w-3 h-3"/> 60 Days Ago</div>
          <div className="flex items-center gap-2">Today <CalendarIcon className="w-3 h-3"/></div>
        </div>
      </section>
    </>
  );
}
