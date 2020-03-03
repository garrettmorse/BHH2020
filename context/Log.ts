import React from 'react';
import { AsyncStorage } from 'react-native';


interface HealthData {
  heartRate: number;
  hoursSleep: number;
}

interface Question {
  question: string;
  response: string;
}

interface Log {
  time: Date;
  health: HealthData;
  questions: Question[];
}

interface LogState {
  logs: Log[];
  saveLog: (log: Log) => void;
  resetLogs: () => void;
}

const PersistantStorageLogsKey = 'bhh-2020-logs';

async function loadLogs(): Promise<Log[]> {
  try {
    const result = JSON.parse(await AsyncStorage.getItem(PersistantStorageLogsKey));

    if (!result) {
      return [];
    }

    return result.map(log => {
      return { health: log.health, questions: log.questions, time: new Date(log.time) };
    });

  } catch (error) {
    console.log("Error in loadLogs():", error);
    return [];
  }
};


const LogContext = React.createContext<LogState>({ logs: [], saveLog: () => { }, resetLogs: () => { } });

export { LogContext, Log, loadLogs, PersistantStorageLogsKey, Question, HealthData };