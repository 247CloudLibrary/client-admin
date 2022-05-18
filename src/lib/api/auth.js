import client from "./client";

export const login = async (userId, password) => {
  await client.post("/admin/signin", {
    id: userId,
    pw: password,
  });
};
export const profile = () => {
  client.get("/auth");
};

export const updateProfile = ({
  adminName,
  libraryName,
  address,
  email,
  tel,
}) => {
  client.patch("/auth/update-state", {
    adminName,
    libraryName,
    address,
    email,
    tel,
  });
};

// 회원 탈퇴
export const deleteUser = () => {
  client.delete("/auth/withdraw");
};

// 회원 아이디 찾기
export const findid = ({ email }) => {
  client.post("/auth/findId", { email });
};

// 회원 비밀번호 찾기
export const findPassword = ({ userId, email }) => {
  client.post("/auth/findPw", { userId, email });
};

export const check = () => console.log(localStorage.get("user"));
