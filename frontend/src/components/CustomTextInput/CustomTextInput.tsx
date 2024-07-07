import { Input } from "antd"
import { colors } from "../../constants/colors"

type Props = {
  placeholder: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value?: string
  error?: string
}

const CustomTextInput = ({ placeholder, onChange, value, error }: Props) => {
  return (
    <div style={{ width: "100%" }}>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        style={{ height: "40px", width: "100%" }}
      />
      <div
        style={{
          width: "100%",
          fontSize: 11,
          color: colors.danger,
          textAlign: "left"
        }}
      >
        {error}
      </div>
    </div>
  )
}

export default CustomTextInput
