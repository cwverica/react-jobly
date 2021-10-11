import React from "react";
import { render } from "@testing-library/react";
import CompList from './CompList'

it("matches snapshot", function () {
    const { asFragment } = render(<CompList />);
    expect(asFragment()).toMatchSnapshot();
});
