import client from "./client";

export const createLibrary = ({
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

export const readLibrariesForSuperAdmin = () => {
  client.get(`/libraries`);
};

export const readLibrary = () => {
  client.get(`/libraries/${id}`);
};

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

export const deleteLibrary = (id) => client.delete(`/libraries/${id}`);
