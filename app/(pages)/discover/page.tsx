"use client";

import React, { useState } from 'react';
import { 
  Dumbbell, 
  Brain, 
  BookOpen, 
  Coffee, 
  Leaf, 
  Moon, 
  Target, 
  Search,
  Plus
} from 'lucide-react';

// Pre-created habit database
const PREDEFINED_HABITS = [
  {
    id: 'mind-1',
    title: '10 Min Vipassana',
    description: 'Sit in silence, focusing purely on the sensation of breath entering and leaving the nostrils.',
    category: 'Mindfulness',
    tags: ['Meditation', 'Focus', 'Morning'],
    difficulty: 'Medium',
    icon: <Brain className="w-5 h-5 text-primary" />,
    color: 'bg-primary-container/20 border-primary/30'
  },
  {
    id: 'mind-2',
    title: 'Gratitude Journal',
    description: 'Write down 3 highly specific things you are grateful for today to rewire baseline dopamine.',
    category: 'Mindfulness',
    tags: ['Evening', 'Writing', 'Mental Health'],
    difficulty: 'Easy',
    icon: <BookOpen className="w-5 h-5 text-secondary" />,
    color: 'bg-secondary-container/20 border-secondary/30'
  },
  {
    id: 'gym-1',
    title: 'Hypertrophy Block',
    description: '45 minutes of targeted weightlifting focusing on progressive overload.',
    category: 'Gym',
    tags: ['Weights', 'Strength', 'Afternoon'],
    difficulty: 'Hard',
    icon: <Dumbbell className="w-5 h-5 text-tertiary" />,
    color: 'bg-tertiary-container/30 border-tertiary/30'
  },
  {
    id: 'gym-2',
    title: 'Zone 2 Cardio',
    description: '45 minutes of steady-state cardio (heart rate 130-140) to build mitochondrial density.',
    category: 'Gym',
    tags: ['Endurance', 'Heart Health'],
    difficulty: 'Medium',
    icon: <Target className="w-5 h-5 text-primary" />,
    color: 'bg-primary-container/20 border-primary/30'
  },
  {
    id: 'lang-1',
    title: 'Duolingo Streak',
    description: 'Complete one lesson in your target language to maintain the daily neural pathway.',
    category: 'Language',
    tags: ['Learning', 'Daily', 'App'],
    difficulty: 'Easy',
    icon: <BookOpen className="w-5 h-5 text-secondary" />,
    color: 'bg-secondary-container/20 border-secondary/30'
  },
  {
    id: 'lang-2',
    title: 'Immersion Podcast',
    description: 'Listen to 20 minutes of a podcast exclusively in your target language.',
    category: 'Language',
    tags: ['Listening', 'Passive', 'Commute'],
    difficulty: 'Medium',
    icon: <Target className="w-5 h-5 text-tertiary" />,
    color: 'bg-tertiary-container/30 border-tertiary/30'
  },
  {
    id: 'prod-1',
    title: '90m Deep Work Block',
    description: 'Phone in another room, no tabs open except the task at hand. Pure focus.',
    category: 'Productivity',
    tags: ['Career', 'Focus', 'Morning'],
    difficulty: 'Hard',
    icon: <Coffee className="w-5 h-5 text-primary" />,
    color: 'bg-primary-container/20 border-primary/30'
  },
  {
    id: 'rec-1',
    title: 'Digital Sunset',
    description: 'No screens 60 minutes before bed. Read a physical book or stretch.',
    category: 'Recovery',
    tags: ['Sleep', 'Evening', 'Health'],
    difficulty: 'Medium',
    icon: <Moon className="w-5 h-5 text-secondary" />,
    color: 'bg-secondary-container/20 border-secondary/30'
  },
  {
    id: 'nut-1',
    title: 'Morning Hydration',
    description: 'Drink 16oz of water with a pinch of sea salt immediately upon waking.',
    category: 'Nutrition',
    tags: ['Morning', 'Health', 'Easy win'],
    difficulty: 'Easy',
    icon: <Leaf className="w-5 h-5 text-tertiary" />,
    color: 'bg-tertiary-container/30 border-tertiary/30'
  }
];

const CATEGORIES = ['All', 'Mindfulness', 'Gym', 'Language', 'Productivity', 'Recovery', 'Nutrition'];

export default function DiscoverHabitsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredHabits = PREDEFINED_HABITS.filter(habit => {
    const matchesCategory = activeCategory === 'All' || habit.category === activeCategory;
    const matchesSearch = habit.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          habit.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-block w-8 h-0.5 bg-secondary"></span>
          <span className="label-small text-secondary">Template Ecosystem</span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-heading-mega">Discover</h1>
              <p className="mt-4 text-outline font-body text-lg max-w-2xl">
                Adopt pre-engineered habits tailored to specific lifestyle vectors. Designed for maximum adoption rate.
              </p>
            </div>
            
            <div className="relative w-full md:w-72">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-outline-variant" />
              </div>
              <input
                type="text"
                placeholder="Search habits or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-surface-container-low border border-outline-variant/30 rounded-full focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary text-sm text-on-surface"
              />
            </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mb-8">
        <div className="flex gap-3 overflow-x-auto pb-4 custom-scrollbar">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-5 py-2 rounded-full font-label text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === cat 
                  ? 'bg-secondary text-on-secondary shadow-md' 
                  : 'bg-surface-container-high text-outline hover:bg-surface-container-highest'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHabits.map(habit => (
          <div key={habit.id} className="card-base flex flex-col h-full border border-transparent hover:border-outline-variant/20 transition-all group">
            
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${habit.color}`}>
                 {habit.icon}
              </div>
              <span className="label-small px-2 py-1 bg-surface-container-high rounded-md">
                {habit.difficulty}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-heading-1 mb-2 group-hover:text-primary transition-colors">{habit.title}</h3>
            <p className="text-sm font-body text-outline mb-6 flex-1">
              {habit.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
               {habit.tags.map(tag => (
                   <span key={tag} className="label-tiny opacity-80 group-hover:opacity-100 transition-opacity">
                     {tag}
                   </span>
               ))}
            </div>

            {/* Action */}
            <button className="w-full py-3 bg-surface-container-highest text-on-surface rounded-md font-bold text-sm flex items-center justify-center gap-2 hover:bg-primary hover:text-on-primary transition-colors cursor-pointer mt-auto">
               <Plus className="w-4 h-4" />
               Add to Routine
            </button>
          </div>
        ))}
        
        {filteredHabits.length === 0 && (
            <div className="col-span-full py-20 flex flex-col items-center justify-center text-outline">
                <Target className="w-12 h-12 mb-4 opacity-50" />
                <p className="font-headline text-lg">No habits found matching your criteria.</p>
                <button 
                  onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
                  className="mt-4 text-primary font-bold hover:underline"
                >
                    Clear filters
                </button>
            </div>
        )}
      </section>
    </>
  );
}
