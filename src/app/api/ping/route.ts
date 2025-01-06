import { NextResponse } from "next/server";

async function GET() {
  return new NextResponse(JSON.stringify({ message: "Pong..." }), {
    status: 200,
  });
}

export { GET };
