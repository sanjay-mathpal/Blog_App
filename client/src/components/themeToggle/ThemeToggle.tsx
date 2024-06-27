"use client";
import React, { useEffect } from 'react'
import styles from "./themeToggle.module.css"
import Image from 'next/image'
import { useThemeContext } from '@/context/ThemeContext'

export const ThemeToggle = () => {
  const { theme, setTheme } = useThemeContext()

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    const value = localStorage.getItem("theme")
    if (value && value?.length > 0) {
      setTheme(theme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <div className={styles.container} onClick={toggle} style={theme === "dark" ? {background: "white"} : {background: "#0f172a"}}>
      <Image src="/moon.png" alt='' width={14} height={14} style={{margin:2}} />
      <div className={styles.ball} style={theme === "dark" ? {right: 2, background: "#0f172a"} : {left: 2,background: "white"}}></div>
      <Image src="/sun.png" alt='' width={14} height={14} style={{margin:2}}/>
    </div>
  )
}
