"use client";
import { ModeToggle } from "@/components/mode-toggle";
import { ConnectKitButton } from "connectkit";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full bg-gray-50 dark:bg-zinc-900 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">LikeIt</h1>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-2">
            <ConnectKitButton />
            <ModeToggle />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-zinc-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-2 border-t border-gray-200 dark:border-zinc-700">
            <div className="flex flex-col gap-3">
              <ConnectKitButton />
              <ModeToggle />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
