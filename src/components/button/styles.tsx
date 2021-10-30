import styled from "styled-components"

export type StyledButtonProps = {
  /**
   * the color of the button. defaults to lightGray
   */
  color?: keyof typeof colorMap
}
/** the color options for the button */
const colorMap = {
  lightGray: { notPressed: "#5B5A5E", pressed: "#9D9D9E" },
  darkGray: { notPressed: "#383B40", pressed: "#5B5A5E" },
  orange: { notPressed: "#FF9D0A", pressed: "#C97C00" },
}

export const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ color }) => colorMap[color || "lightGray"].notPressed};
  border: none;
  &.pressed {
    background-color: ${({ color }) => colorMap[color || "lightGray"].pressed};
  }
`

export default StyledButton
