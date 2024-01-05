import buttonCss from "./Button.module.css"

export default function Button ({children}) {
  return (
    <span className={buttonCss.button} >{children}</span>
  )
}