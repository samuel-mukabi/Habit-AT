import React from 'react';
import { Brain, Flame, Target, Share2, Shield, CalendarDays } from 'lucide-react';

export default function ProfilePage() {
  return (
    <>
      <section className="mb-10 text-center flex flex-col items-center">
        <div className="w-28 h-28 rounded-full bg-primary-container border-4 border-surface shadow-lg relative overflow-hidden mb-6 group cursor-pointer">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvXmJvMxokljSVaWXId7REn6TSxtoC80SbAppszW3Dgx-_WfTXUX3z9yWCVa7yauBHVM0qe-QJFTjByKYCp85WpkZxRT8tygAD2iv2Uint3F18Yv7Ffl49IAnm6AdZ_qnR5L6v9XFpaSI8_UkvyN5nTbHJWtkPHqI2g1cXWlCB1wel1-TvT5H2G_fXgLGaBklAoR3gO24riEBhEpBzYyATasIz3HunoEa5MeRsIkCQBexLxS4u8MKSZ6F3A98F7s2bsCDa9LWQcJ3f" alt="Profile" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40 hidden group-hover:flex items-center justify-center transition-all backdrop-blur-sm">
             <span className="text-white text-xs font-bold font-label uppercase tracking-widest">Change</span>
          </div>
        </div>
        
        <h1 className="text-heading-mega mb-2">Alex.dev</h1>
        <p className="text-outline font-body text-lg max-w-lg mb-4">
          &#34;Focusing on cognitive endurance and systems engineering.&#34;
        </p>
        <div className="flex gap-4">
          <span className="label-small bg-surface-container-high px-3 py-1.5 rounded-md flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-outline" /> Joined Jan 2024
          </span>
          <span className="label-small bg-surface-container-high px-3 py-1.5 rounded-md flex items-center gap-2">
             <Shield className="w-4 h-4 text-outline" /> Rank: Titan
          </span>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
         <div className="card-base text-center py-8 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center mx-auto mb-4">
               <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-4xl font-black font-headline text-on-surface mb-1">42</h3>
            <p className="label-small text-outline">Day Longest Streak</p>
         </div>
         <div className="card-base text-center py-8 hover:-translate-y-1 transition-transform border border-secondary shadow-[0_8px_30px_rgba(var(--secondary-rgb),0.2)]">
            <div className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center mx-auto mb-4">
               <Target className="w-6 h-6" />
            </div>
            <h3 className="text-4xl font-black font-headline text-on-surface mb-1">92%</h3>
            <p className="label-small text-outline">Completion Rate</p>
         </div>
         <div className="card-base text-center py-8 hover:-translate-y-1 transition-transform">
            <div className="w-12 h-12 rounded-full bg-tertiary/20 text-tertiary flex items-center justify-center mx-auto mb-4">
               <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-4xl font-black font-headline text-on-surface mb-1">10k+</h3>
            <p className="label-small text-outline">Deep Work Minutes</p>
         </div>
      </div>

      <section className="card-base mb-8">
         <div className="flex justify-between items-center mb-8 border-b border-outline-variant/20 pb-4">
            <h2 className="text-heading-2">Ecosystem Contribution Map</h2>
            <button className="flex items-center gap-2 text-primary font-bold text-sm bg-transparent border-none cursor-pointer hover:underline">
               <Share2 className="w-4 h-4" /> Share Map
            </button>
         </div>

         {/* Github-style contribution graph mock */}
         <div className="flex justify-center overflow-x-auto pb-6 custom-scrollbar">
            <div className="grid grid-rows-7 grid-flow-col gap-1.5 w-max">
               {Array.from({ length: 365 }).map((_, i) => {
                  const chance = Math.random();
                  let bgClass = 'bg-surface-container-highest';
                  if (chance > 0.8) bgClass = 'bg-primary/20';
                  if (chance > 0.9) bgClass = 'bg-primary/60';
                  if (chance > 0.97) bgClass = 'bg-primary';
                  if (chance > 0.99) bgClass = 'bg-secondary drop-shadow-[0_0_4px_rgba(204,119,34,0.8)]';
                  
                  return (
                     <div 
                        key={i} 
                        className={`w-3.5 h-3.5 rounded-sm ${bgClass}`}
                        style={{ opacity: i > 330 ? 0.2 : 1 }} // fading out future days
                        title={`Day ${i}`}
                     ></div>
                  );
               })}
            </div>
         </div>
         <div className="flex justify-between items-center mt-4">
            <span className="label-tiny text-outline">Last 12 Months</span>
            <div className="flex gap-2 items-center">
               <span className="label-tiny text-outline mr-1">Less</span>
               <div className="w-3.5 h-3.5 rounded-sm bg-surface-container-highest"></div>
               <div className="w-3.5 h-3.5 rounded-sm bg-primary/20"></div>
               <div className="w-3.5 h-3.5 rounded-sm bg-primary/60"></div>
               <div className="w-3.5 h-3.5 rounded-sm bg-primary border border-primary-container shadow-sm"></div>
               <div className="w-3.5 h-3.5 rounded-sm bg-secondary drop-shadow-[0_0_2px_rgba(204,119,34,0.8)]"></div>
               <span className="label-tiny text-outline ml-1">More</span>
            </div>
         </div>
      </section>
    </>
  );
}
