import { useEffect, useState } from 'react';
import { Activity } from 'lucide-react';
import { Skeleton } from './ui/skeleton';

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-neutral-light overflow-hidden">
      {/* Navbar Skeleton */}
      <div className="h-20 w-full bg-white shadow-sm flex items-center justify-between px-4 sm:px-6 lg:px-8 border-b border-primary/10">
        <div className="flex items-center gap-3 md:gap-4">
          <Skeleton className="h-8 w-8 md:h-10 md:w-10 rounded-lg" />
          <Skeleton className="h-6 w-32 md:h-8 md:w-48" />
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-10 w-32 rounded-full ml-4" />
        </div>
        <div className="md:hidden">
          <Skeleton className="h-8 w-8 rounded-md" />
        </div>
      </div>

      {/* Main Content Skeleton */}
      <div className="flex-1 relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-24 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 flex flex-col justify-center space-y-6">
          <Skeleton className="h-6 w-48 rounded-full" />
          <Skeleton className="h-14 w-full md:w-4/5" />
          <Skeleton className="h-14 w-3/4 md:w-3/5" />
          
          <div className="space-y-3 mt-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          
          <div className="flex gap-4 mt-8">
            <Skeleton className="h-12 w-40 rounded-lg" />
            <Skeleton className="h-12 w-40 rounded-lg" />
          </div>
        </div>
        
        <div className="md:w-1/2 hidden md:flex items-center justify-center p-8">
           <Skeleton className="h-[400px] w-[400px] rounded-full" />
        </div>

        {/* Heartbeat Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-light/40 backdrop-blur-sm z-10">
          <div className="flex flex-col items-center justify-center">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Activity size={48} className="text-primary animate-heartbeat" />
            </div>
            <p className="text-primary font-medium tracking-wide animate-pulse">Loading Health Profile...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
