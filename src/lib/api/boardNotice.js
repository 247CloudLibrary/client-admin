import qs from "qs";
import client from "./client";

//게시글 등록
export const writeNoticeBoard = ({ type, title, contents, libraryName }) =>
  client.post("/boards", { type, title, contents, libraryName });

//게시판 목록 조회
export const listNoticeBoards = ({
  boardId,
  type,
  title,
  adminName,
  createdAt,
  updatedAt,
  readCounts,
}) => {
  const queryString = qs.stringify({
    boardId,
    type,
    title,
    adminName,
    createdAt,
    updatedAt,
    readCounts,
  });
  return client.get(`/boards?${queryString}`);
};

//게시글 조회
export const readNoticeBoard = (boardId) => client.get(`/boards/${boardId}`);

//게시글 수정
export const updateNoticeBoard = ({
  boardId,
  type,
  title,
  contents,
  libraryName,
}) => client.put(`/boards/${boardId}`, { type, title, contents, libraryName });

//게시글 삭제
export const removeNoticeBoard = (boardId) =>
  client.delete(`/boards/${boardId}`);
