import { FC } from "react"
import WrapperUsers from "../../components/Catalog/WrapperUsers"
import {UserData} from "../../Type"
import { useUsers } from "../../services/user.services"


const Catalog: FC<{}> = () => {
  const { data, isLoading} = useUsers();
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        data.map((user: UserData) => (
          <WrapperUsers key={user.id} text={user.name} id={user.id}/>
        ))
      )}
    </div>
  )
}
export { Catalog }
