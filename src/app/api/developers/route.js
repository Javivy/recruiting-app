import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Developer from "@/models/Developers";

export async function GET() {
  connectDB();

  const developers = await Developer.find();
  console.log(developers);

  return NextResponse.json(developers);
}

export async function POST(request) {
  try {
    const data = await request.json();

    const newDeveloper = new Developer(data);
    const savedDeveloper = await newDeveloper.save();

    return NextResponse.json(savedDeveloper);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
