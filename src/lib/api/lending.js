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
  client.post("/lending", {
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
  client.post(`/lending/${uid}`, {
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

// 도서관 이용 규정 등록
export const rulesPost = ({
  libraryId,
  libraryName,
  lendingAvailableCount,
  lendingAvailableDays,
  overdueCount,
  longtermOverdueDays,
  lendingLimitDays,
}) => {
  client.post("/lending/libraries/rules", {
    libraryId,
    libraryName,
    lendingAvailableCount,
    lendingAvailableDays,
    overdueCount,
    longtermOverdueDays,
    lendingLimitDays,
  });
};

// 대출 상태 조회
export const lendingList = () => {
  client.get(`/lending`);
};

// 대출 가능 여부 및 기록 조회
export const lendingGet = () => {
  client.get(`/lending/${uid}`);
};

// 블랙리스트 조회
export const blacklistGet = () => {
  client.get("/lending/blacklist");
};

// 블랙리스트 등록
export const blacklistPatch = ({ uid, libraryId }) => {
  client.patch("/lending/blacklist", { uid, libraryId });
};

// 블랙리스트 제거
export const deleteBlacklist = ({ uid }) => {
  client.delete(`/lending/blacklist/${uid}`);
};
