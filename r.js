/***********************************

> 应用名称：Focos+Focos live解锁高级会员权限
> 下载地址：http://t.cn/AilyJ3mp
> 脚本作者：ddgksf2013
> 微信账号：墨鱼手记
> 解锁说明：解锁高级会员权限
> 更新时间：2023-05-05
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com
> 特别提醒：如需转载请注明出处，谢谢合作！
> 特别说明：⚠️⚠️⚠️
          本脚本仅供学习交流使用，禁止转载售卖
          ⚠️⚠️⚠️
          
          
[rewrite_local]
# > Focos+Focos live☆解锁会员权限（2023-05-05）@ddgksf2013
^https?:\/\/.*oracle\.bendingspoonsapps\.com\/v\d\/(users\/setup|purchases\/verify\/apple) url script-response-body https://raw.githubusercontent.com/BOBOLAOSHIV587/QX-Rules/main/r.js

[mitm]
hostname = *.oracle.bendingspoonsapps.com


***********************************/


var obj=JSON.parse($response.body);-1!=$request.url.indexOf("remini")?obj.me.active_subscriptions_ids=["com.bigwinepot.nwdn.international.1y_p99_99_ft_pro"],$done({body:JSON.stringify(obj)});
