import qs from "qs";
import client from "./client";

//게시글 등록
export const writeBoard = ({ type, title, contents, libraryName }) =>
  client.post("/boards", { type, title, contents, libraryName });

//게시판 목록 조회
export const listBoards = ({
  boardId,
  title,
  createdAt,
  updatedAt,
  readCounts,
}) => {
  const queryString = qs.stringify({
    boardId,
    title,
    createdAt,
    updatedAt,
    readCounts,
  });
  return client.get(`/boards?${queryString}`);
};

//게시글 조회
export const readBoard = (boardId) => client.get(`/boards/${boardId}`);

//게시글 수정
export const updateBoard = ({ boardId, type, title, contents, libraryName }) =>
  client.put(`/boards/${boardId}`, { type, title, contents, libraryName });

//게시글 삭제
export const removeBoard = (boardId) => client.delete(`/boards/${boardId}`);
