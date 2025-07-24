"use client"

import { useEffect } from 'react'

export function MaterialIconsLoader() {
  useEffect(() => {
    // Material Symbols フォントを動的に読み込み
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional'
    link.rel = 'stylesheet'
    document.head.appendChild(link)

    return () => {
      // クリーンアップ
      document.head.removeChild(link)
    }
  }, [])

  return null
}