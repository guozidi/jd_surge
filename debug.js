// debug.js
const cookie = $request.headers['Cookie'] || $request.headers['cookie'] || "";
const url = $request.url;
// 尝试从 URL 中提取 functionId
const functionIdMatch = url.match(/functionId=([^&]+)/);
const functionId = functionIdMatch ? functionIdMatch[1] : "未找到";

console.log("=== JD Debug ===");
console.log("URL: " + url);
console.log("FunctionId: " + functionId);
console.log("Cookie长度: " + cookie.length);
console.log("包含pt_key: " + cookie.includes("pt_key"));
// 如果包含，把完整的 Cookie 也打印出来
if (cookie.includes("pt_key")) {
    console.log("完整Cookie: " + cookie);
}
$done({});
