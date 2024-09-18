import type { JSONSchema7 } from "json-schema"

/**
 * * Express will always parse request parameters as strings.
 *
 * As a simple work-around, we will validate them as strings containing only number characters
 * which can be tested against the following RegEx: "^[0-9]+$".
 *
 * @see https://stackoverflow.com/questions/18057850/req-params-number-is-string-in-expressjs
 */

export const intentCreateSchema: JSONSchema7 = {
  title: "Create a Stripe payment intent.",
  type: "object",
  required: ["productType", "productId"],
  properties: {
    productType: {
      description: "The type of product being requested.",
      type: "string",
      pattern: "^[A-Za-z]+$",
      minLength: 1,
    },
    productId: {
      description: "The unique identifier of the record being requested.",
      type: "string",
      pattern: "^[0-9]+$",
      minLength: 1,
    },
  },
}
