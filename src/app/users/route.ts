export const users=[
    {id: 1, name: "Alex",},
    {id: 2, name: "John"}
]
export async function GET(){
    return Response.json(users);
}
export async function POST(req: Request){
    const {name} = await req.json();
    users.push({id: users.length + 1, name});
    // return Response.json(users);
    return new Response(JSON.stringify({mesage: "User added", users.length + 1, name}),{status: 201})
    // return Response.json({message: "User added", name}, {status: 201});
}
