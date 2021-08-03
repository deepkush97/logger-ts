import { createWriteStream, WriteStream, existsSync, mkdirSync } from "fs";
import { EOL } from "os";
import path from "path";
import { format } from "util";
import { LogLevels } from "../utils/LogLevels";
import { Transport } from "./Transport";

export class FileTransport implements Transport {
  _fileStream: WriteStream;
  constructor() {
    const logPath = path.join(process.cwd(), "logs");

    if (!existsSync(logPath)) {
      mkdirSync(logPath, {
        recursive: true,
      });
    }
    this._fileStream = createWriteStream(
      path.join(
        logPath,
        `log-${new Date()
          .toISOString()
          .slice(0, 19)
          .replace("T", "-")
          .replace(/:/g, "-")}.log`
      ),
      {
        flags: "a",
      }
    );

    this.log(
      LogLevels.INFO,
      `------------- ${new Date().toISOString()} -------------`
    );
  }

  log = (level: LogLevels, data: any) => {
    this._fileStream.write(format(level, ...data) + EOL);
  };
}
