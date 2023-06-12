console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!


function showMeWelcomeMessage(userName, userRole){
  console.log(`Welcome ${userName}!  You are logged in now as ${userRole}. You are logged in now as ${userName}!`);
}

function showErrorMessage(errorMessage){
 console.log(`Login error: ${errorMessage}`);
}

handleUserLogin(showMeWelcomeMessage,showErrorMessage, "Jane Doe");
handleUserLogin(showMeWelcomeMessage,showErrorMessage, "Nikola")
handleUserLogin(showMeWelcomeMessage,showErrorMessage, "Yair")