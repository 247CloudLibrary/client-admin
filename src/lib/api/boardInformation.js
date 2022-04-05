import qs from "qs";
import client from "./client";

//게시글 등록
export const writeInfoBoard = ({ type, title, contents, libraryName }) =>
  client.post("/boards", { type, title, contents, libraryName });

//게시판 목록 조회
export const listInfoBoards = ({
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
export const readInfoBoard = (boardId) => client.get(`/boards/${boardId}`);

//게시글 수정
export const updateInfoBoard = ({ boardId, type, title, contents }) =>
  client.put(`/boards/${boardId}`, { type, title, contents });

//게시글 삭제
export const removeInfoBoard = (boardId) => client.delete(`/boards/${boardId}`);
