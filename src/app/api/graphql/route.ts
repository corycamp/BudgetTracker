import { handler } from "@/server/graphql/server";

export async function POST(req: Request) {
  return handler(req);
}