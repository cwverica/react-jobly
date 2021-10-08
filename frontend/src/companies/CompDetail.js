import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "../api/api";
import JobList from "../jobs/JobList";


/** Company details page.
 *  Shows the information about the company, as well as a list of jobs 
 *  from that company.
 */
function CompDetail() {
    const { handle } = useParams();

    const [company, setCompany] = useState(null);

    useEffect(function getCompanyAndJobs() {
        async function getCompany() {
            setCompany(await JoblyApi.getCompany(handle));
        };
        getCompany();
    }, [handle]);

    if (!company) return <div>Loading...</div>;

    return (
        <div className="CompDetail col-md-8 offset-md-2">
            <h3>{company.name}</h3>
            <p>{company.description}</p>
            <JobList jobs={company.jobs} />
        </div>
    );
}

export default CompDetail;
