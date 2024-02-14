import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Developer from "@/models/Developers";

export async function GET(request, { params }) {
  try {
    connectDB();
    const developerFound = await Developer.findById(params.id);

    if (!developerFound)
      return NextResponse.json(
        {
          message: "Developer not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(developerFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  try {
    connectDB();

    const deletedDeveloper = await Developer.findByIdAndDelete(params.id);

    if (!deletedDeveloper) {
      NextResponse.json(
        {
          message: "Task not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(deletedDeveloper);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function PUT(request, { params }) {
  try {
    connectDB();

    const data = await request.json();

    const updatedDeveloper = await Developer.findByIdAndUpdate(params.id, data, {
      new: true,
    });

    return NextResponse.json(updatedDeveloper);
  } catch (error) {
    NextResponse.json(error.message, {
      status: 400,
    });
  }
}
