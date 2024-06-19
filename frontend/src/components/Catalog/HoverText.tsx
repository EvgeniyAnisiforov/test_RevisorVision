import {FC} from "react"
import { Tooltip } from "antd"
import {PropsTypeHoverText} from '../../Type'


const HoverText: FC<PropsTypeHoverText> = ({ children, text }) => (

  <Tooltip placement="bottom" title={text}>
    <div>{children}</div>
  </Tooltip>
)

export default HoverText
