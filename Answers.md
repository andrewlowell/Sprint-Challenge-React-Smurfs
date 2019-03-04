1.  Explain the differences between `client-side routing` and `server-side routing`.
  The main difference is that in server-side routing, the website has to make an HTTP request to the server each time a new route is called, and the server decides which page to serve up by processing the route. Client-side routing allows that decision-making to happen in the app loaded to the browser, so it's unneccessary to make an expensive, time-consuming HTTP request all the way back to the server, and the client can make AJAX requests to only get the data that is needed without reloading data that already exists.

2.  What does HTTP stand for?
  Hyper text transfer Protocol

3.  What does CRUD stand for?
  Create, read, update, destroy

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
  POST, GET, PUT, DELETE

5.  Mention three tools we can use to make AJAX requests
  Axios library, browser fetch() api, erm, jQuery?