import { users } from "../route";

export async function GET(req: Request, { params }: { params: {id: string}}){
    const {id} = await params;
    const user =users.find(user=>user.id === parseInt(id));
    if(!user){
        return Response.json({message: "User not found"}, {status:404})
    }
    return Response.json(user)

}