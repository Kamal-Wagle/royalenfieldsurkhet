// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { Button } from '@/components/ui/button';
// import {
//   LayoutDashboard,
//   Menu,
//   Gift,
//   Users,
//   Settings,
//   LogOut,
//   ChevronLeft,
//   ChevronRight,
//   Coffee
// } from 'lucide-react';
// import { cn } from '@/utils/utils';

// const sidebarItems = [
//   { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
//   { icon: Menu, label: 'Manage Menu', href: '/admin/menu' },
//   { icon: Gift, label: 'Manage Offers', href: '/admin/offers' },
//   { icon: Users, label: 'Manage Users', href: '/admin/users' },
//   { icon: Settings, label: 'Settings', href: '/admin/settings' },
// ];

// export default function AdminLayout({ children }: { children: React.ReactNode }) {
//   const [collapsed, setCollapsed] = useState(false);
//   const pathname = usePathname();

//   const logout = () => {
//     console.log('Logging out...');
//     // Implement your actual logout logic here
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Sidebar */}
//       <div
//         className={cn(
//           'fixed left-0 top-0 h-full bg-card border-r transition-all duration-300',
//           collapsed ? 'w-16' : 'w-64'
//         )}
//       >
//         <div className="flex items-center justify-between p-4 border-b">
//           <h1 className={cn('font-bold', collapsed ? 'hidden' : 'block')}>
//             Admin Panel
//           </h1>
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setCollapsed(!collapsed)}
//           >
//             {collapsed ? <ChevronRight /> : <ChevronLeft />}
//           </Button>
//         </div>

//         <nav className="p-2 space-y-2">
//           {sidebarItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={cn(
//                 'flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors',
//                 pathname === item.href
//                   ? 'bg-primary text-primary-foreground'
//                   : 'hover:bg-accent',
//                 collapsed && 'justify-center'
//               )}
//             >
//               <item.icon className="w-5 h-5" />
//               {!collapsed && <span>{item.label}</span>}
//             </Link>
//           ))}
//         </nav>

//         {/* User & Actions Section */}
//         <div className="absolute bottom-4 left-4 right-4">
//           <div className="flex flex-col gap-2">
//             <div className="flex items-center gap-2 px-3 py-2 text-sm">
//               <div className="flex-1 truncate">
//                 <p className="font-medium">admin</p>
//                 <p className="text-xs text-muted-foreground capitalize">admin</p>
//               </div>
//             </div>
//             <Button variant="outline" className="w-full flex items-center" onClick={logout}>
//               <LogOut className="mr-2 h-4 w-4" />
//               {!collapsed && <span>Logout</span>}
//             </Button>
//             <Button variant="outline" className="w-full flex items-center" asChild>
//               <Link href="/">
//                 <Coffee className="mr-2 h-4 w-4" />
//                 {!collapsed && <span>View Website</span>}
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div
//         className={cn(
//           'min-h-screen transition-all duration-300',
//           collapsed ? 'ml-16' : 'ml-64'
//         )}
//       >
//         <header className="h-16 border-b bg-card flex items-center justify-between px-6">
//           <h2 className="font-semibold">Modern Restaurant</h2>
//           <Button variant="ghost" size="sm" onClick={logout}>
//             <LogOut className="w-4 h-4 mr-2" />
//             Log Out
//           </Button>
//         </header>
//         <main className="p-6">{children}</main>
//       </div>
//     </div>
//   );
// }


///
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Coffee, Package, Tag, Users, Plus, Home, LogOut, UserCog, ChevronRight, ChevronLeft } from "lucide-react"
import { cn } from '@/lib/utils';

const sidebarItems = [
  { label: "Dashboard", href: "/admin", icon: Home },
    { label: "Menu Items", href: "/admin/menu", icon: Package, group: "menu" },
    { label: "Add Menu Item", href: "/admin/menu/new", icon: Plus, group: "menu" },
    { label: "Offers", href: "/admin/offer", icon: Tag, group: "offers" },
    { label: "Add Offer", href: "/admin/offer/new", icon: Plus, group: "offers" },
    { label: "Staff", href: "/admin/staff", icon: Users, group: "staff" },
    { label: "Add Staff", href: "/admin/staff/new", icon: Plus, group: "staff" },
    { label: "User Management", href: "/admin/user", icon: UserCog, group: "users" },
    { label: "Add User", href: "/admin/user/new", icon: Plus, group: "users" },
    { label: "Cloudinary", href: "https://console.cloudinary.com/pm/c-07c9f0310bf57e4e4f2012fbfdab41/media-explorer", icon: Coffee }, // New Cloudinary Item
    { label: "Gallery", href: "/admin/gallery", icon: Plus }, // New Cloudinary Item
  ];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  const logout = () => {

  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div
        className={cn(
          'fixed left-0 top-0 h-full bg-card border-r transition-all duration-300',
          collapsed ? 'w-16' : 'w-64'
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className={cn('font-bold', collapsed ? 'hidden' : 'block')}>
            Admin Panel
          </h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>

        <nav className="p-2 space-y-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors',
                pathname === item.href
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-accent',
                collapsed && 'justify-center'
              )}
            >
              <item.icon className="w-5 h-5" />
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* User & Actions Section */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex flex-col gap-2">
            {/* <div className="flex items-center gap-2 px-3 py-2 text-sm">
              <div className="flex-1 truncate">
                <p className="font-medium">admin</p>
                <p className="text-xs text-muted-foreground capitalize">admin</p>
              </div>
            </div> */}
            <Button variant="outline" className="w-full flex items-center" onClick={logout}>
              <LogOut className="mr-2 h-4 w-4" />
              {!collapsed && <span>Logout</span>}
            </Button>
            <Button variant="outline" className="w-full flex items-center" asChild>
              <Link href="/">
                <Coffee className="mr-2 h-4 w-4" />
                {!collapsed && <span>View Website</span>}
              </Link>
            </Button>
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
          <h2 className="font-semibold">Modern Restaurant</h2>
          <Button variant="ghost" size="sm" onClick={logout}>
            <LogOut className="w-4 h-4 mr-2" />
            Log Out
          </Button>
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
