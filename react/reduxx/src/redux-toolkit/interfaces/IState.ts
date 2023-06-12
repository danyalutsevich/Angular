import { IUser } from "./IUser";

interface IState{
    users: IUser[],
    status: boolean,
    error: string
}

export default IState;