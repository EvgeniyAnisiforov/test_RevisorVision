import { FC, useState } from "react"
import style from "./WrapperAlbum.module.css"
import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import WrapperPhoto from "../Catalog/WrapperPhoto"
import { PropsTypeWrapperAlbum } from "../../Type"
import { PhotoType } from "../../Type"
import { usePhotosByAlbumId } from "../../services/photo.services"

const WrapperAlbum: FC<PropsTypeWrapperAlbum> = ({ title, albumId }) => {
  const [state, setState] = useState<boolean>(true)

  const { data, isLoading } = usePhotosByAlbumId(albumId)
  return (
    <>
      <div className={style["WrapperAlbum__container"]}>
        <div
          onClick={() => setState(!state)}
          className={style["WrapperAlbum__circle"]}
        >
          {state ? (
            <AiOutlinePlus className={style["WrapperAlbum__icon"]} />
          ) : (
            <AiOutlineMinus className={style["WrapperAlbum__icon"]} />
          )}
        </div>
        <h2>{title}</h2>
      </div>

      {!state &&
        (isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className={style["WrapperAlbum__containerPhoto"]}>
            {data.map((photo: PhotoType) => (
              <WrapperPhoto text={photo.title} url={photo.url} key={photo.id} />
            ))}
          </div>
        ))}
    </>
  )
}
export default WrapperAlbum
