import client from "./client";

//도서 등록
export const writeBook = ({
  bookId,
  rid,
  libraryId,
  isbn,
  title,
  thumbnailImage,
  coverImage,
  author,
  translator,
  contents,
  publisher,
  publishDate,
  type,
  genre,
  barcode,
  bookstatus,
  createdAt,
  updatedAt,
  rifd,
  category,
}) =>
  client.post("/books", {
    bookId,
    rid,
    libraryId,
    isbn,
    title,
    thumbnailImage,
    coverImage,
    author,
    translator,
    contents,
    publisher,
    publishDate,
    type,
    genre,
    barcode,
    bookstatus,
    createdAt,
    updatedAt,
    rifd,
    category,
  });

//도서 목록 조회
export const listBooks = () => client.get("/books");

//도서 상세 조회
export const readBook = () => client.get(`/books/${bookId}`);

//도서 수정
export const updateBook = ({
  bookId,
  rid,
  libraryId,
  isbn,
  title,
  thumbnailImage,
  coverImage,
  author,
  translator,
  contents,
  publisher,
  publishDate,
  type,
  genre,
  barcode,
  bookstatus,
  createdAt,
  updatedAt,
  rifd,
  category,
}) =>
  client.put(`/books/${bookId}`, {
    bookId,
    rid,
    libraryId,
    isbn,
    title,
    thumbnailImage,
    coverImage,
    author,
    translator,
    contents,
    publisher,
    publishDate,
    type,
    genre,
    barcode,
    bookstatus,
    createdAt,
    updatedAt,
    rifd,
    category,
  });
//도서 삭제
export const removeBook = ({ bookId, bookstatus }) =>
  client.patch(`/books/${bookId}`, { bookstatus });
