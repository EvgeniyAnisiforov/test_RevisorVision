import { FC } from "react"
import style from "./ModalWindowPhoto.module.css"
import { RxCross1 } from "react-icons/rx"
import { TypePropsModalWindowPhoto } from "../../../Type"
import { useAppDispatch } from "../../hook"
import { setPhoto } from "../../store/ModalWindowPhoto-slice"

const ModalPhoto: FC<TypePropsModalWindowPhoto> = ({ id, close }) => {
    const dispatch = useAppDispatch()
    const handlerClose = () => {
        dispatch(setPhoto(''))
        close()
    }
  return (
    <div
      onClick={handlerClose}
      className={style["ModalWindowPhoto__background"]}
    >
      <RxCross1 onClick={handlerClose} className={style["ModalWindowPhoto__cross"]} />
      <img
        onClick={(e) => e.stopPropagation()}
        className={style["ModalWindowPhoto__photo"]}
        src={id}
      />
    </div>
  )
}
export default ModalPhoto
