import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as RTC, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', late_night: 2, total: 4 },
  { name: 'Tue', late_night: 1, total: 3 },
  { name: 'Wed', late_night: 0, total: 2 },
  { name: 'Thu', late_night: 3, total: 5 },
  { name: 'Fri', late_night: 4, total: 6 },
  { name: 'Sat', late_night: 5, total: 7 },
  { name: 'Sun', late_night: 2, total: 3 },
];

export default function Analytics() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold text-slate-800">Analytics</h1>
            
            <div className="card-panel">
                <h3 className="font-semibold text-slate-700 mb-6">7-Day Order Volume</h3>
                <div style={{ width: '100%', height: 350 }}>
                    <ResponsiveContainer>
                        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorLateNight" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" stroke="#cbd5e1" fontSize={12}/>
                            <YAxis stroke="#cbd5e1" fontSize={12}/>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0"/>
                            <RTC />
                            <Area type="monotone" dataKey="total" stroke="#94a3b8" fillOpacity={1} fill="rgba(148, 163, 184, 0.2)" />
                            <Area type="monotone" dataKey="late_night" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorLateNight)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
