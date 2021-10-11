import React from "react";
import { render } from "@testing-library/react";
import ProfileForm from "./ProfileForm";
import { UserProvider } from "../testUtils";

// This is a place of user input. It needs a lot more testing.

it("matches snapshot", function () {
    const { asFragment } = render(
        <UserProvider>
            <ProfileForm />
        </UserProvider>,
    );
    expect(asFragment()).toMatchSnapshot();
});
