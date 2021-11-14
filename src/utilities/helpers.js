import { useState, useEffect } from 'react'

export const useResponsive = () => {
  const [device, setDevice] = useState('mobile')

  const handleResize = () => {
    if (window.innerWidth > 768) setDevice('desktop')
    else if (window.innerWidth > 576) setDevice('tablet')
    else setDevice('mobile')
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return device
}

export const formatDate = (date) => {
  const newDate = new Date(date)
  return newDate.toLocaleDateString('zh-TW')
}

export const formatDateIncludeTime = (date) => {
  const newDate = new Date(date)
  return newDate.toLocaleString('zh-TW', { hour12: false })
}

export const switchTypeToLabel = (label) => {
  switch (label) {
    case 'ScenicSpot':
      return '探索景點'
    case 'Activity':
      return '節慶活動'
    case 'Restaurant':
      return '品嚐美食'
    default:
      return null
  }
}
