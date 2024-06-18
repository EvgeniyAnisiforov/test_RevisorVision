import { NavLink, Outlet } from "react-router-dom";
import {FC} from 'react'
import style from './Layout.module.css'

const Layout: FC<any> = () => {
    return (
        <>
            <header className={style["Layout__containerMenu--flex"]}>
                <NavLink className={style["Layout__itemMenu"]} to='/'><h2>Каталог</h2></NavLink>
                <NavLink className={style["Layout__itemMenu"]} to='/favourites'><h2>Избранное</h2></NavLink>
            </header>

            <Outlet/>
        </>
    )
}

export {Layout}