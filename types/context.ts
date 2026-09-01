import { UserType } from "./user"

export type UserContextType = {
    user: UserType |null,
    setUser: (user:UserType) => void
}
