import client from "./client";

export const readMapBoard = () => client.get("/boards");
