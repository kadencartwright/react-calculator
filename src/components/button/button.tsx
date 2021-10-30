import { useState } from "react"
import StyledButton, { StyledButtonProps } from "./styles"
export type ButtonProps = {} & StyledButtonProps
export const Button: React.FC<ButtonProps> = (props) => {
  const [pressed, setPressed] = useState(false)
  return (
    <StyledButton
      {...props}
      className={pressed ? "pressed" : ""}
      onMouseUp={() => setPressed(false)}
      onMouseDown={() => setPressed(true)}
    ></StyledButton>
  )
}

export default Button
