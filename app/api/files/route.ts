import { NextResponse, type NextRequest } from "next/server";
import { pinata } from "@/utils/config"

export async function POST(request: NextRequest) {
  try {
    console.log(request)
    const data = await request.formData();
    console.log(data);
    const file: File | null = data.get("file") as unknown as File;
    const { cid } = await pinata.upload.public.file(file)
    const url = await pinata.gateways.public.convert(cid);
    const gatewayUrl = `${url}?pinataGatewayToken=${process.env.NEXT_GATEWAY_ACCESS_KEY}`
    return NextResponse.json({ url, gatewayUrl }, { status: 200 });
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

