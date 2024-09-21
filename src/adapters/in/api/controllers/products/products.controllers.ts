// Types
import { ProductType } from "@ts/products.types.js"
import type { ProductsGetByTypeAndId } from "./types.js"

// Services
import { ProductsServiceImpl } from "@services/products/products.services.js"

// Helpers
import { HttpError } from "@helpers/error.helpers.js"

const productsService = new ProductsServiceImpl()

export const productsGetByTypeAndId: ProductsGetByTypeAndId = async (
  req,
  res,
  next
) => {
  const { type, id } = req.query

  const parsedProductId = parseInt(id, 10)

  if (!Object.values(ProductType).includes(type)) {
    return next(new HttpError("BadRequest"))
  }

  try {
    const product = await productsService.getByTypeAndId({
      type,
      id: parsedProductId,
    })

    if (!product) {
      return next(new HttpError("NotFound"))
    }

    return res.status(200).json({
      ok: true,
      data: {
        product,
      },
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return next(error)
    }

    next(new HttpError("InternalServerError"))
  }
}
