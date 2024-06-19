import { FC } from "react"
import style from "./WrapperPhotoFavourites.module.css"
import { FaStar } from "react-icons/fa"
import { PropsTypeWrapperPhoto } from "../../Type"
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { setPhoto } from "../../store/slice/ModalWindowPhoto-slice"
import {
  removeFavouritesPhoto,
  setFavouritesPhoto,
} from "../../store/slice/FavouritesPhoto-slice"

const WrapperPhotoFavourites: FC<PropsTypeWrapperPhoto> = ({ url, text }) => {
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
      <div className={style["WrapperPhotoFavourites__containerPhoto"]}>
        <div className={style["WrapperPhotoFavourites__circleStar"]}>
          <FaStar
            onClick={handlerClickFavourites}
            className={
              !isActive
                ? style["WrapperPhotoFavourites__Star"]
                : style["WrapperPhotoFavourites__Star--active"]
            }
          />
        </div>
        <img
          className={style["WrapperPhotoFavourites__img"]}
          onClick={() => dispatch(setPhoto(url))}
          src={url}
        />
        <div className={style["WrapperPhotoFavourites__containerText"]}><p>{text}</p></div>
      </div>
    </>
  )
}
export default WrapperPhotoFavourites
