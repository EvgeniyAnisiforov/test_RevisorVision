import { FC } from "react"
import bgImg from "../../assets/img_backgroung_default_favorites_page.svg"
import style from "./Favourites.module.css"
import { useAppSelector } from "../../store/hook"
import WrapperPhotoFavourites from "../../components/Favourites/WrapperPhotoFavourites"

const Favourites: FC<{}> = () => {
  const dataPhoto = useAppSelector((state) => state.FavouritesPhoto.value)
  return (
    <>
      {!dataPhoto.length ? (
        <div className={style["Favourites__containerImg"]}>
          <img src={bgImg} />
          <h1>Список избранного пуст</h1>
          <p>Добавляйте изображения, нажимая на звездочки</p>
        </div>
      ) : (
        <div className={style["Favourites__containerFavourites"]}>
          <div className={style["Favourites__favourites"]}>
            {dataPhoto.map((el) => (
              <WrapperPhotoFavourites url={el.url} text={el.text} />
            ))}
          </div>
        </div>
      )}
    </>
  )
}
export { Favourites }
