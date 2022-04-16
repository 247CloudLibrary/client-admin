import client from "./client";

export const createNoticeBoard = ({ id, type, title, libraryName, contents }) =>
  client.post("/boards", {
    id,
    type,
    title,
    libraryName,
    contents,
  });

export const readNoticeBoardList = () => client.get("/boards");

export const readNoticeBoard = () => client.get(`/boards/${id}`);

export const updateNoticeBoard = ({ id, type, title, libraryName, contents }) =>
  client.put(`/boards/${id}`, {
    id,
    type,
    title,
    libraryName,
    contents,
  });

export const deleteNoticeBoard = (id) => client.delete(`/boards/${id}`);
