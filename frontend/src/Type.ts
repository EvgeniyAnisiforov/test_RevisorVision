export interface PropsTypeWrapperUsers {
  text: string
  id: string
}

export interface PropsTypeWrapperAlbum {
  title: string
  albumId: string
}

export interface PropsTypeWrapperPhoto {
  url: string
  text: string
}

export interface AlbumType {
  albumId: string
  userID: string
  title: string
}

export interface UserData {
  id: string
  name: string
  username: string
  email: string
}

export interface PhotoType {
  albumId: string
  id: string
  title: string
  url: string
}

export interface TypePropsModalWindowPhoto {
  id: string
  close: () => void
}

export interface PropsTypeHoverText {
  children: React.ReactNode
  text: string
}
