'use client'; // Mark this component as a Client Component

import React from 'react';
import { User } from 'lucide-react';
import { Card } from '../../components/ui/card';

const ProfileSettings = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center space-x-3 mb-6">
        <User className="h-5 w-5 text-gray-600" />
        <h2 className="text-lg font-semibold">Profile Settings</h2>
      </div>

      <div className="space-y-4">
        {/* Full Name Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            defaultValue="Hakim Yakub"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            defaultValue="hakim.yakub@example.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Phone Number Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            defaultValue="+1234567890"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Save Button */}
        <div className="pt-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </Card>
  );
};

export default ProfileSettings;