import buttonCss from "./Button.module.css"

export default function Button ({children, onEventFunction, className, secondary, smallBtn}) {

  const isTabIndex = typeof onEventFunction === 'function' ? {tabIndex: 0} : {}
  const isClassName = typeof className !== 'undefined'
  const isSmall = typeof smallBtn !== 'undefined' && smallBtn === true ? {smallbtn: "true"} : {smallbtn: "false"}
  const isSecondary = typeof secondary !== 'undefined' && secondary === true ? {secondary: "true"} : {secondary: "false"}

  return (
    <span 
      onClick={onEventFunction} 
      onKeyDown={(e) => e.code === "Enter" && onEventFunction()}
      {...isTabIndex}
      className={`${buttonCss.button} ${isClassName && className}`} 
      {...isSmall}
      {...isSecondary}
    >{children}</span>
  )
}