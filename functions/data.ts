import { AsyncStorage } from 'react-native';

const TOTAL_ROWS_KEY = 'total-rows';

let totalRows = 0;



async function getTotalRows(): Promise<Number> {
  totalRows = JSON.parse(await AsyncStorage.getItem(TOTAL_ROWS_KEY));

  if (isNaN(totalRows)) {
    totalRows = 0;
  }

  return totalRows;
}

async function saveLog(log: Log) {
  try {


    await AsyncStorage.setItem(
      JSON.stringify(await getTotalRows()),
      JSON.stringify(log));
    totalRows++;


    await AsyncStorage.setItem(TOTAL_ROWS_KEY, JSON.stringify(log));


  } catch (error) {
    console.log('Error in saveLog():', error);
  }
};

async function getAllLogs(): Promise<Log[]> {
  totalRows = JSON.parse(await AsyncStorage.getItem(TOTAL_ROWS_KEY));

  if (isNaN(totalRows)) {
    totalRows = 0;
  }

  const logs: Log[] = [];

  for (let i = 0; i < totalRows; i++) {
    try {
      const result = await AsyncStorage.getItem(JSON.stringify(i));
      logs.push(JSON.parse(result));
    } catch (error) {
      console.log('Error in getAllLogs():', error);
    }
  }

  return logs;
}

export { saveLog, getAllLogs };