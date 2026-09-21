const cookie = $request.headers['Cookie'] || $request.headers['cookie'] || "";
console.log("=== JD Debug ===");
console.log("URL: " + $request.url);
console.log("Cookie长度: " + cookie.length);
console.log("Cookie内容: " + cookie);
console.log("包含pt_key: " + cookie.includes("pt_key"));
$done({});
