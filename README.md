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
