import client from "./client";

//게시글 등록
export const writeNoticeBoard = ({
  boardId,
  adminId,
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
export const listNoticeBoards = () => client.get("/boards");

//게시글 조회
export const readNoticeBoard = () => client.get(`/boards/${boardId}`);

//게시글 수정
export const updateNoticeBoard = ({
  boardId,
  adminId,
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
    adminId,
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
export const removeNoticeBoard = (boardId) =>
  client.delete(`/boards/${boardId}`);
