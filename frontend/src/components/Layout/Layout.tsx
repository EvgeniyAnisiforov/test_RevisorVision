import { NavLink, Outlet } from "react-router-dom"
import { FC, useState, useEffect } from "react"
import style from "./Layout.module.css"
import ModaWindowPhoto from "./ModalWindow/ModalWindowPhoto"
import { useAppSelector } from "../../store/hook"

const Layout: FC<{}> = () => {
  const photoURL = useAppSelector((state) => state.ModalWindowPhoto.value)
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    setVisible(!!photoURL)
  }, [photoURL])
  return (
    <>
      {visible && (
        <ModaWindowPhoto id={photoURL} close={() => setVisible(false)} />
      )}
      <header className={style["Layout__containerMenu--flex"]}>
        <NavLink className={style["Layout__itemMenu"]} to="/">
          <h2>Каталог</h2>
        </NavLink>
        <NavLink className={style["Layout__itemMenu"]} to="/favourites">
          <h2>Избранное</h2>
        </NavLink>
      </header>

      <Outlet />
    </>
  )
}

export { Layout }
