import client from "./client";

//도서관 등록
export const writeLibrary = ({
  name,
  address,
  email,
  tel,
  holiday,
  lendingAvailableCount,
  lendingAvailableDays,
  overdueCount,
  longtermOverdueDays,
  lendingLimitDays,
  operatingTime,
  createdAt,
  updatedAt
}) =>
  client.post("/libraries", {
    name,
    address,
    email,
    tel,
    holiday,
    lendingAvailableCount,
    lendingAvailableDays,
    overdueCount,
    longtermOverdueDays,
    lendingLimitDays,
    operatingTime,
    createdAt,
    updatedAt
  
  });

//도서관 조회(슈퍼 어드민)
export const listLibraries = () => {
   client.get(`/libraries`);
};

//도서관 상세조회(어드민 마이페이지)
export const readLibrary = () => {client.get(`/libraries/${libraryId}`)};

//도서관 수정
export const updateLibrary = ({
  libraryId,
  name,
  address,
  email,
  tel,
  holiday,
  lendingAvailableCount,
  lendingAvailableDays,
  overdueCount,
  longtermOverdueDays,
  lendingLimitDays,
  operatingTime,
  loanAvailability,
  createdAt,
  updatedAt
}) =>
  client.put(`/libraries/${libraryId}`, {
    name,
    address,
    email,
    tel,
    holiday,
    lendingAvailableCount,
    lendingAvailableDays,
    overdueCount,
    longtermOverdueDays,
    lendingLimitDays,
    operatingTime,
    loanAvailability,
    createdAt,
    updatedAt
  });

//도서관 삭제
export const removeLibrary = (libraryId) =>
  client.delete(`/libraries/${libraryId}`);
