import { NextResponse } from "next/server";

export async function GET(request: Request, context: any) {
  try {
    const { searchParams } = new URL(request.url);
    console.log(context.params, searchParams);

    const id = context.params.id;

    const response = await fetch(
      `https://dadosabertos.camara.leg.br/api/v2/deputados/${id}`
    );
    const data = await response.json();

    return new NextResponse(JSON.stringify(data), {
      status: 200,
      headers: { "content-type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching data:", error);

    return new NextResponse(JSON.stringify({ error }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}
