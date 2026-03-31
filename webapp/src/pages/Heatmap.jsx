import React from 'react';
import mockHistory from '../api/mockData';

export default function Heatmap() {
    const now = new Date();
    const days = [];
    for (let i = 27; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(d.getDate() - i);
        days.push(d.toISOString().split('T')[0]);
    }

    const dailyData = {};
    mockHistory.forEach(item => {
        const dateStr = item.date.split('T')[0];
        if (!dailyData[dateStr] || item.riskScore > dailyData[dateStr].score) {
            dailyData[dateStr] = { score: item.riskScore, food: item.foodName };
        }
    });

    const getCellColor = (score) => {
        if (!score && score !== 0) return 'bg-slate-800/30';
        if (score > 75) return 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.4)]';
        if (score > 40) return 'bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.3)]';
        return 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]';
    };

    return (
        <div className="space-y-8 animate-in">
            <div>
                <h1 className="text-3xl font-black bg-linear-to-r from-white to-slate-400 bg-clip-text text-transparent">Habit Heatmap</h1>
                <p className="text-slate-400 mt-2">Visualizing your metabolic risk patterns over the last 4 weeks.</p>
            </div>

            <div className="card-panel">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-bold text-slate-200">Activity Grid</h3>
                    <div className="flex gap-4 text-[10px] font-bold uppercase tracking-widest">
                        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-emerald-500"></div> Healthy</div>
                        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-amber-500"></div> Moderate</div>
                        <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded-sm bg-red-500"></div> Risky</div>
                    </div>
                </div>

                <div className="heatmap-grid pb-4">
                    {days.map(day => (
                        <div 
                            key={day}
                            title={`${day}: ${dailyData[day]?.food || 'No orders tracked'}`}
                            className={`heatmap-cell ${getCellColor(dailyData[day]?.score)}`}
                        />
                    ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-white/5 flex gap-8">
                    <div>
                        <span className="block text-xs font-bold text-slate-500 uppercase">Avg Weekly Risk</span>
                        <span className="text-2xl font-black text-amber-500">42%</span>
                    </div>
                    <div>
                        <span className="block text-xs font-bold text-slate-500 uppercase">Consistency</span>
                        <span className="text-2xl font-black text-emerald-500">85%</span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card-panel border-l-4 border-l-indigo-500">
                    <h4 className="font-bold mb-2">Weekend Surge</h4>
                    <p className="text-sm text-slate-400">Your high-risk orders are 2.5x more likely on Saturday nights. Consider meal-prepping for weekends to reduce late-night cravings.</p>
                </div>
                <div className="card-panel border-l-4 border-l-emerald-500">
                    <h4 className="font-bold mb-2">Steady Improvement</h4>
                    <p className="text-sm text-slate-400">You've chosen healthy alternatives 4 times this week! Your metabolic stability score has increased by 12 points.</p>
                </div>
            </div>
        </div>
    );
}

