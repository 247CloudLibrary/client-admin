import client from "./client";

export const login = ({ userId, password }) => {
  client.post(
    "http://ecs-alb-167470959.us-east-1.elb.amazonaws.com/v1/admin/signin",
    { userId, password }
  );
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

// 로그인 상태 확인
export const check = () => client.get("/auth/check");
