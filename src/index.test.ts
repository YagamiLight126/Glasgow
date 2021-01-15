import { parseError, ErrorMessage } from "./index";

const fixtureStack = `Error raised
  at bar http://192.168.31.8:8000/c.js:2:9
  at foo http://192.168.31.8:8000/b.js:4:15
  at calc http://192.168.31.8:8000/a.js:4:3
  at <anonymous>:1:11
  at http://192.168.31.8:8000/a.js:22:3
`;
const chromeExpect: ErrorMessage = {
  message: "Error raised",
  stack: [
    {
      filename: "http://192.168.31.8:8000/c.js",
      line: 2,
      column: 9,
    },
    {
      filename: "http://192.168.31.8:8000/b.js",
      line: 4,
      column: 15,
    },
    {
      filename: "http://192.168.31.8:8000/a.js",
      line: 4,
      column: 3,
    },
    {
      filename: "http://192.168.31.8:8000/a.js",
      line: 22,
      column: 3,
    },
  ],
};

const fixtureFirefoxStack = `
  bar@http://192.168.31.8:8000/c.js:2:9
  foo@http://192.168.31.8:8000/b.js:4:15
  calc@http://192.168.31.8:8000/a.js:4:3
  <anonymous>:1:11
  http://192.168.31.8:8000/a.js:22:3
`;
const fireFoxExpect: ErrorMessage = {
  message: "",
  stack: [
    {
      filename: "http://192.168.31.8:8000/c.js",
      line: 2,
      column: 9,
    },
    {
      filename: "http://192.168.31.8:8000/b.js",
      line: 4,
      column: 15,
    },
    {
      filename: "http://192.168.31.8:8000/a.js",
      line: 4,
      column: 3,
    },
    {
      filename: "http://192.168.31.8:8000/a.js",
      line: 22,
      column: 3,
    },
  ],
};

describe("测试错误转化函数", () => {
  it("测试Chrome的错误信息转换", () => {
    expect(parseError(new Error(fixtureStack))).toMatchObject(chromeExpect);
  });
  it("测试Firefox的错误信息转换", () => {
    expect(parseError(new Error(fixtureFirefoxStack))).toMatchObject(
      fireFoxExpect
    );
  });
});
