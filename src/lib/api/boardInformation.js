import client from "./client";

export const createInfoBoard = ({ id, type, title, libraryName, contents }) =>
  client.post("/boards", {
    id,
    type,
    title,
    libraryName,
    contents,
  });

export const readInfoBoardList = () => client.get("/boards");

export const readInfoBoard = () => client.get(`/boards/${id}`);

export const updateInfoBoard = ({ id, type, title, libraryName, contents }) =>
  client.put(`/boards/${id}`, {
    id,
    type,
    title,
    libraryName,
    contents,
  });

export const deleteInfoBoard = (id) => client.delete(`/boards/${id}`);
