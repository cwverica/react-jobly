import axios from "axios";
import { list } from "tar";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }


  /** Get a list of listType, with optional filters.
   *  @param listType can be either 'companies' or 'jobs'
   *  @param filters is an object (optional).
   *    - If listType is 'jobs' filters can contain: 'hasEquity', 'minSalary', 'title'
   *    - If listType is 'companies' filters can contain: 'minEmployees', 'maxEmployees', 'name'
   * 
   *  @returns array of listType
   */

  static async getList(listType, filters = false) {

    if (!listType) {
      return console.error(`listType must be defined, either 'companies' or 'jobs'`)
    } else if (listType !== 'companies' && listType !== 'jobs') {
      return console.error(`listType: ${listType} is not acceptable`);
    }
    let reqString = `${listType}/?`;

    if (filters) {
      for (const [key, val] of Object.entries(filters)) {
        reqString = reqString + `${key}=${val}&`
      }
    }
    reqString = reqString.slice(0, -1);

    let res = await this.request(reqString)
    if (listType === 'companies') {
      return res.companies;
    } else if (listType === 'jobs') {
      return res.jobs;
    }

    // to have an definitively reachable return, to make the linter happy.
    return console.alert("I don't know how you're seeing this.")
  }

}

// for now, put token ("testuser" / "password" on class)
JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;