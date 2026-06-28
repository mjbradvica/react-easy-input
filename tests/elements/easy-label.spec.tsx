import { describe, expect, it } from "vitest";
import { EasyLabelHarness } from "./easy-label.harness";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";

describe("label", () => {
  it("for attribute is populated", () => {
    render(<EasyLabelHarness />);

    expect(screen.getByText("my-label")).toHaveAttribute("for");
  });

  it("has static class", () => {
    render(<EasyLabelHarness />);

    expect(screen.getByText("my-label")).toHaveClass("static-class");
  });

  it("on valid, has correct class", async () => {
    const user = userEvent.setup();

    render(<EasyLabelHarness />);

    await user.click(await screen.findByLabelText("my-label"));

    await user.keyboard("123");

    expect(await screen.findByText("my-label")).toHaveClass("static-class");
  });

  it("on invalid, has correct class", async () => {
    const user = userEvent.setup();

    render(<EasyLabelHarness />);

    await user.click(await screen.findByLabelText("my-label"));

    expect(await screen.findByText("my-label")).toHaveClass("invalid-class");
  });
});
