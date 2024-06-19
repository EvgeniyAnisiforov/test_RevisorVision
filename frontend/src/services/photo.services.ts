import axios from "axios"
import { useQuery } from "react-query"

export const usePhotosByAlbumId = (albumId: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["photos", albumId],
    queryFn: () => axios.get(`http://localhost:3000/photos/${albumId}`),
    select: ({ data }) => data,
  })

  return { data, isLoading }
}
