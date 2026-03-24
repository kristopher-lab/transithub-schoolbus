import React from 'react';
import { Outlet } from 'react-router-dom';
import { DisclaimerBanner } from './DisclaimerBanner';
import { Header } from './Header';
import { Footer } from './Footer';
export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary selection:text-slate-900">
      <DisclaimerBanner />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}