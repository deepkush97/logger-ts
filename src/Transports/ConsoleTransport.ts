import { format } from "util";
import { LogLevels } from "../utils/LogLevels";
import { Transport } from "./Transport";
import { colorString } from "../utils";

export class ConsoleTransport implements Transport {
  log = (level: LogLevels, data: any) => {
    let coloring: (message: string) => void;
    switch (level) {
      case LogLevels.ERROR:
        coloring = colorString.redColor;
        break;
      case LogLevels.WARN:
        coloring = colorString.yellowColor;
        break;
      case LogLevels.DEBUG:
        coloring = colorString.greenColor;
        break;
      case LogLevels.INFO:
      default:
        coloring = colorString.blueColor;
    }
    console.log(format(coloring(level), ...data));
  };
}
