import { Question, Log } from '../context/Log';

function partialLog(questions: Question[]): Log {
  const heartRate = Math.random() * 50 + 90;
  const hoursSleep = Math.random() * 2 + 5;

  const log = { time: new Date(), health: { heartRate: heartRate, hoursSleep: hoursSleep }, questions: questions };

  return log;
}

export default partialLog;