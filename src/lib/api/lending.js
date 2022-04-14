import client from "./client";

//대출 요청
export const lendingRentalgPost = ({
  uid,
  bookId,
  libraryId,
  libraryName,
  barcode,
  rfid,
  lendingStatus,
  lendingDateTime,
  returnDateTime,
}) => {
  client.post("/v1/lending", {
    uid,
    bookId,
    libraryId,
    libraryName,
    barcode,
    rfid,
    lendingStatus,
    lendingDateTime,
    returnDateTime,
  });
};

//도서 반납 요청
export const lendingReturnPost = ({
  uid,
  bookId,
  libraryId,
  libraryName,
  barcode,
  rfid,
  lendingStatus,
  lendingDateTime,
  returnDateTime,
}) => {
  client.patch(`/v1/lending?uid=${uid}&lendingStatus=${lendingStatus}`, {
    bookId,
    libraryId,
    libraryName,
    barcode,
    rfid,
    lendingStatus,
    lendingDateTime,
    returnDateTime,
  });
};

// 대출 상태 조회
export const lendingListGet = () => {
  client.get(`/v1/lending`);
};

// 대출 가능 여부 및 기록 조회
export const lendingGet = ({uid}) => {
  client.get(`/v1/lending?uid=${uid}`);
};

// 블랙리스트 조회
export const blacklistGet = () => {
  client.get("/v1/lending/blacklist");
};

// 블랙리스트 등록
export const blacklistPatch = ({ uid, libraryId }) => {
  client.patch("/v1/lending/blacklist", { uid, libraryId });
};

// 블랙리스트 제거
export const blacklistDelete = ({uid}) => {
  client.delete(`/v1/lending/blacklist?uid=${uid}`);
};

//0412 blakList mock api 아직 안되어 있음