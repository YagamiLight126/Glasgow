export interface ErrorMessage {
  message: string;
  stack: Array<{
    line: number;
    column: number;
    filename: string;
  }>;
}

export function parseError(err: Error) {
  const result: ErrorMessage = { message: "", stack: [] };
  const stack = err.stack;

  if (stack) {
    const message = stack?.match(/(?<=\S*Error:\s)\D*(?=\n)/g);
    result.message = message ? message[0] : "";
    const legalStrings = stack.match(/https?.*\d/gm);

    const getResultStack = (s: string) => {
      const a = /(https?:.*js):(\d*):(\d*)/g.exec(s);
      a &&
        result.stack.push({
          filename: a[1],
          line: Number(a[2]),
          column: Number(a[3]),
        });
    };

    legalStrings?.forEach(getResultStack);
  }

  return result;
}
