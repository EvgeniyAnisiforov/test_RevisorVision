import { FC } from "react"
import bgImg from "../../assets/img_backgroung_default_favorites_page.svg"
import style from "./Favourites.module.css"

const Favourites: FC<{}> = () => {
  return (
    <div className={style["Favourites__containerImg"]}>
      <img src={bgImg} />
      <h1>Список избранного пуст</h1>
      <p>Добавляйте изображения, нажимая на звездочки</p>
    </div>
  )
}
export { Favourites }
