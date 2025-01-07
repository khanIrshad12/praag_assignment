"use client"
import { useState, useContext, createContext } from 'react'

const SidebarContext = createContext(false)

export function SidebarProvider({ children }) {
  const [desktopOpen, setDesktopOpen] = useState(true)

  return (
    <SidebarContext.Provider value={{ desktopOpen, setDesktopOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = useContext(SidebarContext)
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}
