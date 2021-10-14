# react-jobly

This is a website for finding companies and jobs. [^1] 

It is built on a React front-end and a RESTful API to connect to a PostgreSQL back-end.

### Front-end
If run locally, the front end will be accessible on localhost at [port: 3000](http://127.0.0.1:3000)

Front end is designed with React components, including custom hooks, and context.


### Back-end
If run locally, the back end will be accessible on localhost at [port: 3001](http://127.0.0.1:3001)

Back end is developed using an Express server.  
You will have to seed the database with the provided sql files.

`psql \i jobly.sql`


___

If it's run locally, you will need to run two separate servers to access everything.  
There is a version that is **Deployed at:** [cwv-jobly.surge.sh](https://cwv-jobly.surge.sh/)

[^1]: All the data is generated, none of it is real, don't *actually* look for a job here.
