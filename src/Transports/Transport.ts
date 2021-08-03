import { LogLevels } from "../utils/LogLevels";

export interface Transport {
  log: (level: LogLevels, data: any) => void;
}
