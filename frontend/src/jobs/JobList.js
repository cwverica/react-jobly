import React, { useState, useEffect } from "react";
import Search from "../common/SearchForm";
import JoblyApi from "../api/api";
import JobCardList from "./JobCardList";

/** Component renders the list of job cards.
 */

function JobList() {
    const [jobs, setJobs] = useState(null);

    async function getJobsByTitle(title) {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    }

    useEffect(function getAllJobsOnMount() {
        getJobsByTitle();
    }, []);

    if (!jobs) return <div>Loading...</div>;

    return (
        <div className="JobList col-md-8 offset-md-2">
            <Search searchWith={getJobsByTitle} />
            {jobs.length
                ? <JobCardList jobs={jobs} />
                : <p className="lead">Sorry, no results were found!</p>
            }
        </div>
    );
}

export default JobList;