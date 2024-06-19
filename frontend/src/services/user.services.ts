import axios from "axios"
import { useQuery } from "react-query"

export const useUsers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get(`http://localhost:3000/users`),
    select: ({ data }) => data,
  })
  return { data, isLoading }
}
