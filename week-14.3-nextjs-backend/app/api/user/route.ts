import { NextRequest, NextResponse } from "next/server";

export function GET(req:NextRequest){
    return NextResponse.json({
        email:"vivekmishra172003@gmail.com",
        name:"vivek"
    })
}

export async function POST(req:NextRequest){
    //body
const body = await req.json();
//header
console.log(req.headers.get("authorization"));
// query parameters
console.log(req.nextUrl.searchParams.get("name"));
//hit the database with username and passowrd
return NextResponse.json({
    message:"YOu are signed up "
})
}