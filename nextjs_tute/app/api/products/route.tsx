import { NextRequest, NextResponse } from "next/server";
import schema from "../products/schema";

export function GET(request: NextRequest){
    return NextResponse.json([
        {id: 1 , name: "Milk", price: "12"},
        {id: 2 , name: "Paneer", price: "20"},
        {id: 3 , name: "Potato", price: "10"},
    ])
}

export async function POST(request: NextRequest){
    const body  = await request.json();
    const validate = schema.safeParse(body);
    if(!validate.success){
        return NextResponse.json(validate.error.errors , {status: 400})
    };
    return NextResponse.json(body , {status: 201});
}