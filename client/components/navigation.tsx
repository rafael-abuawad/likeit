"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, Search, PlusSquare, Heart, Wallet } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/search", icon: Search, label: "Search" },
    { href: "/create", icon: PlusSquare, label: "Create" },
    { href: "/activity", icon: Heart, label: "Activity" },
    { href: "/wallet", icon: Wallet, label: "Wallet" },
  ]

  return (
      <div className="fixed bottom-2 md:bottom-6 left-0 right-0 z-50 px-4 flex justify-center">
        <div className="bg-background/80 backdrop-blur-lg border rounded-lg shadow-lg flex items-center justify-around p-1 w-full max-w-md relative">
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            const isCreate = item.href === "/create"

            if (isCreate) {
              return (
                <Link key={item.href} href={item.href} className="relative z-10">
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <Button
                      size="icon"
                      className="h-14 w-14 shadow-md text-primary-foreground"
                    >
                      <Icon className="h-6 w-6 size-6" />
                      <span className="sr-only">{item.label}</span>
                    </Button>
                  </div>
                  <div className="h-12 w-12"></div> {/* Spacer */}
                </Link>
              )
            }

            return (
              <Link key={item.href} href={item.href} className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn(
                    "h-12 w-12 flex items-center justify-center relative",
                    isActive && "text-primary",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{item.label}</span>
                </Button>
              </Link>
            )
          })}
        </div>
      </div>
  )
}
