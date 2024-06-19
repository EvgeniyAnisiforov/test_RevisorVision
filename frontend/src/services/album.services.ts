import axios from "axios";
import { useQuery } from "react-query";

export const useAlbumById = (id:string) => {
    const { data, isLoading } = useQuery({
      queryKey: ["album", id],
      queryFn: () => axios.get(`http://localhost:3000/albums/${id}`),
      select: ({data}) => data
    });
    return { data, isLoading };
  };