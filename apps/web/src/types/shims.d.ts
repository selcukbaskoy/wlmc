// Generic module shims to satisfy TS7016 for JS/JSX modules
declare module "*.js" {
  const value: any;
  export default value;
  export = value;
}

declare module "*.jsx" {
  const value: any;
  export default value;
  export = value;
}


