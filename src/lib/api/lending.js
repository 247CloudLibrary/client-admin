import client from "./client";

export const createLendingBook = ({
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

export const createReturnBook = ({
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

export const readLendingList = () => {
  client.get(`/v1/lending`);
};

export const readLending = ({ uid }) => {
  client.get(`/v1/lending?uid=${uid}`);
};

export const readBlacklist = () => {
  client.get("/v1/lending/blacklist");
};

export const updateBlacklist = ({ uid, libraryId }) => {
  client.patch("/v1/lending/blacklist", { uid, libraryId });
};

export const deleteBlacklist = ({ uid }) => {
  client.delete(`/v1/lending/blacklist?uid=${uid}`);
};
