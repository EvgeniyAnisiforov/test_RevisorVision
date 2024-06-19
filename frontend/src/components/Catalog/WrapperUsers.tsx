import { FC, useState } from "react"
import style from "./WrapperUsers.module.css"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import WrapperAlbum from "../Catalog/WrapperAlbum"
import { PropsTypeWrapperUsers } from "../../Type"
import { AlbumType } from "../../Type"
import { useAlbumById } from "../../services/album.services"

const WrapperUsers: FC<PropsTypeWrapperUsers> = ({ text, id }) => {
  const [state, setState] = useState<boolean>(true)
  const { data, isLoading } = useAlbumById(id)
  return (
    <>
      <div className={style["WrapperUsers__container"]}>
        <div
          onClick={() => setState(!state)}
          className={style["WrapperUsers__circle"]}
        >
          {state ? (
            <AiOutlinePlus className={style["WrapperUsers__icon"]} />
          ) : (
            <AiOutlineMinus className={style["WrapperUsers__icon"]} />
          )}
        </div>
        <h1>{text}</h1>
      </div>

      {!state &&
        (isLoading ? (
          <div>Loading...</div>
        ) : (
          data.map((album: AlbumType) => (
            <WrapperAlbum
              title={album.title}
              albumId={album.albumId}
              key={album.albumId}
            />
          ))
        ))}
    </>
  )
}
export default WrapperUsers
