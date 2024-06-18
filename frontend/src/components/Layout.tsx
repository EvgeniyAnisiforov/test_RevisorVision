import { Link, Outlet } from "react-router-dom";
import {FC} from 'react'

const Layout: FC<any> = () => {
    return (
        <>
            <header>
                <Link to='/'>Каталог</Link>
                <Link to='/favourites'>Избранное</Link>
            </header>

            <Outlet/>
        </>
    )
}

export {Layout}