import { useState } from "react"
import StyledButton from "./styles"
export type ButtonProps = {}
export const Button: React.FC<ButtonProps> = (props) => {
  const [pressed, setPressed] = useState(false)
  return (
    <StyledButton
      className={pressed ? "pressed" : ""}
      onMouseUp={() => setPressed(false)}
      onMouseDown={() => setPressed(true)}
    ></StyledButton>
  )
}

export default Button
