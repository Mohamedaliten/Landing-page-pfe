'use client'; // Mark this component as a Client Component

import React from 'react';
import { Shield, Lock, Key } from 'lucide-react';
import { Card } from '@/components/ui/card';

const SecuritySettings = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Shield className="h-5 w-5 text-gray-600" />
        <h2 className="text-lg font-semibold">Security Settings</h2>
      </div>

      <div className="space-y-6">
        {/* Two-Factor Authentication Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Lock className="w-5 h-5 text-gray-500" />
            <div>
              <span className="text-gray-700">Two-Factor Authentication</span>
              <p className="text-sm text-gray-500">Add an extra layer of security</p>
            </div>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
          </label>
        </div>

        {/* Password Section */}
        <div>
          <div className="flex items-center space-x-3">
            <Key className="w-5 h-5 text-gray-500" />
            <div>
              <span className="text-gray-700">Password</span>
              <p className="text-sm text-gray-500">Last changed 3 months ago</p>
            </div>
          </div>
          <button className="mt-2 text-orange-500 hover:text-orange-600">
            Change Password
          </button>
        </div>
      </div>
    </Card>
  );
};

export default SecuritySettings;