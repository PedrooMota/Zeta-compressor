import React from "react"
import { Header } from "@/components/header-dashboard";

export default function AdminLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex min-h-screen w-full flex-col bg-white dark:bg-slate-950">
      <Header />
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {children}
      </main>
    </div>
  )
}
