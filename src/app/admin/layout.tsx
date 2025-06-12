'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Coffee, Package, Users, Plus, Home, UserCog, ChevronRight, ChevronLeft, Newspaper, Calendar, Image } from "lucide-react"
import { cn } from '@/lib/utils';
import Logout from '@/components/Logout';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const sidebarGroups = [
  {
    label: "Main",
    items: [
      { label: "Dashboard", href: "/admin", icon: Home },
    ]
  },
  {
    label: "Content Management",
    items: [
      { label: "Notice", href: "/admin/notice", icon: Package },
      { label: "Add Notice", href: "/admin/notice/new", icon: Plus },
      { label: "Result", href: "/admin/result", icon: Package },
      { label: "Add Result", href: "/admin/result/new", icon: Plus },
    ]
  },
  {
    label: "Media",
    items: [
      { label: "Gallery", href: "/admin/gallery", icon: Image },
      { label: "Add Images", href: "/admin/gallery/new", icon: Plus },
      { label: "Albums", href: "/admin/album", icon: Image },
      { label: "Add Album", href: "/admin/album/new", icon: Plus },
    ]
  },
  {
    label: "News & Events",
    items: [
      { label: "News", href: "/admin/news", icon: Newspaper },
      { label: "Add News", href: "/admin/news/new", icon: Plus },
      { label: "Events", href: "/admin/event", icon: Calendar },
      { label: "Add Event", href: "/admin/event/new", icon: Plus },
    ]
  },
  {
    label: "User Management",
    items: [
      { label: "Staff", href: "/admin/staff", icon: Users },
      { label: "Add Staff", href: "/admin/staff/new", icon: Plus },
      { label: "Users", href: "/admin/user", icon: UserCog },
      { label: "Add User", href: "/admin/user/new", icon: Plus },
    ]
  },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div
        className={cn(
          'fixed left-0 top-0 h-full bg-card border-r transition-all duration-300 flex flex-col',
          collapsed ? 'w-16' : 'w-64'
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className={cn('font-bold text-lg', collapsed ? 'hidden' : 'block')}>
            Admin Panel
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="hover:bg-accent"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          {sidebarGroups.map((group) => (
            <div key={group.label} className="mb-4">
              {!collapsed && (
                <h2 className="px-4 mb-2 text-sm font-semibold text-muted-foreground">
                  {group.label}
                </h2>
              )}
              <div className="space-y-1">
                {group.items.map((item) => {
                  const isActive = pathname === item.href;
                  const content = (
                    <div
                      className={cn(
                        'flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors',
                        isActive
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-accent',
                        collapsed && 'justify-center'
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      {!collapsed && <span>{item.label}</span>}
                    </div>
                  );

                  return (
                    <TooltipProvider key={item.href}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link href={item.href}>
                            {content}
                          </Link>
                        </TooltipTrigger>
                        {collapsed && (
                          <TooltipContent side="right">
                            <p>{item.label}</p>
                          </TooltipContent>
                        )}
                      </Tooltip>
                    </TooltipProvider>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* User & Actions Section */}
        <div className="p-4 border-t">
          <div className="flex flex-col gap-2">
            <Button variant="outline" className="w-full flex items-center" asChild>
              <Link href="/">
                <Coffee className="mr-2 h-4 w-4" />
                {!collapsed && <span>View Website</span>}
              </Link>
            </Button>
            <Logout />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={cn(
          'min-h-screen transition-all duration-300',
          collapsed ? 'ml-16' : 'ml-64'
        )}
      >
        <header className="h-16 border-b bg-card flex items-center justify-between px-6">
          <h2 className="font-semibold text-lg">Abc School Nepal</h2>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
