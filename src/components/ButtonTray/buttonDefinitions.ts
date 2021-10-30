import { StyledButtonProps } from "../button/styles"

const darkGrayButtons = [
  { value: "AC", gridArea: "AC" },
  { value: "+/-", gridArea: "plusMinus" },
  { value: "%", gridArea: "percent" },
]
const lightGrayButtons = [
  { value: ".", gridArea: "period" },
  { value: "0", gridArea: "zero" },
  { value: "1", gridArea: "one" },
  { value: "2", gridArea: "two" },
  { value: "3", gridArea: "three" },
  { value: "4", gridArea: "four" },
  { value: "5", gridArea: "five" },
  { value: "6", gridArea: "six" },
  { value: "7", gridArea: "seven" },
  { value: "8", gridArea: "eight" },
  { value: "9", gridArea: "nine" },
]
const orangeButtons = [
  { value: "+", gridArea: "add" },
  { value: "-", gridArea: "subtract" },
  { value: "=", gridArea: "equal" },
  { value: "÷", gridArea: "divide" },
  { value: "×", gridArea: "multiply" },
]

const buttonsGroupedByColor = [
  { color: "orange", values: orangeButtons },
  { color: "lightGray", values: lightGrayButtons },
  { color: "darkGray", values: darkGrayButtons },
]
const buttons = buttonsGroupedByColor.flatMap(({ color, values }) => [
  ...values.map(({ value, gridArea }) => ({
    value,
    color,
    gridArea,
  })),
])
export default buttons as {
  color: StyledButtonProps["color"]
  value: string
  gridArea: string
}[]
