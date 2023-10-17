import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest){
    //fetch data from database
    return NextResponse.json([
        {id:1 , name: 'halo'},
        {id:2 , name: 'GTA 5'}
    ])
}

export async function POST(request: NextRequest){
    //fetch data from database
    const body = await request.json();
    const validation = schema.safeParse(body);
    if(!validation.success){
        return NextResponse.json(validation.error.errors, {status: 400})
    }
    return NextResponse.json([
        {id:1 , name: 'halo'},
        {id:2 , name: 'GTA 5'}
    ])
}