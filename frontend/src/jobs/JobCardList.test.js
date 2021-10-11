import React from "react";
import { render } from "@testing-library/react";
import JobCardList from "./JobCardList";
import { UserProvider } from "../testUtils";

it("matches snapshot", function () {
    let jobs = [
        { title: "Software Dev", salary: 1250000, equity: 5 },
        { title: "Project Manager", salary: 1750000, equity: 15 },

    ];
    const { asFragment } = render(
        <UserProvider>
            <JobCardList jobs={jobs} />
        </UserProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
});