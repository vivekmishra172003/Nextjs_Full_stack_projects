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

return NextResponse.json({
    body
})
}