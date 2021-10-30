import { StyledButtonProps } from "../button/styles"
export type ButtonDefinition = {
  value: string
  gridArea: string
  type: ButtonType
}
export type ButtonType =
  | "modifier"
  | "clear"
  | "decimal"
  | "number"
  | "operation"
export type ModifierValue = "+/-" | "%"
export type ClearValue = "AC"
export type DecimalValue = "."
export type NumberValue =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
export type OperationValue = "+" | "-" | "=" | "×" | "÷"
export type ButtonValue =
  | NumberValue
  | DecimalValue
  | ClearValue
  | ModifierValue
  | OperationValue
const darkGrayButtons: ButtonDefinition[] = [
  { value: "AC", gridArea: "AC", type: "clear" },
  { value: "+/-", gridArea: "plusMinus", type: "modifier" },
  { value: "%", gridArea: "percent", type: "modifier" },
]
const lightGrayButtons: ButtonDefinition[] = [
  { value: ".", gridArea: "period", type: "decimal" },
  { value: "0", gridArea: "zero", type: "number" },
  { value: "1", gridArea: "one", type: "number" },
  { value: "2", gridArea: "two", type: "number" },
  { value: "3", gridArea: "three", type: "number" },
  { value: "4", gridArea: "four", type: "number" },
  { value: "5", gridArea: "five", type: "number" },
  { value: "6", gridArea: "six", type: "number" },
  { value: "7", gridArea: "seven", type: "number" },
  { value: "8", gridArea: "eight", type: "number" },
  { value: "9", gridArea: "nine", type: "number" },
]
const orangeButtons: ButtonDefinition[] = [
  { value: "+", gridArea: "add", type: "operation" },
  { value: "-", gridArea: "subtract", type: "operation" },
  { value: "=", gridArea: "equal", type: "operation" },
  { value: "÷", gridArea: "divide", type: "operation" },
  { value: "×", gridArea: "multiply", type: "operation" },
]

const buttonsGroupedByColor = [
  { color: "orange", values: orangeButtons },
  { color: "lightGray", values: lightGrayButtons },
  { color: "darkGray", values: darkGrayButtons },
]
const buttons = buttonsGroupedByColor.flatMap(({ color, values }) => [
  ...values.map(({ value, gridArea, type }) => ({
    value,
    color,
    gridArea,
    type,
  })),
])
export default buttons as ({
  color: StyledButtonProps["color"]
  value: ButtonValue
  gridArea: string
} & ButtonDefinition)[]
