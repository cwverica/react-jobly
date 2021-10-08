import React, { useContext, useState } from "react";

/** Show limited information about a job.
 *
 * Is rendered by JobCardList to show a "card" for each job.
 */

function JobCard({ id, title, salary, equity, companyName }) {


    return (
        <div className="JobCard card">
            <div className="card-body">
                <h6 className="card-title">{title}</h6>
                <p>{companyName}</p>
                {salary && <div><small>Salary: {formatSalary(salary)}</small></div>}
                {equity !== undefined && <div><small>Equity: {equity}</small></div>}
            </div>
        </div>
    );
}

/** Render integer salary like '$1,250,343' */

function formatSalary(salary) {
    const digitsRev = [];
    const salaryStr = salary.toString();

    for (let i = salaryStr.length - 1, j = 1; i >= 0; i--) {
        digitsRev.push(salaryStr[i]);
        if (i - 1 >= 0) {
            if (j > 0 && j % 3 === 0) digitsRev.push(",");
        };
        j++;
    }
    digitsRev.push("$");

    return digitsRev.reverse().join("");
}


export default JobCard;
