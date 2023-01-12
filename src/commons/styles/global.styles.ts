import { css } from "@emotion/react";

const globalStyles = css`
@import url("https://fonts.googleapis.com/css2?family=Jua&display=swap");
*,
*::after,
*::before {
  box-sizing: border-box;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
* {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui,
  Roboto, Helvetica Neue, Segoe UI, Apple SD Gothic Neo, Noto Sans KR,
  Malgun Gothic, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
  sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
button {
  cursor: pointer;
  border: none;
  background-color: white;
}
a {
  outline: none;
  color: inherit;
  text-decoration: none;
}
html {
  font-size: 16px;
}
html,
body {
  padding: 0;
  margin: 0;
  scroll-behavior: smooth;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

.ql-editor {
  min-height: 600px;
}

`;

export default globalStyles;
