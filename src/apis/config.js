const dev_base_url = "http://localhost:3000";
const pro_base_url = "https://nicemusic-api.lxhcool.cn";

export const BASE_URL = process.env.NODE_ENV === "development" ? dev_base_url : pro_base_url;
export const TIMEOUT = 5000;