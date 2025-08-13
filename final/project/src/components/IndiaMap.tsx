import React from 'react';

interface IndiaMapProps {
  onStateClick: (stateId: string) => void;
  selectedState: string | null;
}

const IndiaMap: React.FC<IndiaMapProps> = ({ onStateClick, selectedState }) => {
  const stateClickHandlers = {
    'rajasthan': () => onStateClick('rajasthan'),
    'kerala': () => onStateClick('kerala'),
    'punjab': () => onStateClick('punjab'),
    'tamil-nadu': () => onStateClick('tamil-nadu'),
    'west-bengal': () => onStateClick('west-bengal'),
    'maharashtra': () => onStateClick('maharashtra'),
    'goa': () => onStateClick('goa'),
    'gujarat': () => onStateClick('gujarat'),
    'uttar-pradesh': () => onStateClick('uttar-pradesh'),
    'karnataka': () => onStateClick('karnataka'),
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <svg
        viewBox="0 0 800 600"
        className="w-full h-auto"
        style={{ maxHeight: '500px' }}
      >
        {/* Background */}
        <rect width="800" height="600" fill="#f0f9ff" />
        
        {/* Rajasthan */}
        <path
          d="M150 200 L280 180 L300 220 L320 280 L280 320 L220 340 L160 320 L140 260 Z"
          fill={selectedState === 'rajasthan' ? '#ea580c' : '#fb923c'}
          stroke="#fff"
          strokeWidth="2"
          className="cursor-pointer hover:fill-orange-600 transition-colors"
          onClick={stateClickHandlers.rajasthan}
        />
        <text x="220" y="260" textAnchor="middle" className="text-xs font-medium fill-white pointer-events-none">
          Rajasthan
        </text>

        {/* Gujarat */}
        <path
          d="M140 260 L220 340 L180 380 L120 400 L80 360 L90 320 L110 280 Z"
          fill={selectedState === 'gujarat' ? '#ea580c' : '#fb923c'}
          stroke="#fff"
          strokeWidth="2"
          className="cursor-pointer hover:fill-orange-600 transition-colors"
          onClick={stateClickHandlers.gujarat}
        />
        <text x="140" y="340" textAnchor="middle" className="text-xs font-medium fill-white pointer-events-none">
          Gujarat
        </text>

        {/* Maharashtra */}
        <path
          d="M220 340 L280 320 L340 360 L320 420 L260 440 L180 380 Z"
          fill={selectedState === 'maharashtra' ? '#ea580c' : '#fb923c'}
          stroke="#fff"
          strokeWidth="2"
          className="cursor-pointer hover:fill-orange-600 transition-colors"
          onClick={stateClickHandlers.maharashtra}
        />
        <text x="260" y="380" textAnchor="middle" className="text-xs font-medium fill-white pointer-events-none">
          Maharashtra
        </text>

        {/* Goa */}
        <path
          d="M200 440 L240 430 L250 450 L230 470 L200 460 Z"
          fill={selectedState === 'goa' ? '#ea580c' : '#fb923c'}
          stroke="#fff"
          strokeWidth="2"
          className="cursor-pointer hover:fill-orange-600 transition-colors"
          onClick={stateClickHandlers.goa}
        />
        <text x="225" y="450" textAnchor="middle" className="text-xs font-medium fill-white pointer-events-none">
          Goa
        </text>

        {/* Karnataka */}
        <path
          d="M250 450 L340 440 L380 480 L360 520 L300 540 L240 520 Z"
          fill={selectedState === 'karnataka' ? '#ea580c' : '#fb923c'}
          stroke="#fff"
          strokeWidth="2"
          className="cursor-pointer hover:fill-orange-600 transition-colors"
          onClick={stateClickHandlers.karnataka}
        />
        <text x="310" y="490" textAnchor="middle" className="text-xs font-medium fill-white pointer-events-none">
          Karnataka
        </text>

        {/* Kerala */}
        <path
          d="M240 520 L300 540 L290 580 L250 590 L220 570 L230 540 Z"
          fill={selectedState === 'kerala' ? '#ea580c' : '#fb923c'}
          stroke="#fff"
          strokeWidth="2"
          className="cursor-pointer hover:fill-orange-600 transition-colors"
          onClick={stateClickHandlers.kerala}
        />
        <text x="260" y="555" textAnchor="middle" className="text-xs font-medium fill-white pointer-events-none">
          Kerala
        </text>

        {/* Tamil Nadu */}
        <path
          d="M300 540 L380 480 L420 520 L400 560 L360 580 L290 580 Z"
          fill={selectedState === 'tamil-nadu' ? '#ea580c' : '#fb923c'}
          stroke="#fff"
          strokeWidth="2"
          className="cursor-pointer hover:fill-orange-600 transition-colors"
          onClick={stateClickHandlers['tamil-nadu']}
        />
        <text x="360" y="530" textAnchor="middle" className="text-xs font-medium fill-white pointer-events-none">
          Tamil Nadu
        </text>

        {/* Uttar Pradesh */}
        <path
          d="M320 280 L480 260 L500 300 L460 340 L400 350 L340 330 Z"
          fill={selectedState === 'uttar-pradesh' ? '#ea580c' : '#fb923c'}
          stroke="#fff"
          strokeWidth="2"
          className="cursor-pointer hover:fill-orange-600 transition-colors"
          onClick={stateClickHandlers['uttar-pradesh']}
        />
        <text x="420" y="310" textAnchor="middle" className="text-xs font-medium fill-white pointer-events-none">
          Uttar Pradesh
        </text>

        {/* West Bengal */}
        <path
          d="M540 300 L580 290 L600 330 L580 370 L540 380 L520 350 L530 320 Z"
          fill={selectedState === 'west-bengal' ? '#ea580c' : '#fb923c'}
          stroke="#fff"
          strokeWidth="2"
          className="cursor-pointer hover:fill-orange-600 transition-colors"
          onClick={stateClickHandlers['west-bengal']}
        />
        <text x="560" y="335" textAnchor="middle" className="text-xs font-medium fill-white pointer-events-none">
          West Bengal
        </text>

        {/* Punjab */}
        <path
          d="M280 180 L380 160 L400 200 L380 240 L320 260 L300 220 Z"
          fill={selectedState === 'punjab' ? '#ea580c' : '#fb923c'}
          stroke="#fff"
          strokeWidth="2"
          className="cursor-pointer hover:fill-orange-600 transition-colors"
          onClick={stateClickHandlers.punjab}
        />
        <text x="340" y="210" textAnchor="middle" className="text-xs font-medium fill-white pointer-events-none">
          Punjab
        </text>
      </svg>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          Click on any state to explore its rich heritage and culture
        </p>
      </div>
    </div>
  );
};

export default IndiaMap;