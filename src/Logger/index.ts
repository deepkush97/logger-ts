import { Transport } from "../Transports/Transport";
import { EventEmitter } from "events";
import { LogLevels } from "../utils/LogLevels";

export class Logger {
  private _transports: Transport[];
  private _emitter: EventEmitter;
  constructor(transports: Transport[]) {
    this._transports = transports;
    this._emitter = new EventEmitter();
    this._transports.forEach((transport) => {
      this._emitter.on("log", transport.log);
    });
  }

  private log = (level: LogLevels, args: any) => {
    this._emitter.emit("log", level, args);
  };

  warn = (...args: any) => this.log(LogLevels.WARN, args);
  debug = (...args: any) => this.log(LogLevels.DEBUG, args);
  info = (...args: any) => this.log(LogLevels.INFO, args);
  error = (...args: any) => this.log(LogLevels.ERROR, args);
}
