import React from 'react';
import { AlertCircle } from 'lucide-react';
export function DisclaimerBanner() {
  return (
    <div className="bg-slate-900 text-white py-2 px-4 text-xs sm:text-sm font-medium border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-center">
        <AlertCircle className="w-4 h-4 text-yellow-400 shrink-0" />
        <span>
          <strong>Disclaimer:</strong> This is a demonstration look-alike project and is NOT affiliated with any real transportation authority.
        </span>
      </div>
    </div>
  );
}