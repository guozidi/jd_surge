// debug2.js - 带完整日志的Cookie提取测试
const cookieHeader = $request.headers['Cookie'] || $request.headers['cookie'] || "";
const url = $request.url;

console.log("=== JD Debug2 ===");
console.log("URL: " + url);
console.log("Cookie长度: " + cookieHeader.length);

if (cookieHeader.length === 0) {
    console.log("结果: Cookie为空，跳过");
    $done({});
} else {
    const ptKeyMatch = cookieHeader.match(/pt_key=([^;]+)/);
    const ptPinMatch = cookieHeader.match(/pt_pin=([^;]+)/);
    
    console.log("pt_key匹配: " + (ptKeyMatch ? "成功" : "失败"));
    console.log("pt_pin匹配: " + (ptPinMatch ? "成功" : "失败"));
    
    if (ptKeyMatch && ptPinMatch) {
        const ptKey = ptKeyMatch[1];
        const ptPin = decodeURIComponent(ptPinMatch[1]);
        console.log("✅ 提取成功!");
        console.log("pt_key长度: " + ptKey.length);
        console.log("pt_pin: " + ptPin);
        console.log("最终Cookie: pt_key=" + ptKey + ";pt_pin=" + ptPin + ";");
    } else {
        console.log("❌ 提取失败: 缺少 pt_key 或 pt_pin");
        console.log("Cookie前200字符: " + cookieHeader.substring(0, 200));
    }
    $done({});
}
