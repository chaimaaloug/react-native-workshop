import { render, screen } from "@testing-library/react-native";
import React from "react";

import Title from "../components/Title";

describe("Title", () => {
  it("renders correctly", () => {
    render(<Title title="SpaceCraft" />);

    screen.getByText("SpaceCraft");
  });
});
