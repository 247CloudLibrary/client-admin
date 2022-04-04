import qs from "qs";
import client from "./client";

//도서 등록
export const writeBook = ({
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
  rfid,
  category,
}) =>
  client.post("/books", {
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
    rfid,
    category,
  });

//도서 목록 조회
export const listBooks = ({
  isbn,
  bookId,
  title,
  thumbnailImage,
  author,
  translator,
}) => {
  const queryString = qs.stringify({
    isbn,
    bookId,
    title,
    thumbnailImage,
    author,
    translator,
  });
  return client.get(`/books?${queryString}`);
};

//도서 상세 조회
export const readBook = (bookId) => client.get(`/books/${bookId}`);

//도서 수정
export const updateBook = ({
  rid,
  libraryId,
  bookId,
  isbn,
  title,
  thumbnailImage,
  coverImage,
  author,
  translator,
  contents,
  publisher,
  type,
  genre,
  barcode,
  bookstatus,
  rfid,
  category,
}) =>
  client.put(`/books/${bookId}`, {
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
    type,
    genre,
    barcode,
    bookstatus,
    rfid,
    category,
  });
//도서 삭제
export const removeBook = ({ bookId, bookstatus }) =>
  client.patch(`/books/${bookId}`, { bookstatus });
