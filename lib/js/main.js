// Getting the references
const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
let database = firebase.database().ref() //est a ref to the root of our database

/**
 * Updates the database with the username and message.
 */
function updateDB(event){   //our callback function
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here
    //organize your scheme(structure)
    let value = {
        //make 2 colums 
        NAME: username,
        MESSAGE: message
    }

    //make a row 
    database.push(value);

}

// Set database "child_added" event listener here
database.on("child_added",addMessageToBoard);
// .on is a event listener that listens to when data is added 
// read info from my database 

function addMessageToBoard(rowData) {  //call back function

    let row = rowData.val(); //returns object just like the value
    console.log(row);

    //make a reference to container
    let messageContainer = document.querySelector(".allMessages");
    let newP = document.createElement("p");
    newP.innerText = row.NAME + ": " + row.MESSAGE;
    messageContainer.appendChild(newP);



}