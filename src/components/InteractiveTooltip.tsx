import { useState, ReactNode } from 'react'

interface TooltipProps {
  children: ReactNode
  content: string
  position?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
  className?: string
}

export function InteractiveTooltip({ 
  children, 
  content, 
  position = 'top', 
  delay = 300,
  className = ''
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [timeoutId, setTimeoutId] = useState<number | null>(null)

  const showTooltip = () => {
    const id = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    setTimeoutId(id)
  }

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      setTimeoutId(null)
    }
    setIsVisible(false)
  }

  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2'
      case 'bottom':
        return 'top-full left-1/2 transform -translate-x-1/2 mt-2'
      case 'left':
        return 'right-full top-1/2 transform -translate-y-1/2 mr-2'
      case 'right':
        return 'left-full top-1/2 transform -translate-y-1/2 ml-2'
      default:
        return 'bottom-full left-1/2 transform -translate-x-1/2 mb-2'
    }
  }

  const getArrowClasses = () => {
    switch (position) {
      case 'top':
        return 'top-full left-1/2 transform -translate-x-1/2 border-t-primary-500'
      case 'bottom':
        return 'bottom-full left-1/2 transform -translate-x-1/2 border-b-primary-500'
      case 'left':
        return 'left-full top-1/2 transform -translate-y-1/2 border-l-primary-500'
      case 'right':
        return 'right-full top-1/2 transform -translate-y-1/2 border-r-primary-500'
      default:
        return 'top-full left-1/2 transform -translate-x-1/2 border-t-primary-500'
    }
  }

  return (
    <div 
      className={`relative inline-block ${className}`}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
    >
      {children}
      
       {isVisible && (
         <div className={`absolute z-50 ${getPositionClasses()}`}>
           <div className="bg-primary-500 text-white text-xs px-3 py-2 rounded-lg shadow-lg whitespace-nowrap max-w-xs">
             {content}
             {/* Arrow */}
             <div className={`absolute w-0 h-0 border-4 border-transparent ${getArrowClasses()}`}></div>
           </div>
         </div>
       )}
    </div>
  )
}
