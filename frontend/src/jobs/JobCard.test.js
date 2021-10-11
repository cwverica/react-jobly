import React from "react";
import { render } from "@testing-library/react";
import JobCard from "./JobCard";
import { UserProvider } from "../testUtils";


it("matches snapshot", function () {
    let item = { title: "Software Dev", salary: 1250000, equity: 5 };
    const { asFragment } = render(
        <UserProvider>
            <JobCard item={item} />
        </UserProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
});
