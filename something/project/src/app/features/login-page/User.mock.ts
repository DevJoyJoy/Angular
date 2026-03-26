export interface IUser {
    name: string,
    pass:string,
    document: string,
}

const MockUser: IUser[] = [
    {
        name: "nycollas sobolevski",
        pass: "senha123",
        document: "86976265953",
    },
    {
        name:"trevisharp",
        pass:"senha123",
        document: "79100575712",
    }
]
export default MockUser;