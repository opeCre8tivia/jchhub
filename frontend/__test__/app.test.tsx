import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import App from "../src/App"

describe("app", () => {
  it("vitest set up is correct", () => {
    expect(1 + 1).toEqual(2)
  })

  it("App renders correctly", () => {
    render(<App />)
    screen.debug()
  })
})
