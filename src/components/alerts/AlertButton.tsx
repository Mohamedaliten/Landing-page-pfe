'use client';

import { useState } from 'react';
import { AlertTriangle, X, ArrowLeft } from 'lucide-react';

const AlertButton = () => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <>
      {/* Compact Trigger Button */}
      <button 
        className="flex items-center gap-2 px-3 py-1.5 bg-red-100 text-red-600 rounded-md hover:bg-red-200 transition-colors text-sm"
        onClick={() => setShowAlert(true)}
      >
        <AlertTriangle className="h-4 w-4" />
        <span>Alerts</span>
      </button>

      {/* Compact Alert Modal */}
      {showAlert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-xs">
            {/* Header with close arrow */}
            <div className="px-4 py-3 border-b flex justify-between items-center bg-red-50">
              <h2 className="text-lg font-semibold text-red-600">BlazeDefend</h2>
              <button 
                onClick={() => setShowAlert(false)} 
                className="text-red-600 hover:bg-red-100 p-1 rounded-full"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Compact Content */}
            <div className="p-4 space-y-4 text-sm">
              {/* Alert Status */}
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">98%</div>
                <div className="text-xs text-gray-500">converters</div>
              </div>

              {/* Spectral Analysis */}
              <div className="bg-red-50 p-2 rounded">
                <div className="flex justify-between items-center">
                  <span>spectral analysis</span>
                  <span className="text-red-600 font-medium">Smoke NIGH</span>
                </div>
              </div>

              {/* Temperature & Humidity */}
              <div className="grid grid-cols-2 gap-2">
                <div className="border p-2 rounded">
                  <div className="text-xs text-gray-500">Temperature</div>
                  <div className="font-bold">68°C</div>
                </div>
                <div className="border p-2 rounded">
                  <div className="text-xs text-gray-500">Humidity</div>
                  <div className="font-bold">17%</div>
                </div>
              </div>

              {/* Air Quality */}
              <div className="bg-red-50 p-2 rounded">
                <span className="font-medium">Air quality: </span>
                <span className="text-red-600">unhealthy</span>
              </div>

              {/* Alert Details */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Type:</span>
                  <span>Fire alert</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Location:</span>
                  <span>Node 2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Timestamp:</span>
                  <span>{new Date().toLocaleTimeString()}</span>
                </div>
              </div>

              {/* Emergency Button */}
              <button className="w-full bg-red-600 text-white py-2 rounded-md text-sm font-medium hover:bg-red-700 transition-colors">
                Call Emergency
              </button>

              {/* Footer */}
              <div className="text-center text-xs text-gray-500 mt-2">
                <p>Help Tabula</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AlertButton;