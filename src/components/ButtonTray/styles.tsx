import styled from "styled-components"

export const ButtonTrayWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2px;
  width: 400px;
  height: 500px;
  grid-template-areas:
    "AC plusMinus percent divide"
    "seven eight nine multiply"
    "four five six subtract"
    "one two three add"
    "zero zero period equal";
`
