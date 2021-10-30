import { useState } from "react"
import StyledButton, { StyledButtonProps } from "./styles"
export type ButtonProps = {
  value: string
  onClick: () => void
} & StyledButtonProps
export const Button: React.FC<ButtonProps> = (props) => {
  const [pressed, setPressed] = useState(false)
  return (
    <StyledButton
      {...props}
      className={pressed ? "pressed" : ""}
      onMouseUp={() => setPressed(false)}
      onMouseDown={() => setPressed(true)}
      onClick={props.onClick}
    ></StyledButton>
  )
}

export default Button
