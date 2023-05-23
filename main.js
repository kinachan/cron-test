const schedule = require('node-schedule');
const { v4: uuidv4 } = require('uuid');
const { remindJob } = require('./remind');
const { red } = require('./lib/log');

// 毎10分
// const TIME_SPAN = '*/10 * * * *';

// 毎秒
const TIME_SPAN = '* * * * * *';


/**定期実行ジョブ */
const kickJob = () => {
  schedule.scheduleJob(TIME_SPAN, async (firstTime) => {
    console.log(`[log] 定期実行: at ${firstTime}`);
    const random = Math.floor(Math.random() * 10);
  
    // API取得
  
    const isRemind = random === 1;
    const id = uuidv4();
  
    if (!isRemind) {
      return;
    } else {
      red(`[log] 異常発生:${id}`);
    }
  
    // 通知が必要な場合、再通知を実行する。
    // spreadSheetにIDを登録
  
    const scheduleTime = new Date();
    // scheduleTime.setHours(scheduleTime.getHours() + 3);
    scheduleTime.setMinutes(scheduleTime.getMinutes() + 1);
  
    schedule.scheduleJob(scheduleTime, remindJob(id));
  
  });
}

kickJob();

