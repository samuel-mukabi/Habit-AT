"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Bell, Settings, User, Shield, HelpCircle, LogOut } from 'lucide-react';

const TopNav = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className="layout-header gap-6 border-b border-outline-variant/10">
      
      {/* Expanded Search Bar */}
      <div className="flex-1 relative">
        <input 
            type="text" 
            placeholder="Search insights, routines, or journals..." 
            className="w-full bg-surface-container-low border-none rounded-md pl-10 pr-4 py-3 text-sm focus:ring-1 focus:ring-primary outline-none text-on-surface shadow-sm" 
        />
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4" />
      </div>
      
      {/* Action Icons & Profile */}
      <div className="flex items-center gap-2 shrink-0 relative" ref={dropdownRef}>
        
        {/* Notifications */}
        <div className="relative">
          <button 
            onClick={() => toggleDropdown('notifications')}
            className={`p-2 hover:bg-surface-container-low dark:hover:bg-[#2a2f28] rounded-md transition-all active:scale-95 border-none cursor-pointer ${activeDropdown === 'notifications' ? 'bg-surface-container-low dark:bg-[#2a2f28]' : 'bg-transparent'}`}
          >
            <Bell className="w-5 h-5 text-outline" />
          </button>
          
          {activeDropdown === 'notifications' && (
            <div className="absolute right-0 mt-2 w-64 bg-surface rounded-lg shadow-lg border border-outline-variant/20 z-50 overflow-hidden">
              <div className="p-3 border-b border-outline-variant/10 font-medium text-sm text-on-surface">Notifications</div>
              <div className="py-1">
                <button className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-surface-container-low border-none bg-transparent cursor-pointer">Mark all as read</button>
                <button className="w-full text-left px-4 py-2 text-sm text-on-surface hover:bg-surface-container-low border-none bg-transparent cursor-pointer">Clear recent</button>
              </div>
              <Link href="/notifications" className="block w-full text-center px-4 py-2 text-sm text-primary hover:bg-surface-container-low border-t border-outline-variant/10 font-medium" onClick={() => setActiveDropdown(null)}>
                All Notifications
              </Link>
            </div>
          )}
        </div>

        {/* Settings */}
        <div className="relative">
          <button 
            onClick={() => toggleDropdown('settings')}
            className={`p-2 hover:bg-surface-container-low dark:hover:bg-[#2a2f28] rounded-md transition-all active:scale-95 border-none cursor-pointer ${activeDropdown === 'settings' ? 'bg-surface-container-low dark:bg-[#2a2f28]' : 'bg-transparent'}`}
          >
            <Settings className="w-5 h-5 text-outline" />
          </button>

          {activeDropdown === 'settings' && (
            <div className="absolute right-0 mt-2 w-56 bg-surface rounded-lg shadow-lg border border-outline-variant/20 z-50 overflow-hidden">
              <div className="p-3 border-b border-outline-variant/10 font-medium text-sm text-on-surface">Settings</div>
              <div className="py-1">
                <Link href="/privacy" className="flex items-center gap-2 px-4 py-2 text-sm text-on-surface hover:bg-surface-container-low no-underline" onClick={() => setActiveDropdown(null)}>
                  <Shield className="w-4 h-4 text-outline" /> Privacy & Security
                </Link>
                <Link href="/support" className="flex items-center gap-2 px-4 py-2 text-sm text-on-surface hover:bg-surface-container-low no-underline" onClick={() => setActiveDropdown(null)}>
                  <HelpCircle className="w-4 h-4 text-outline" /> Help & Support
                </Link>
              </div>
              <Link href="/settings" className="block w-full text-center px-4 py-2 text-sm text-primary hover:bg-surface-container-low border-t border-outline-variant/10 font-medium no-underline" onClick={() => setActiveDropdown(null)}>
                All Settings
              </Link>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative ml-2">
          <button 
            onClick={() => toggleDropdown('profile')}
            className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/20 relative cursor-pointer block p-0"
          >
            <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvXmJvMxokljSVaWXId7REn6TSxtoC80SbAppszW3Dgx-_WfTXUX3z9yWCVa7yauBHVM0qe-QJFTjByKYCp85WpkZxRT8tygAD2iv2Uint3F18Yv7Ffl49IAnm6AdZ_qnR5L6v9XFpaSI8_UkvyN5nTbHJWtkPHqI2g1cXWlCB1wel1-TvT5H2G_fXgLGaBklAoR3gO24riEBhEpBzYyATasIz3HunoEa5MeRsIkCQBexLxS4u8MKSZ6F3A98F7s2bsCDa9LWQcJ3f" alt="User profile avatar" fill className="object-cover" />
          </button>

          {activeDropdown === 'profile' && (
            <div className="absolute right-0 mt-2 w-56 bg-surface rounded-lg shadow-lg border border-outline-variant/20 z-50 overflow-hidden">
              <div className="p-3 border-b border-outline-variant/10 flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden border border-outline-variant/20 relative shrink-0">
                    <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvXmJvMxokljSVaWXId7REn6TSxtoC80SbAppszW3Dgx-_WfTXUX3z9yWCVa7yauBHVM0qe-QJFTjByKYCp85WpkZxRT8tygAD2iv2Uint3F18Yv7Ffl49IAnm6AdZ_qnR5L6v9XFpaSI8_UkvyN5nTbHJWtkPHqI2g1cXWlCB1wel1-TvT5H2G_fXgLGaBklAoR3gO24riEBhEpBzYyATasIz3HunoEa5MeRsIkCQBexLxS4u8MKSZ6F3A98F7s2bsCDa9LWQcJ3f" alt="User profile avatar" fill className="object-cover" />
                 </div>
                 <div>
                    <div className="font-medium text-sm text-on-surface">Jane Doe</div>
                    <div className="text-xs text-outline">jane.doe@example.com</div>
                 </div>
              </div>
              <div className="py-1">
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-on-surface hover:bg-surface-container-low border-none bg-transparent cursor-pointer">
                  <User className="w-4 h-4 text-outline" /> Edit Profile
                </button>
                <button className="w-full flex items-center gap-2 px-4 py-2 text-sm text-error hover:bg-surface-container-low border-none bg-transparent cursor-pointer">
                  <LogOut className="w-4 h-4 text-error" /> Log Out
                </button>
              </div>
              <Link href="/profile" className="block w-full text-center px-4 py-2 text-sm text-primary hover:bg-surface-container-low border-t border-outline-variant/10 font-medium no-underline" onClick={() => setActiveDropdown(null)}>
                View Profile
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopNav;
