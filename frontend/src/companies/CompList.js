import React, { useState, useEffect } from "react";
import JoblyApi from "../api/api";
import CompCard from "./CompCard";
import SearchForm from "../common/SearchForm";


/** This is the component that is basically the page at '/companies'
 *  It renders a list of CompCards.
 * 
 * Can be filtered by name of company, via search.
 */
function CompList() {
    const [companies, setCompanies] = useState(null);

    async function getCompanyByName(name) {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies)
    }
    useEffect(function getAllCompanies() {
        getCompanyByName();
    }, []);

    if (!companies) return <div>Loading...</div>;
    return (
        <div className="CompList col-md-8 offset-md-2">
            <SearchForm searchWith={getCompanyByName} />
            {companies.length
                ? (
                    <div className="CompanyList-list">
                        {companies.map(comp => (
                            <CompCard
                                key={comp.handle}
                                handle={comp.handle}
                                name={comp.name}
                                description={comp.description}
                                logoUrl={comp.logoUrl}
                            />
                        ))}
                    </div>
                ) : (
                    <p className="lead">Sorry, no results were found!</p>
                )}
        </div>);
}

export default CompList;
