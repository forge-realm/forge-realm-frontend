'use client'

import { useEffect } from 'react'
import { useAppSelector } from '@/lib/hooks'

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useAppSelector((state) => state.theme.theme)

  useEffect(() => {
    // Apply theme to document root
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(theme)
    
    // Or use data attribute
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return <>{children}</>
}