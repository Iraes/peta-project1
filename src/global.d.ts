 declare module '*.scss' {
  interface IClassNames {
    [ClassName: string]: string
  }
  const classNames: IClassNames;
  export = classNames;
 }