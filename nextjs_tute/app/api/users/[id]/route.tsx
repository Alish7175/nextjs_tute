import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
    params: {id: number}
}

export function GET(request: NextRequest, { params }: Props){
    //Fetch data from the database
    //if not found, return 404
    //else, return data
    //but for now just mock
    if(!params.id) return NextResponse.json({ error: 'User not found' });
    
    return NextResponse.json({id: 1, name: 'halo' }); 
}

export async function POST(request: NextRequest){
    const body = await request.json();
    if(!body.id) return NextResponse.json({ error: 'User not found'},{status: 400 });
    return NextResponse.json(body,{status: 201});
}

export async function PUT(request: NextRequest , { params }: {params: {id: string}}){
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors , {status: 400})
    }
    return NextResponse.json(body);
}