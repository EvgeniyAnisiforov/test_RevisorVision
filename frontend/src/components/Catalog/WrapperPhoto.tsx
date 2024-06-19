import {FC, useState} from 'react'
import style from './WrapperPhoto.module.css'
import { FaStar } from "react-icons/fa";
import {PropsTypeWrapperPhoto} from '../../Type'


const WrapperPhoto: FC<PropsTypeWrapperPhoto> = ({url}) => {
    const [active,setActive] =useState<boolean>(false)
    return <div className={style["WrapperPhoto__containerPhoto"]}><div onClick={()=> setActive(!active)} className={style["WrapperPhoto__circleStar"]}><FaStar className={!active ? style["WrapperPhoto__Star"] : style["WrapperPhoto__Star--active"]}/>
</div><img src={url}/></div>
}
export default WrapperPhoto