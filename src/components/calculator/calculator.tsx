import { useEffect, useState } from "react"
import { ButtonTray } from "../ButtonTray"
import {
  ButtonType,
  ButtonValue,
  OperationValue,
} from "../ButtonTray/buttonDefinitions"
import { DisplayScreen } from "../displayScreen"
import CalculatorWrapper from "./styles"
export type ButtonTrayOnClickFunction = {
  type: ButtonType
  value: ButtonValue
}
export type CalculatorProps = {}
export type CurrentValue = {
  positive: boolean
  integerValue: string
  hasDecimal: boolean
  decimalValue: string
}
const addValues = (value1: CurrentValue, value2: CurrentValue): Number => {
  //@ts-ignore
  return currentValueToNumber(value1) + currentValueToNumber(value2)
}
const subtractValues = (value1: CurrentValue, value2: CurrentValue): Number => {
  //@ts-ignore
  return currentValueToNumber(value1) - currentValueToNumber(value2)
}
const multiplyValues = (value1: CurrentValue, value2: CurrentValue): Number => {
  //@ts-ignore
  return currentValueToNumber(value1) * currentValueToNumber(value2)
}
const divideValues = (value1: CurrentValue, value2: CurrentValue): Number => {
  //@ts-ignore
  return currentValueToNumber(value1) / currentValueToNumber(value2)
}
const currentValueToNumber = (currentValue: CurrentValue): Number => {
  return Number(
    (currentValue.positive ? "+0" : "-0") +
      currentValue.integerValue +
      "." +
      currentValue.decimalValue +
      "0"
  )
}
const numberToCurrentValue = (number: number): CurrentValue => {
  const string = Number(number).toString()
  const value: CurrentValue = initialCurrentValue()
  if (string[0] === "-") {
    value.positive = false
  }
  let withoutSign =
    string[0] === "-" || string[0] === "+" ? string.slice(1) : string
  const [integer, decimal] = withoutSign.split(".")
  value.hasDecimal = !!decimal
  value.decimalValue = decimal ? decimal : value.decimalValue
  value.integerValue = integer
  return value
}
const toPercent = (currentValue: CurrentValue): CurrentValue => {
  const newIntegerValue =
    currentValue.integerValue.length > 2
      ? currentValue.integerValue.slice(0, -2)
      : "0"
  const newDecimalValue =
    (currentValue.integerValue.length > 2
      ? currentValue.integerValue.slice(-2)
      : currentValue.integerValue.padStart(2, "0")) + currentValue.decimalValue
  return {
    ...currentValue,
    hasDecimal: true,
    integerValue: newIntegerValue,
    decimalValue: newDecimalValue,
  }
}
const initialCurrentValue: () => CurrentValue = () => ({
  positive: true,
  integerValue: "",
  hasDecimal: false,
  decimalValue: "",
})

const handleAddSubtractMultiplyDivide = (
  operator: Omit<OperationValue, "=">,
  currentValue: CurrentValue,
  lastValue: CurrentValue | null
): CurrentValue => {
  switch (operator) {
    case "+":
      return numberToCurrentValue(
        addValues(lastValue || initialCurrentValue(), currentValue) as number
      )
    case "-":
      return numberToCurrentValue(
        subtractValues(
          lastValue || initialCurrentValue(),
          currentValue
        ) as number
      )
    case "÷":
      return numberToCurrentValue(
        divideValues(lastValue || initialCurrentValue(), currentValue) as number
      )
    default:
      return numberToCurrentValue(
        multiplyValues(
          lastValue || initialCurrentValue(),
          currentValue
        ) as number
      )
  }
}
const handleOperation = (
  props: ButtonTrayOnClickFunction,
  setCurrentValue: (val: CurrentValue) => void,
  currentValue: CurrentValue,
  lastValue: null | (CurrentValue & { operator: string }),
  setLastValue: (val: null | (CurrentValue & { operator: string })) => void
) => {
  switch (props.value) {
    case "=":
      if (lastValue?.operator) {
        setCurrentValue(
          handleAddSubtractMultiplyDivide(
            lastValue?.operator,
            currentValue,
            lastValue
          )
        )
      }

      setLastValue(null)
      break
    default:
      if (lastValue?.operator) {
        setLastValue({
          ...handleAddSubtractMultiplyDivide(
            lastValue.operator,
            currentValue,
            lastValue
          ),
          operator: props.value as string,
        })
      } else {
        setLastValue({
          ...currentValue,
          operator: props.value as string,
        })
      }
      setCurrentValue(initialCurrentValue())
      break
  }
}
export const Calculator: React.FC<CalculatorProps> = () => {
  const [currentValue, setCurrentValue] =
    useState<CurrentValue>(initialCurrentValue)
  const [displayScreenValue, setDisplayScreenValue] = useState<string | null>(
    null
  )
  const [lastValue, setLastValue] = useState<
    null | (CurrentValue & { operator: string })
  >(null)
  useEffect(() => {
    setDisplayScreenValue(currentValueToNumber(currentValue).toString())
  }, [currentValue])

  const buttonTrayClickHandler = (props: ButtonTrayOnClickFunction) => {
    switch (props.type) {
      case "number":
        setCurrentValue({
          ...currentValue,
          integerValue: currentValue.integerValue + props.value,
        })
        break
      case "clear":
        setCurrentValue(initialCurrentValue)
        break
      case "operation":
        handleOperation(
          props,
          setCurrentValue,
          currentValue,
          lastValue,
          setLastValue
        )
        break
      case "modifier":
        switch (props.value) {
          case "+/-":
            setCurrentValue({
              ...currentValue,
              positive: !currentValue.positive,
            })
            break
          case "%":
            setCurrentValue(toPercent(currentValue))
            break
          default:
            throw new Error("invalid modifier type")
        }
        break
      case "decimal":
        break
      default:
        throw new Error("invalid button type")
    }
  }
  return (
    <CalculatorWrapper>
      <DisplayScreen value={displayScreenValue || "0"} />
      <ButtonTray onClick={buttonTrayClickHandler}></ButtonTray>
    </CalculatorWrapper>
  )
}
export default Calculator
