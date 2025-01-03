import { get } from "@/api/request.js";

// 获取token
export const getToken = async () => {
  let data = null;
  try {
    data = await get("/api/token/get");
    localStorage.setItem("token", (data && data.token) || "");
  } catch (error) {
    console.error(error);
  }
  return data || null;
};

// 刷新token
export const refreshToken = async () => {
  let data = null;
  try {
    data = await get("/api/token/refresh");
    localStorage.setItem("token", data || "");
  } catch (error) {
    console.error(error);
  }
  return data || null;
};
