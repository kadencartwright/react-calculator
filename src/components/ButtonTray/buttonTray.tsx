import React from "react"
import { ButtonTrayWrapper } from "./styles"
import buttons, { ButtonValue } from "./buttonDefinitions"
import { Button } from "../button"
import { ButtonTrayOnClickFunction } from "../calculator"

export type ButtonTrayProps = {
  onClick: (onClickProps: ButtonTrayOnClickFunction) => void
}
export const ButtonTray: React.FC<ButtonTrayProps> = (props) => {
  return (
    <ButtonTrayWrapper>
      {buttons.map(({ color, value, gridArea, type }) => (
        <div key={value} style={{ gridArea, height: "100%" }}>
          <Button
            value={value}
            color={color}
            onClick={() => props.onClick({ type, value: value as ButtonValue })}
          >
            {value}
          </Button>
        </div>
      ))}
    </ButtonTrayWrapper>
  )
}
