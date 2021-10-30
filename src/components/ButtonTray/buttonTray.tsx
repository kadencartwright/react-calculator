import React from "react"
import { ButtonTrayWrapper } from "./styles"
import buttons from "./buttonDefinitions"
import { Button } from "../button"

export type ButtonTrayProps = {}
export const ButtonTray: React.FC<ButtonTrayProps> = (props) => {
  return (
    <ButtonTrayWrapper>
      {buttons.map(({ color, value, gridArea }) => (
        <div key={value} style={{ gridArea, height: "100px" }}>
          {console.log({ color, value })}
          <Button color={color}>{value}</Button>
        </div>
      ))}
    </ButtonTrayWrapper>
  )
}
