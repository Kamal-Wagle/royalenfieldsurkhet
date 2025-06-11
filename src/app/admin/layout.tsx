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
import { Coffee, Package, Users, Plus, Home,  UserCog, ChevronRight, ChevronLeft } from "lucide-react"
import { cn } from '@/lib/utils';
import Logout from '@/components/Logout';

const sidebarItems = [
    { label: "Dashboard", href: "/admin", icon: Home },
    { label: "Notice", href: "/admin/notice", icon: Package, group: "notice" },
    { label: "Add Notice Item", href: "/admin/notice/new", icon: Plus, group: "notice" },
    { label: "Result", href: "/admin/result", icon: Package, group: "result" },
    { label: "Add Result Item", href: "/admin/result/new", icon: Plus, group: "notice" },
    { label: "Staff", href: "/admin/staff", icon: Users, group: "staff" },
    { label: "Add Staff", href: "/admin/staff/new", icon: Plus, group: "staff" },
    { label: "User Management", href: "/admin/user", icon: UserCog, group: "users" },
    { label: "Add User", href: "/admin/user/new", icon: Plus, group: "users" },
    { label: "Gallery", href: "/admin/gallery", icon: Plus },
    { label: "Add Gallery Images", href: "/admin/gallery/new", icon: Plus, group: "gallery" },
    { label: "Add Gallery Album", href: "/admin/album/new", icon: Plus, group: "gallery" },
    { label: "Album", href: "/admin/album", icon: Plus, group: "gallery" },
    { label: "News", href: "/admin/news", icon: Plus, group: "news" },
    { label: "Add New News", href: "/admin/news/new", icon: Plus, group: "news" },
    { label: " Event", href: "/admin/event", icon: Plus, group: "event" },
    { label: "Add New Event", href: "/admin/event/new", icon: Plus, group: "event" },
  ];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  

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
                <p className="text-xs text-muted-foreground capitalize">admin</p>
              </div>
            </div> */}


           
            {/* View Website Url */}
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
          <h2 className="font-semibold">Abc School Nepal</h2>
              
               <Logout/>
             
        </header>
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
