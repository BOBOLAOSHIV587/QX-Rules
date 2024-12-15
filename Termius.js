/*************************************
>「 脚本名称 」         Termius解锁Premium
>「 脚本作者 」         M̆̈̆̈ĭ̈̆̈k̆̈̆̈ĕ̈
>「 电报频道 」         https://t.me/TrollStoreKios 
>「 更新时间 」         2024-11-15
>「 注意事项 」         如需引用请注明出处，谢谢合作！
>「 注意事项 」         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本，或去设置媒体与购买项目处切换ID]
>「 额外说明 」         请勿传播或售卖此脚本
# https://apps.apple.com/cn/app/termius-terminal-ssh-client/id549039908?uo=4

*************************************

[Script]
http-response https:\/\/api\.termius\.com\/api\/v3\/bulk\/account\/ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/BOBOLAOSHIV587/QX-Rules/refs/heads/main/Termius.js

[MITM]
hostname = %APPEND% api.termius.com

*************************************/

var body = $response.body;
var url = $request.url;

const path1 = '/api/1481166/';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.extra["plan"] = Premium;
	body = JSON.stringify(obj);  
 }

$done({body});
