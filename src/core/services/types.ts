export type GetConfig = () => Promise<{
  publishableKey: string | null
}>

export type CreatePayment = () => Promise<{
  clientSecret: string | null
}>
