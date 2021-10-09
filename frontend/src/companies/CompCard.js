import React from "react";
import { Link } from "react-router-dom";
import './CompCard.css'

/** Component renders a card with limited info about a company.
 * Used by CompList.
 */

function CompCard({ name, description, logoUrl, handle }) {


    return (
        <Link className="CompCard card" to={`/companies/${handle}`}>
            <div className="card-body">
                <h6 className="card-title">
                    {name}
                    {logoUrl &&
                        <img src={logoUrl} alt={name} className="float-right ml-5" />}
                </h6>
                <p><small>{description}</small></p>
            </div>
        </Link>
    );
}

export default CompCard;
