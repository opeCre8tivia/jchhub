import { Input } from "antd"
import { colors } from "../../constants/colors"

type Props = {
  placeholder: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  value?: string
  error?: string
}

const PasswordInput = ({ placeholder, onChange, value, error }: Props) => {
  return (
    <div style={{ width: "100%" }}>
      <Input.Password
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        style={{ height: "40px", width: "100%" }}
        //    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
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

export default PasswordInput
