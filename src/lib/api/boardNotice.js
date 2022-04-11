import client from "./client";

//게시글 등록
export const writeNoticeBoard = ({ id, type, title, libraryName, contents }) =>
  client.post("/boards", {
    id,
    type,
    title,
    libraryName,
    contents,
  });

//게시판 목록 조회
export const listNoticeBoards = () => client.get("/boards");

//게시글 조회
export const readNoticeBoard = () => client.get(`/boards/${id}`);

//게시글 수정
export const updateNoticeBoard = ({ id, type, title, libraryName, contents }) =>
  client.put(`/boards/${id}`, {
    id,
    type,
    title,
    libraryName,
    contents,
  });

//게시글 삭제
export const removeNoticeBoard = (id) => client.delete(`/boards/${id}`);
