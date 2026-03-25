"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Leaf, 
  RotateCcw,
  TrendingUp, 
  HelpCircle, 
  Lock,
  Search,
  Users,
  PanelLeftClose,
  PanelLeftOpen,
  Plus
} from 'lucide-react';

const SideBar = () => {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`hidden md:flex flex-col h-screen sticky top-0 p-4 gap-4 bg-surface-container-low dark:bg-[#1f231e] border-r border-outline-variant/15 font-headline text-sm font-medium transition-all duration-300 ease-in-out ${isCollapsed ? 'w-20 items-center' : 'w-64'}`}>
      
      {/* Header and Toggle */}
      <div className={`flex items-center pb-4 w-full ${isCollapsed ? 'justify-center flex-col gap-4' : 'justify-between'}`}>
        <div className={`flex items-center ${isCollapsed ? 'justify-center w-full block' : 'gap-3 px-2 w-auto'}`}>
          <div className="w-10 h-10 rounded-md bg-primary-container shrink-0 flex items-center justify-center text-on-primary shadow-sm hover:scale-105 transition-transform">
            <Leaf className="w-6 h-6" />
          </div>
          {!isCollapsed && (
            <div className="overflow-hidden whitespace-nowrap transition-all">
              <h2 className="text-xl font-black text-primary-container leading-tight">Habit-AT</h2>
              <p className="text-[10px] uppercase tracking-widest text-outline">Self-Improvement</p>
            </div>
          )}
        </div>
        
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-outline hover:text-primary transition-colors bg-transparent border-none cursor-pointer p-1"
          title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
        >
          {isCollapsed ? <PanelLeftOpen className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col gap-2 mt-2 w-full">
        {[
          { href: '/dashboard', icon: RotateCcw, label: 'Dashboard' },
          { href: '/analytics', icon: TrendingUp, label: 'Growth Trends' },
          { href: '/discover', icon: Search, label: 'Discover' },
          { href: '/journal', icon: Leaf, label: 'Journal' },
          { href: '/community', icon: Users, label: 'Community' },
        ].map(item => {
          const isActive = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link 
              key={item.href} 
              href={item.href} 
              title={isCollapsed ? item.label : undefined}
              className={`flex items-center gap-3 py-3 rounded-md transition-all duration-200 cursor-pointer ${
                  isCollapsed ? 'justify-center px-0' : 'px-3 hover:translate-x-1'
              } ${
                  isActive 
                  ? 'bg-surface-container-highest dark:bg-[#2a2f28] text-primary-container dark:text-[#b0bf40] shadow-sm font-bold' 
                  : 'text-[#747968] dark:text-[#a4a998] hover:bg-surface-container-high dark:hover:bg-[#252a23]'
              }`}
            >
              <Icon className={`shrink-0 w-5 h-5`} />
              {!isCollapsed && <span className="whitespace-nowrap overflow-hidden">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer Actions */}
      <div className={`mt-auto pt-4 border-t border-outline-variant/20 flex flex-col gap-2 w-full ${isCollapsed ? 'items-center' : ''}`}>
        
        <Link 
          href="/new-habit" 
          title={isCollapsed ? "New Habit" : undefined}
          className={`flex items-center justify-center bg-linear-to-br transition-all duration-300 from-primary to-primary-container text-on-primary rounded-md font-bold shadow-md cursor-pointer hover:scale-105 active:scale-95 ${
            isCollapsed ? 'w-12 h-12 rounded-full mb-2' : 'w-full py-3 mb-2 gap-2'
          }`}
        >
          {isCollapsed ? <Plus className="w-6 h-6" /> : 'Initialize Habit'}
        </Link>

        {[
          { icon: HelpCircle, label: 'Support', href: '/support' },
          { icon: Lock, label: 'Privacy', href: '/privacy' }
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <Link href={item.href}
              key={idx}
              title={isCollapsed ? item.label : undefined}
              className={`flex items-center gap-3 py-2 text-outline hover:text-primary transition-colors bg-transparent border-none cursor-pointer ${
                isCollapsed ? 'justify-center w-full' : 'px-3 text-left w-full'
              }`}
            >
              <Icon className="w-5 h-5 shrink-0" />
              {!isCollapsed && <span className="whitespace-nowrap overflow-hidden">{item.label}</span>}
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default SideBar;
