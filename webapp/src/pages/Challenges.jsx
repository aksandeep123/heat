import React from 'react';
import { Trophy } from 'lucide-react';

export default function Challenges() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <Trophy className="text-yellow-500" /> Gamified Challenges
            </h1>
            <p className="text-slate-500">Turn your behavior change into a game. Earn points by avoiding late-night junk.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card-panel border-l-4 border-l-yellow-400">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-slate-800">No Junk Week</h3>
                            <p className="text-xs text-slate-500 mt-1">Survive 7 days without high-risk foods.</p>
                        </div>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">+100 pts</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-100 flex gap-2">
                         <button className="btn-secondary text-xs flex-1">Accept Challenge</button>
                    </div>
                </div>

                <div className="card-panel border-l-4 border-l-purple-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-bold text-slate-800">Midnight Warrior</h3>
                            <p className="text-xs text-slate-500 mt-1">Zero orders between 10 PM and 4 AM.</p>
                        </div>
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">+80 pts</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-100 flex gap-2">
                         <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden self-center">
                             <div className="bg-purple-500 h-full w-1/2"></div>
                         </div>
                         <span className="text-xs text-slate-500 font-bold whitespace-nowrap">Day 3 / 7</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
