/********************************
 *
 *
脚本功能：喜马拉雅,会员.大师课,儿童+音效&音质,去广告,界面优化+++
软件版本：9.2.94（兼容最新版本）
下载地址：
*******************************
[rewrite_local]

# > 喜马拉雅,会员.大师课,儿童+音效&音质,去广告,界面优化+++
https?:\/\/.+((ximalaya)|(xmcdn)).+(mobile-user\/v2|mobile-web|queryCategoryPageData|discovery-feed\/v4|vip\/v1\/recommand|product\/detail\/v1|mobile\/v1\/album|playpage|album\/price\/ts|mobile\/user\/member|freeListenTabStyle).*$ url script-response-body https://raw.githubusercontent.com/MomentLHC/qx/refs/heads/main/xmly.js
^https?:\/\/.+((ximalaya)|(xmcdn)).+\/[a-z]{6}\-[a-z]{8}\/track\/(v[0-9])\/[a-zA-Z]+\/ts.*$ url script-request-header https://raw.githubusercontent.com/MomentLHC/qx/refs/heads/main/xmly.js
# > 去广告,
^https?://passport\.ximalaya\.com/friendship-mobile/v1/findFriendsBanner/show/ url reject
^https?://xdcs-collector\.ximalaya\.com/api/v1/realtime url reject
^https?://.+\.ximalaya\.com/linkeye.+/checkIP\?ip.+passport.ximalaya.com url reject
^https?://adse\.wsa\.ximalaya\.com url reject
^https?://openapi\.mysteel\.com\/v5\/getAdv\.htm url reject
^https?://ulogs\.umeng\.com\/unify_logs url reject
^https?://adse\.ximalaya\.com\/ url reject
^https?://gslbali\.ximalaya\.com url reject
^https?://www\.taobao\.com\/help\/getip\.php url reject
^https?://.+location\.ximalaya\.com url reject
^https?://.+dbehavior\.ximalaya\.com url reject
^https?://ad\.ximalaya\.com url reject
^https?://.+audid-api\.taobao.com url reject
^https?://passport\.ximalaya\.com\/user-http-app\/v1\/token\/refresh url reject
^https?://adse\.ximalaya\.com/incentive/ting/durationConfig url reject-dict
^https?://mobile\.ximalaya\.com/mobile-playpage/view/ url reject-dict

[mitm]
hostname = 36.150.215.*,61.172.194.*,180.153.*.*,180.153.255.*, 180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.2*,61.162.174.*,119.188.123.*,59.83.227.*, 114.80.161.29,1.62.62.64,1.194.255.171, 23.236.99.89, 36.99.200.135, 42.81.4.198, 42.81.26.128, 42.81.120.58, 43.152.24.12, 43.152.24.18, 43.152.25.127, 43.152.29.38, 43.175.16.34, 43.175.22.25, 43.175.44.15, 49.7.69.197, 49.51.224.95, 101.33.11.32, 101.33.11.106, 101.33.20.34, 101.33.29.110, 103.105.60.99, 140.249.84.135, 140.249.85.189, 150.109.90.80, 150.109.91.35, 150.138.47.94, 150.138.136.145, 203.205.13*.*, 203.205.250.*, 211.152.137.*, 47.100.227.85, 61.164.145.12, 106.41.204.126, 118.25.119.177, 223.111.231.198, 120.22*.2*.*, 43.132.8*.*, 101.33.27.*, 43.141.11.*, 117.34.49.212, 36.103.197.65, 198.18.1*.*,198.18.2*.*, 101.91.13*, 36.42.77.*, 118.180.43.252, 49.119.120.*, 58.144.235.61, 58.251.62*, 221.204.4*.*, 112.84.131.*, 112.80.180.72, 112.98.170.228, 112.99.146.108, 116.136.188.184, 116.162.203.111, 116.177.225.247, 123.138.8.*,183.204.35.*,183.201.114.*,101.91.135.*,101.91.133.*,101.91.134.*,adse.ximalaya.com,61.170.88.*,101.91.134.*,42.56.64.*,*.xmcdn.com, *.ximalaya.com, 61.172.194.*,180.153.*.*,180.153.255.*, 180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.2*,61.162.174.*,119.188.123.*,59.83.227.*, 114.80.161.29,1.62.62.64,1.194.255.171, 23.236.99.89, 36.99.200.135, 42.81.4.198, 42.81.26.128, 42.81.120.58, 43.152.24.12, 43.152.24.18, 43.152.25.127, 43.152.29.38, 43.175.16.34, 43.175.22.25, 43.175.44.15, 49.7.69.197, 49.51.224.95, 101.33.11.32, 101.33.11.106, 101.33.20.34, 101.33.29.110, 103.105.60.99, 140.249.84.135, 140.249.85.189, 150.109.90.80, 150.109.91.35, 150.138.47.94, 150.138.136.145, 203.205.13*.*, 203.205.250.*, 211.152.137.*, 47.100.227.85, 61.164.145.12, 106.41.204.126, 112.80.180.72, 112.98.170.228, 112.99.146.108, 118.25.119.177, 223.111.231.198, 120.22*.2*.*, 43.132.8*.*, 101.33.27.*, 43.141.11.*,101.89.53.*,36.131.221.*,111.42.194.*,adse.ximalaya.com,36.131.221.*,112.84.131.*,111.6.56.*,111.6.56.228,*.xmcdn.com,120.232.165.228,43.159.71.*,ulogs.umeng.com,www.taobao.com,43.132.81.*,101.33.27.*,114*0.*,61.172.1*.*,43.141.11.*,114.80.99.86,180.153.255.*,114.80.99.*,*.mysteel.*,61.172.194.196,180.153.*.*,*xima*,*xmcdn*,*.ximalaya.com,*.xmcdn.com,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.237,114.80.161.29,1.62.62.64,51*.com,1.194.255.171, 23.236.99.89, 36.99.200.135,42.81.4.198,42.81.26.128,42.81.120.58,43.132.80.77,43.132.83.175,43.132.84.11,43.152.24.12,43.152.24.18,43.152.25.127,43.152.29.38,43.175.16.34,43.175.22.25,43.175.44.15,49.7.69.197,49.51.224.95,101.33.11.32,101.33.11.106,101.33.20.34,101.33.29.110,103.105.60.99,114.80.99.90,114.80.99.70,114.80.99.71, 114.80.99.89,114.80.99.91,114.80.99.88, 114.80.99.87,140.249.84.135,140.249.85.189,150.109.90.80,150.109.91.35,150.138.47.94,150.138.136.145,203.205.136.87,203.205.136.100,203.205.136.102,203.205.136.159,203.205.137.27,203.205.137.87,203.205.137.241,203.205.250.111,203.205.250.113,211.152.137.25,ulogs.umeng.com,passport.ximalaya.com


********************************/


// 获取响应的 body 和请求的 URL
var responseBody = $response.body;
var requestUrl = $request.url;

// 检查 responseBody 是否为字符串类型
if (typeof responseBody === 'string') {
  // 针对不同的请求 URL，进行替换和修改
  if (requestUrl.indexOf('/product/detail/v1/') !== -1) {
    // 替换免费、付费状态和其他信息
    responseBody = responseBody
      .replace(/isFree":\w+/g, 'isFree":true')
      .replace(/isPaid":\w+/g, 'isPaid":false')
      .replace(/labelText":"[^"]+/g, 'labelText":"🎉脚本注入成功🎉')
      .replace(/vipPurchaseText":"[^"]+/g, 'vipPurchaseText":"Luis"')
      .replace(/url":"[^"]+/g, 'url":""')
      .replace(/"activityInfo":[^}]+../g, '');
  }

  if (requestUrl.indexOf('/v1/album/track/ts') !== -1) {
    // 替换 track 的免费、付费状态
    responseBody = responseBody
      .replace(/isFree":\w+/g, 'isFree":true')
      .replace(/isPaid":\w+/g, 'isPaid":false');
  }

  var parsedData;
  try {
    // 将 responseBody 转换为 JSON 对象
    parsedData = JSON.parse(responseBody);

    // 针对不同的 URL 进行数据修改
    if (requestUrl.indexOf('/mobile-user/v2/homePage') !== -1) {
      parsedData.data.vipInfo.isVip = true;
      parsedData.data.vipInfo.level = 5; // VIP 等级
      parsedData.data.nickname = 'Luis';
      parsedData.data.vipInfo.status = 4;
      parsedData.data.childTag.isChild = true;
      parsedData.data.childTag.isShadowChild = true;
      parsedData.data.topPicInfo.color = '#242121';
      parsedData.data.topPicInfo.backgroundPicUrl = 'https://imagev2.xmcdn.com/storages/ca50-audiofreehighqps/AA/CB/GMCoOSEJshORAAB5owKt4Yef.png';
      parsedData.data.topPicInfo.foregroundPicUrl = 'https://imagev2.xmcdn.com/storages/c45c-audiofreehighqps/08/70/GMCoOSMJshOSAAAJWQKt4Yf5.png';
      parsedData.data.topPicInfo.picUrl = 'https://imagev2.xmcdn.com/storages/1c63-audiofreehighqps/B0/37/GMCoOScJDSvBAAm9-wJy0ISu.png';
      delete parsedData.data.freeListenV2;
      parsedData.data.vLogoType = 2;
      parsedData.data.userGradeInfo.level = 9;
      parsedData.data.userGradeInfo.darkIcon = 'https://imagev2.xmcdn.com/storages/c025-audiofreehighqps/D8/04/GMCoOR8JK30NAAAKwwJ-EuBa.png!xmagick=webp';
      delete parsedData.data.serviceModule;
    }

    // 处理其他 URL 的逻辑略作省略，基本模式类似，修改相应字段或删除无用数据

    // 将修改后的 JSON 对象重新转换为字符串
    responseBody = JSON.stringify(parsedData);
  } catch (error) {
    // 捕获 JSON 解析错误并输出日志
    console.log('JSON 解析错误: ' + error.message);
  }
}

// 返回修改后的响应
$done({
  body: responseBody
});
