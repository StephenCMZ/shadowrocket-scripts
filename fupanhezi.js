/*
 * 复盘盒子
 */

var obj = JSON.parse($response.body);

obj = {
  code: 0,
  msg: 'OK',
  data: {
    userInfo: {
      ...(obj.data || {}).userInfo,
      level: 15,
      expireTime: '2099-02-21 15:00:00',
      reward1: 100,
      reward2: 100,
      reward3: 100,
    },
  },
};

$done({ body: JSON.stringify(obj) });
