/* eslint-disable import/no-default-export */

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.scss' {
  const content: any;
  export default content;
}
