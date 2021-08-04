# Logger TS

- [Typescript] A simple logger implementation with typescript containing two transport method for logging.

## Logger

The Logger takes array of transport in which every logs will be streamed.

## Transport

- Any 'sink' that will take the `logLevel` and `data` to stream it somewhere.

### ConsoleTransport

- Console Transport redirects all logs into console.

### FileTransport

- File Transport redirects all logs into a log file.

## Usage

- For using the logger, we have to make an object of `Logger`. It takes array of transports.

```ts
//Console Logger
const consoleLogger = new Logger([new ConsoleTransport()]);

//File Logger
const fileLogger = new Logger([new FileTransport()]);

//Logging into chain of transport
const logger = new Logger([new ConsoleTransport(), new FileTransport()]);
```

- For logging, we have four types of log level, `error`, `warn`, `info`, `debug`.

```ts
// Takes multiple arguments, (...args: any) => void
logger.error("Error Log");
logger.warn("Warning Log");
logger.info("Info Log");
logger.debug("Debug Log");
```
