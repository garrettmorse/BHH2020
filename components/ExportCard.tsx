import React from 'react';
import { Text, TouchableOpacity, Share } from 'react-native';
import { Log } from '../context/Log';
import styles from '../util/styles';
import * as FileSystem from 'expo-file-system';


export interface ExportType {
  extension: string,
  displayName: string,
}

export const SupportedExportTypes: ExportType[] = [
  { extension: 'csv', displayName: 'CSV' },
  { extension: 'json', displayName: 'JSON' },
  { extension: 'xlsx', displayName: 'Excel' },
];

function logToFileContents(logs: Log[], filetype: ExportType): string {
  switch (filetype.extension) {
    case 'xlxs':
      console.error("Mistakes were made.");
    case 'csv':
      const builder = [];

      builder.push('date,heart rate,hours of sleep,question,response\n');

      for (let i = 0; i < logs.length; i++) {
        const log = logs[i];
        builder.push(`${log.time.toDateString()},${log.health.heartRate},${log.health.hoursSleep},`);

        for (let j = 0; j < log.questions.length; j++) {
          const question = log.questions[j];
          builder.push(`${question.question},${question.response},`);
        }
        builder.push("\n");
      }
      return builder.join("");
    case 'json':
      return JSON.stringify(logs);
    default:
      console.error("Mistakes were made.");
      return "";;
  }

}

export function ExportCard({ filetype, logs }) {
  return (
    <TouchableOpacity
      style={styles.button}
      key={filetype.displayName}
      onPress={async () => {
        try {
          // write file
          const contents = logToFileContents(logs, filetype);
          const uri = FileSystem.cacheDirectory + `data.${filetype.extension}`;

          console.log(uri);
          console.log(contents);

          await FileSystem.writeAsStringAsync(uri, contents);

          const result = await Share.share({
            title: 'Export',
            message: 'Export your data.',
            url: uri
          }, { tintColor: 'green' });

        } catch (error) {
          console.log("Error in ExportCard:", error);
        }
      }}
    >
      <Text style={styles.text}>{filetype.displayName} (.{filetype.extension})</Text>
    </TouchableOpacity>
  );
}