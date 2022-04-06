import client from "./client";

//게시글 등록
export const writeInfoBoard = ({
  boardId,
  adminId,
  adminName,
  type,
  title,
  contents,
  libraryId,
  libraryName,
  createdAt,
  updatedAt,
  readCounts,
}) =>
  client.post("/boards", {
    boardId,
    adminId,
    adminName,
    type,
    title,
    contents,
    libraryId,
    libraryName,
    createdAt,
    updatedAt,
    readCounts,
  });

//게시판 목록 조회
export const listInfoBoards = () => client.get("/boards");

//게시글 조회
export const readInfoBoard = () => client.get(`/boards/${boardId}`);

//게시글 수정
export const updateInfoBoard = ({
  boardId,
  adminId,
  adminName,
  type,
  title,
  contents,
  libraryId,
  libraryName,
  createdAt,
  updatedAt,
  readCounts,
}) =>
  client.put(`/boards/${boardId}`, {
    boardId,
    adminId,
    adminName,
    type,
    title,
    contents,
    libraryId,
    libraryName,
    createdAt,
    updatedAt,
    readCounts,
  });

//게시글 삭제
export const removeInfoBoard = (boardId) => client.delete(`/boards/${boardId}`);
