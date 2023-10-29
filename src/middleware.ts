import { NextRequest, NextResponse } from "next/server";

//request-> 送る！！！
//response -> 返す！！！

export function middleWare(req: NextRequest, res: NextResponse) {
  const response = NextResponse.next({
    request: {
      headers: new Headers(req.headers),
    },
  });

  //   response.headers.forEach((headers) => console.log('header', header))
  response.cookies.set("isAuthed2", "true");
  console.log("response", response.cookies);
  return response;
}
export const config = {
  mather: "/",
};

export default middleWare;
