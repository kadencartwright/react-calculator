import DisplayScreenWrapper from "./styles"
export type DisplayScreenProps = { value?: string }
export const DisplayScreen: React.FC<DisplayScreenProps> = (props) => {
  return (
    <DisplayScreenWrapper>
      <p>{props.value || "0"}</p>
    </DisplayScreenWrapper>
  )
}

export default DisplayScreen
