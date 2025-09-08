"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "@/components/sidebar/Sidebar";

export default function ResponsiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideSidebar = pathname.startsWith("/projects");

  return (
    <div
      className={`min-h-screen ${
        hideSidebar ? "flex flex-col" : "grid grid-cols-2"
      }`}
    >
      {!hideSidebar && (
        <div className="sticky top-0 h-screen py-20 pl-40">
          <Sidebar />
        </div>
      )}
      <div
        className={`${
          hideSidebar
            ? "px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 md:py-5"
            : "flex-1 overflow-y-auto pr-40 py-20"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
