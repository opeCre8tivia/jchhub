import React from "react"
import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import App from "../src/App"

describe("app", () => {
  it("App renders correctly", () => {
    render(<App />)
    const appComponent = screen.findByTestId("app")
    expect(appComponent).toBeTruthy()
  })
})
