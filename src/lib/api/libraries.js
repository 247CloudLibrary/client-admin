import client from "./client";

//도서관 등록
export const writeLibrary = ({
  address,
  email,
  holiday,
  id,
  lendingAvailableCount,
  lendingAvailableDays,
  lendingLimitDays,
  longtermOverdueDays,
  name,
  operatingTime,
  overdueCount,
  tel,
}) =>
  client.post("/libraries", {
    address,
    email,
    holiday,
    id,
    lendingAvailableCount,
    lendingAvailableDays,
    lendingLimitDays,
    longtermOverdueDays,
    name,
    operatingTime,
    overdueCount,
    tel,
  });

//도서관 조회(슈퍼 어드민)
export const listLibraries = () => {
  client.get(`/libraries`);
};

//도서관 상세조회(어드민 마이페이지)
export const readLibrary = () => {
  client.get(`/libraries/${id}`);
};

//도서관 수정
export const updateLibrary = ({
  address,
  email,
  holiday,
  id,
  lendingAvailableCount,
  lendingAvailableDays,
  lendingLimitDays,
  longtermOverdueDays,
  name,
  operatingTime,
  overdueCount,
  tel,
}) =>
  client.put(`/libraries/${id}`, {
    address,
    email,
    holiday,
    lendingAvailableCount,
    lendingAvailableDays,
    lendingLimitDays,
    longtermOverdueDays,
    name,
    operatingTime,
    overdueCount,
    tel,
  });

//도서관 삭제
export const removeLibrary = (id) => client.delete(`/libraries/${id}`);
