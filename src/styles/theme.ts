import { DefaultTheme } from "styled-components";

// 파란색 컬러웨이 찾기 ( + 화이트, 블랙 )
const colors = {
  deepnavy: "rgb(3, 10, 46)",
  navy: "rgb(8, 14, 47)",
  yellow: "rgb(245, 196, 67)",
};

// clamp 속성 이용해보기
const fonts = {
  h1: `
    font-family: "SSD";
    font-weight: 800;
    line-height: 1.3;
    font-size: clamp(2.43rem, calc(1.33rem + 5.50vw), 5.25rem);
  `,
  h2: `
    font-family: "SSD";
    font-weight: 800;
    line-height: 1.3;
    font-size: clamp(2.02rem, calc(1.17rem + 4.24vw), 4.20rem);
  `,
  h3: `
    font-family: "SSD";
    font-weight: 700;
    line-height: 1.3;
    font-size: clamp(1.69rem, calc(1.03rem + 3.26vw), 3.36rem);
  `,
  h4: `
    font-family: "SSD";
    font-weight: 800;
    line-height: 1.3;
    font-size: clamp(1.40rem, calc(0.90rem + 2.50vw), 2.69rem);
  `,
  h5: `
    font-family: "SSD";
    font-weight: 400;
    line-height: 1.3;
    font-size: clamp(1.17rem, calc(0.79rem + 1.91vw), 2.15rem);
  `,
  h6: `
    font-family: "SSD";
    font-weight: 500;
    line-height: 1.3;
    font-size: clamp(0.98rem, calc(0.68rem + 1.45vw), 1.72rem);
  `,
  p: `
  font-family: "SSD";
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.1rem;
  font-size: clamp(0.81rem, calc(0.59rem + 1.10vw), 1.38rem);
`,
  span: `
    font-family: "SSD";
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: -0.1rem;
    font-size: clamp(0.68rem, calc(0.51rem + 0.83vw), 1.10rem);
  `,
  button: `
    font-family: "SSD";
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.1rem;
    font-size: clamp(0.81rem, calc(0.59rem + 1.10vw), 1.38rem);
  `,
  button2: `
    font-family: "SSD";
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.1rem;
    font-size: clamp(0.81rem, calc(0.59rem + 1.10vw), 1.38rem);
  `,
};

const theme: DefaultTheme = {
  colors,
  fonts,
};

export default theme;
