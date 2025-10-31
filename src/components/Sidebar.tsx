
"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const imgIcon = "https://www.figma.com/api/mcp/asset/96e712bc-c040-47a1-9aef-f0ba5396a4f9";
const img = "https://www.figma.com/api/mcp/asset/49b908c8-a5c6-4c1b-91a1-12aa7e7d2bed";
const img1 = "https://www.figma.com/api/mcp/asset/76e350c0-4284-4704-8010-1d71b557ad63";
const img2 = "https://www.figma.com/api/mcp/asset/b720063b-b6bb-4575-8cf0-107b557bea42";
const img3 = "https://www.figma.com/api/mcp/asset/aad64348-7a63-432e-960c-4e0e90eb9868";
const img4 = "https://www.figma.com/api/mcp/asset/027f2350-b12b-433b-8301-86fd8eb22024";
const imgIcon1 = "https://www.figma.com/api/mcp/asset/f7ee95fc-32e7-46b9-9541-ce4ac42956d4";
const imgIcon2 = "https://www.figma.com/api/mcp/asset/4b62430e-ce27-4d3d-af35-e0cdedba2d62";

const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    { href: '/tickets', label: 'Tickets', icon: img },
    { href: '/reports', label: 'Vehicle', icon: img1 },
    { href: '/', label: 'Reports', icon: img2 },
    { href: '/admin', label: 'User Management', icon: img3 },
    { href: '/settings', label: 'Settings', icon: img4 },
  ];

  return (
    <div className="border-r border-gray-200 w-64 bg-gray-50 flex flex-col">
      <div className="h-16 flex items-center px-4 border-b border-gray-200">
        <img alt="logo" className="w-7 h-7 mr-3" src={imgIcon} />
        <div>
          <p className="font-semibold text-sm">Digital Weight</p>
          <p className="text-xs text-gray-500">Industrial Weighing System</p>
        </div>
      </div>
      <nav className="flex-grow p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>
                <div
                  className={`flex items-center p-2 rounded-lg cursor-pointer ${
                    pathname === item.href ? 'bg-gray-900 text-white' : 'hover:bg-gray-200'
                  }`}
                >
                  <img alt={item.label} className="w-4 h-4 mr-3" src={item.icon} />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center mb-3">
          <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center mr-3">
            <img alt="user icon" className="w-4 h-4" src={imgIcon1} />
          </div>
          <div>
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-gray-500">Administrator</p>
          </div>
        </div>
        <button className="w-full flex items-center justify-center p-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-100">
          <img alt="sign out icon" className="w-4 h-4 mr-2" src={imgIcon2} />
          <span className="text-sm font-medium">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
