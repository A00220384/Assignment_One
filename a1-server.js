/**a1-server.js
 * 
 * A simple http server for students assignment one
 * Experiementing with debug messaging.
 * 
 * 
 */
 
// Import the HTTP module. 
var http = require('http');

// Get the ip address and port number the server listens on
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

// Set up some program variables (global) for our maths problem
var augend = 6;
var addend = 3;
var sum;

// We will use a remote console logging service for debug messages
// Define the service variable and connnect
// You must edit <<<change_to_your_repo_name>>> to be your repository name
var consolere = require('console-remote-client').connect('console.re','80','<<<A00220384>>>');

// Function to handle web browser requests and server responses
function handleRequest(request, response){
    // A small maths problem - Add the augend and the addend to get the sum
    sum = augend * addend;
    // Send user the server response 
    response.end('Assignment One. Expected Sum of 6 + 3 is 9, Actual Sum returned by program is  this: ' + sum);
    
    // ASSIGNMENT
    // 1. Add a debug message which ouputs the sum of the simple equation above. Values are available in the augend, addend 
    // and sum (global) variables
    console.log("The output of sum will be 18." );
    console.log("The operator is incorrect instead of adding the two variable the program instead multiplies the by one another." );
    // 2. Add a debug message which ouputs the current values of the augend addend and sum variables
    console.log("The current value of augend is 6");
    console.log("The current value of addend is 3");
    console.log("The current value of sum is 18");
    
}

// Create an instance of a http server
var server = http.createServer(handleRequest);

// Lets start our server
server.listen(server_port, server_ip_address, function(){
    // This is the callback function which triggered when server is successfully listening (active).
    
    // ASSIGNMENT
    // 3. Add a debug message which ouputs a message indicating the server is started (listening for user requests).
    //console.warn("Server is starting and listening for user requests");
    // 4. Add a debug message which ouputs your server ip address and your server port number. Your server ip address 
    // and your server port number values are available in the server_ip_address and server_port program global variables
    console.log("server_port is 8080. server_ip_address is 127.0.0.1")
});
