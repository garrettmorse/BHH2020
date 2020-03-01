import React from 'react';
import Root from './navigators/RootNavigator';
import { LogContext, Log, PersistantStorageLogsKey, loadLogs } from './context/Log';
import { AsyncStorage } from 'react-native';


export default class App extends React.Component<{}, {
  logs: Log[], saveLog: (log: Log) => void;
}> {
  constructor(props) {
    super(props);

    this.state = {
      logs: [],
      saveLog: this.saveLog
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

  render() {
    return (
      <LogContext.Provider value={this.state}>
        <Root />
      </LogContext.Provider >
    );
  }

}
;
