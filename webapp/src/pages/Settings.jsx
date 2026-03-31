import React from 'react';

export default function Settings() {
    return (
        <div className="space-y-6 max-w-2xl">
            <h1 className="text-2xl font-bold text-slate-800">Settings</h1>
            
            <div className="card-panel space-y-6">
                <div>
                    <h3 className="font-bold text-sm text-slate-800 mb-2">User Profile</h3>
                    <div className="flex gap-4">
                        <input className="border border-border rounded-md px-3 py-2 w-full text-sm" defaultValue="Guest User" />
                        <button className="btn-secondary">Save</button>
                    </div>
                </div>

                <div className="border-t border-border pt-6">
                    <h3 className="font-bold text-sm text-slate-800 mb-4">Notifications & Alerts</h3>
                    <label className="flex items-center gap-3 mb-3">
                        <input type="checkbox" className="w-4 h-4 accent-indigo-600" defaultChecked />
                        <span className="text-sm">Push Alerts for High Risk Orders</span>
                    </label>
                    <label className="flex items-center gap-3">
                        <input type="checkbox" className="w-4 h-4 accent-indigo-600" defaultChecked />
                        <span className="text-sm">Decision Delay (Pause before confirming orders)</span>
                    </label>
                </div>

                <div className="border-t border-border pt-6 flex justify-between items-center">
                    <div>
                        <h3 className="font-bold text-sm text-slate-800">Data Management</h3>
                        <p className="text-xs text-slate-500">Download your raw JSON behavioral data.</p>
                    </div>
                    <button className="btn-secondary text-xs">Export Data</button>
                </div>
            </div>
        </div>
    );
}
