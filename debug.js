let cookie = $request.headers['Cookie'] || $request.headers['cookie'] || "";
$notify("JD Cookie调试", "", "URL: " + $request.url + "\nCookie: " + cookie.substring(0, 200));
$done({});
