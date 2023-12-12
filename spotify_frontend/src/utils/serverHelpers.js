
import { backendUrl } from './config'

// FETCH API'S GET AND POST METHOD DO THE EXACT SAME WORK THAT POSTMAN DID. THEY ARE DIFFERENT FROM ROUTER.GET AND ROUTER.POST IN THE BACKEND
// THESE FUNCTIONS DO THE EXACT SAME WORK THAT POSTMAN DID
// fetch(api) triggers the api route which cause the router.get(api) or router.post(api) to run in the backend and get/post data
// fetch also passes a body (in method: POST) which transforms into req.body int the backend

//In summary, the Fetch API's POST method in the frontend is used to send data from the client to the server, 
//while the router.post method in the backend is used to define the server's behavior when it receives a POST request on a specific route. 
//Together, they facilitate communication between the client and server, allowing for the exchange of data and 
//the execution of server-side logic in response to client actions.
export const makeUnauthenticatedPOSTRequest = async(route,body) => {
   const response = await fetch(backendUrl + route, {
    method: 'POST',
    headers: {
        "Content-Type" : "application/json"
    },
    body: JSON.stringify(body),
   });

   const formattedResponse= await response.json();
   return formattedResponse;
}
//Difference betweeen authorized and unauthorized post request is that in authorized post request we also pass the Bearer token of the logged
//in user by extracting the token from the cookies.
export const makeAuthenticatedPOSTRequest = async(route,body) => {
    const token= getToken();
    const response = await fetch(backendUrl + route, {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
       });
    
       const formattedResponse= await response.json();
       return formattedResponse;
    
 }

 export const makeAuthenticatedGETRequest = async(route) => {
    const token= getToken();
    const response = await fetch(backendUrl + route, {
        method: 'GET',
        headers: {
            "Content-Type" : "application/json",
            Authorization: `Bearer ${token}`,
        },
       });
    
       const formattedResponse= await response.json();
       return formattedResponse;
    
 }
 
 
//Extracting the tooken stored in the Cookies section of the react website
const getToken = () => {
    const accessToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
    return accessToken;
};


