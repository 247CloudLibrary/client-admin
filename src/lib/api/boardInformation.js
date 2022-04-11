import client from "./client";

//게시글 등록
export const writeInfoBoard = ({ id, type, title, libraryName, contents }) =>
  client.post("/boards", {
    id,
    type,
    title,
    libraryName,
    contents,
  });

//게시판 목록 조회
export const listInfoBoards = () => client.get("/boards");

//게시글 조회
export const readInfoBoard = () => client.get(`/boards/${id}`);

//게시글 수정
export const updateInfoBoard = ({ id, type, title, libraryName, contents }) =>
  client.put(`/boards/${id}`, {
    id,
    type,
    title,
    libraryName,
    contents,
  });

//게시글 삭제
export const removeInfoBoard = (id) => client.delete(`/boards/${id}`);
