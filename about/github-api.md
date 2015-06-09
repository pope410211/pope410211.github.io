## READING API's

1. How does API handle authentication?
    * Do I need to authenticate?
    * What can I do with an unauthenticated request?
    * How can I authenticate my request? (3-ways)
2. How do I ask API for information..
    * The profile information for a specific user?
    * The repository listing for a specific user?
    * The recent, public activity for a specific user?
3. Is there a limit to the number of request I can make?
    * Is there a way of extending that limit?
    * What happens when I hit the limit?
4. What if there is a lot of data returned?
    * How can I ask for more (or less) data from a request?
    * How do I know that there is more data available?


## PT.1 First Question
1. API's will handle authentication in a few different ways, some examples are:
        * Basic Authentication - UserName and Password
        * OAuth2 Token (sent in a header)
        * OAuth2 Token (sent as a parameter)
        * OAuth2 Key/Secret - Should only be used in server to server scenario (further review needed).
        * Failed login limit
    * You need to authenticate when using  API to verify you have the proper rights to access the information.
    * An unauthenticated request will send the request to a server, and bounce back with what,
    if any, authentication is needed. (usually Basic).
    * Basic Authentication, OAuth2 Token, & OAuth2 Key/Secret.

## PT.2 Second Question
2. You send Reqests to the server for the information.
    * For Profile Info, a Basic Authentication with a JSON file returned.
    * Patch

## PT.3 Third Question
3. Yes, there is a limit to the number of requests you can make, and depend on the typy of reqs. made.
    * Yes there is a way of extending the the limit. You would need to pass your app's client
    ID & Secret as a part of a query string. (**NOTE**: For security reasons this should only be done
      server to server).
    * When you hit your limit, you will receive an error response. However you can check your
    rate limit status without incurring an API hit.

## PT.4 Fourth Question
4. If there is too much data (default is 30 items) returned you can do the following:
    * You can specify further pages with the `?page` parameters. For some resources,
    you can also set a custom page size up to 100 pages with the `?per_page` parameter.
    * To find out if there is further information to gather, you can use the `rel` values,
    next - to see if there is a next page, & last - to see if there is a previous page.
