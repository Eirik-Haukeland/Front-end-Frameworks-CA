import buttonCss from "./Button.module.css"

export default function Button ({children, onEventFunction, className, disabled}) {

  const isTabIndex = typeof onEventFunction === 'function' && disabled === false ? {tabIndex: 0} : {}
  const isClassName = typeof className !== 'undefined'

  return (
    <span 
      onClick={onEventFunction} 
      onKeyDown={(e) => e.code === "Enter" && onEventFunction()}
      {...isTabIndex}
      className={`${buttonCss.button} ${isClassName && className}`} 
      disabled={disabled}
    >{children}</span>
  )
}