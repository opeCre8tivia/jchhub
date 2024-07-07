import { Button } from "antd"

type Props = {
  title: string
  loading?: boolean
  onClick: () => void
}

const CustomButton = ({ title, loading, onClick }: Props) => {
  return (
    <Button
      type="primary"
      style={{ width: "100%", height: 40 }}
      onClick={onClick}
      loading={loading}
    >
      {title}
    </Button>
  )
}
export default CustomButton
