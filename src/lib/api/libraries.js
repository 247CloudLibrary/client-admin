import qs from "qs";
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
  lendingLimit,
  operatingTime,
  loanAvailability,
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
    lendingLimit,
    operatingTime,
    loanAvailability,
  });

//도서관 조회(슈퍼 어드민)
export const listLibraries = ({ libraryId, name, address, email, tel }) => {
  const queryString = qs.stringify({
    libraryId,
    name,
    address,
    email,
    tel,
  });
  return client.get(`/libraries?${queryString}`);
};

//도서관 상세조회
export const readLibrary = (libraryId) => client.get(`/libraries/${libraryId}`);

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
  lendingLimit,
  operatingTime,
  loanAvailability,
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
    lendingLimit,
    operatingTime,
    loanAvailability,
  });

//도서관 삭제
export const removeLibrary = (libraryId) =>
  client.delete(`/libraries/${libraryId}`);
