import { FC } from "react"
import style from "./WrapperPhoto.module.css"
import { FaStar } from "react-icons/fa"
import { PropsTypeWrapperPhoto } from "../../Type"
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { setPhoto } from "../../store/slice/ModalWindowPhoto-slice"
import {
  removeFavouritesPhoto,
  setFavouritesPhoto,
} from "../../store/slice/FavouritesPhoto-slice"
import HoverText from "./HoverText"

const WrapperPhoto: FC<PropsTypeWrapperPhoto> = ({ url, text }) => {
  const dispatch = useAppDispatch()
  const activeStar = useAppSelector((state) => state.FavouritesPhoto.value)
  const isActive = activeStar.some((el) => el.url === url)

  const handlerClickFavourites = () => {
    if (isActive) {
      dispatch(removeFavouritesPhoto({ url: url, text: text }))
    } else {
      dispatch(setFavouritesPhoto({ url: url, text: text }))
    }
  }

  return (
    <>
      <div className={style["WrapperPhoto__containerPhoto"]}>
        <div className={style["WrapperPhoto__circleStar"]}>
          <FaStar
            onClick={handlerClickFavourites}
            className={
              !isActive
                ? style["WrapperPhoto__Star"]
                : style["WrapperPhoto__Star--active"]
            }
          />
        </div>
        <HoverText text={text}>
          <img
            className={style["WrapperPhoto__img"]}
            onClick={() => dispatch(setPhoto(url))}
            src={url}
          />
        </HoverText>
      </div>
    </>
  )
}
export default WrapperPhoto
