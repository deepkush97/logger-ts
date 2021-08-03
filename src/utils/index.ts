export const colorString = {
  redColor: (message: string) => `\x1b[31m${message}\x1b[0m`,
  greenColor: (message: string) => `\x1b[32m${message}\x1b[0m`,
  yellowColor: (message: string) => `\x1b[33m${message}\x1b[0m`,
  blueColor: (message: string) => `\x1b[34m${message}\x1b[0m`,
};
