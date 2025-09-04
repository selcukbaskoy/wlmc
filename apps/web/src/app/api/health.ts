import type { LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  return new Response(
    JSON.stringify({ 
      status: "ok", 
      timestamp: new Date().toISOString(),
      message: "WALMCO API is running"
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

