import client from "./client";

//대출 요청
export const lendingRentalgPost = ({uid, bookId, libraryId, barcord, rfid, lendingstatus, lendingDateTime, returnDateTime}) => {
    client.post('/lending', {uid, bookId, libraryId, barcord, rfid, lendingstatus, lendingDateTime, returnDateTime});
};

//도서 반납 요청
export const lendingReturnPost = ({uid, bookId, libraryId, barcord, rfid, lendingstatus, returnDateTime}) => {
    client.post(`/lending/${uid}`, {bookId, libraryId, barcord, rfid, lendingstatus, returnDateTime});
};

// 도서관 이용 규정 등록
export const rulesPost = (
    {libraryId, libraryname, lendingAvailableCount, lendingAvailableDays, overdueCount, 
    longtermOVerdueDays, lendingLimitDay, loanAvailability}) => {
    client.post('/lending/libraries/rules', {libraryId, libraryname, lendingAvailableCount, lendingAvailableDays, overdueCount, 
        longtermOVerdueDays, lendingLimitDay, loanAvailability});
};

// 대출 상태 조회
export const lendingList = () => {
   client.get( `/lending`);
};

// 대출 가능 여부 및 기록 조회
export const lendingGet = () => {
    client.get(`/lending/${uid}`);
};

// 블랙리스트 조회
export const blacklistGet = () => {
    client.get('/lending/blacklist');
};

// 블랙리스트 등록
export const blacklistPatch = ({uid, libraryId}) => {
    client.patch('/lending/blacklist', {uid, libraryId});
};

// 블랙리스트 제거
export const deleteBlacklist = ({uid, libraryId}) => {
    client.delete(`/lending/blacklist/${uid}`, {libraryId})
};

//도서 분실시 예약 취소 - 서버에서 알아서 해준다고 해서 일단 주석 처리
// export const deleteReservation = () => {
//     client.delete('/lending/{bookid}')
// }
