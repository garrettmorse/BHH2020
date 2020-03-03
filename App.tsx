import React from 'react';
import Root from './navigators/RootNavigator';
import { LogContext, Log, PersistantStorageLogsKey, loadLogs } from './context/Log';
import { AsyncStorage } from 'react-native';


import { defaultLogs } from './data.json';

console.disableYellowBox = true;


export default class App extends React.Component<{}, {
  logs: Log[]; saveLog: (log: Log) => void; resetLogs: () => void;
}> {
  constructor(props) {
    super(props);

    this.state = {
      logs: [],
      saveLog: this.saveLog,
      resetLogs: this.resetLogs
    };
  };

  async componentDidMount() {
    try {
      this.setState({ logs: await loadLogs() });
    } catch (error) {
      console.log(error);
    }

  }

  saveLog = (log: Log) => {
    // update persistant storage
    AsyncStorage.setItem(PersistantStorageLogsKey, JSON.stringify([...this.state.logs, log]));

    // update internal state
    this.setState(prevState => ({
      logs: [...prevState.logs, log]
    }));
  };

  resetLogs = () => {
    const defaultLogsWithDates = defaultLogs.map(log => {
      return { health: log.health, questions: log.questions, time: new Date(log.time) };
    });

    this.setState({ logs: defaultLogsWithDates });

    AsyncStorage.setItem(PersistantStorageLogsKey, JSON.stringify(defaultLogsWithDates));
  };

  render() {
    return (
      <LogContext.Provider value={this.state}>
        <Root />
      </LogContext.Provider >
    );
  }
};
