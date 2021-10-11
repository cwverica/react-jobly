import React from "react";
import { render } from "@testing-library/react";
import CompCard from './CompCard'
import { MemoryRouter } from "react-router";

it("matches snapshot with logo", function () {
    const { asFragment } = render(
        <MemoryRouter>
            <CompCard
                handle="facebook"
                name="Facebook"
                description="Data mine the planet and feed people ridiculous false information."
                logo_url="https://facebookbrand.com/wp-content/uploads/2019/10/Banner-FB-APP.jpg?w=525&h=300"
            />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});

it("matches snapshot without logo", function () {
    const { asFragment } = render(
        <MemoryRouter>
            <CompCard
                handle="myspace"
                name="mySpace"
                description="Poor Tom just wanted to make some friends."
            />
        </MemoryRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
});
