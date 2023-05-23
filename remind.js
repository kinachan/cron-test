const schedule = require('node-schedule');
const {green, yellow} = require('./lib/log');


const remindJob = (uuid) => {
  return () => {
    const date = new Date();
    green(`[log] remind at ${date}: ${uuid}`);

    const scheduleTime = new Date();
    scheduleTime.setMinutes(scheduleTime.getMinutes() + 1);
    schedule.scheduleJob(scheduleTime, calculation(uuid));
  }
}


const calculation = (uuid) => {
  return () => {
    const date = new Date();
    yellow(`[log] 集計 ${date}: ${uuid}`);
  }
}


module.exports = {
  remindJob,
}