import { describe, it, expect } from "vitest"

import { validateEmail, obfuscateEmail } from "./string.helpers.js"

describe("validateEmail", () => {
  it("should return true when passing a valid email address", () => {
    expect(validateEmail("a@b.c")).toBe(true)
    expect(validateEmail("test@tester.com")).toBe(true)
    expect(validateEmail("123$abc@nom.z")).toBe(true)
  })

  it("should return false when passing an invalid email address", () => {
    expect(validateEmail("a.b.c")).toBe(false)
    expect(validateEmail("a@b-c")).toBe(false)
    expect(validateEmail("a@bc")).toBe(false)
  })
})

describe("obfuscateEmail", () => {
  it("should return the masked email to a given fixed length", () => {
    expect(obfuscateEmail("t@test.com")).toBe(null)
    expect(obfuscateEmail("te@test.com")).toBe(null)
    expect(obfuscateEmail("tes@test.com")).toBe("te***s@test.com")
    expect(obfuscateEmail("test@test.com")).toBe("te***t@test.com")
    expect(obfuscateEmail("tester@test.com")).toBe("te***r@test.com")
  })

  it("should return null when given bad inputs", () => {
    expect(obfuscateEmail("a")).toBe(null)
    expect(obfuscateEmail("a@b.c")).toBe(null)
    expect(obfuscateEmail("a-b.c")).toBe(null)
  })
})
