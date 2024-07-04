import type { Request, NextFunction } from "express"

// Types
import type { ControllerResponse } from "@api/controllers/types.js"
import type { ProductType } from "@ts/products.types.js"
import type { ProductDTO, AdventureDTO } from "@services/dtos/products.dtos.js"

// Products
export type ProductsGetByTypeAndIdRequest = Request<
  unknown,
  unknown,
  unknown,
  {
    type: ProductType
    id: string
  }
>
export type ProductsGetByTypeAndIdResponse = ControllerResponse<{
  product: ProductDTO | null
}>

export type ProductsGetByTypeAndId = (
  req: ProductsGetByTypeAndIdRequest,
  res: ProductsGetByTypeAndIdResponse,
  next: NextFunction
) => Promise<ProductsGetByTypeAndIdResponse | void>

// Adventures
export type AdventuresGetByIdRequest = Request<{
  id: string
}>
export type AdventuresGetByIdResponse = ControllerResponse<{
  adventure: AdventureDTO | null
}>

export type AdventuresGetById = (
  req: AdventuresGetByIdRequest,
  res: AdventuresGetByIdResponse,
  next: NextFunction
) => Promise<AdventuresGetByIdResponse | void>
