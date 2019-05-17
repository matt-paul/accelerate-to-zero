declare module "*.gif"

declare module "*.svg" {
  const content: any
  export default content
}
