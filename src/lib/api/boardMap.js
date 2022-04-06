import client from "./client";

//게시글 조회
export const readMapBoard = () => client.get("/boards");
