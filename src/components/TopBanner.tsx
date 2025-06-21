import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "~/components/ui/button"

export function TopBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-sm font-medium">
              🎉 <span className="font-bold">LIMITED TIME:</span> Get 50% OFF Pro Features
            </div>
            <div className="hidden md:block text-xs opacity-90">
              Advanced meal plans, custom recipes & progress tracking
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button 
              variant="secondary" 
              size="sm"
              className="bg-white text-blue-600 hover:bg-gray-100 font-semibold"
            >
              Upgrade Now
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-200 transition-colors"
              aria-label="Close banner"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}