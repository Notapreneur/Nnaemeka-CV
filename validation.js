// function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var title = document.contactForm.title.value;
    var message = document.contactForm.message.value;

    // Defining error variables with a default value
    var nameErr = emailErr = titleErr = messageErr = submitErr = true;

    // Validate name
    if(name == "") {
       printError("nameErr", "Please enter your name");
       
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else if (name.length < 4) {
            printError("nameErr", "Name must have a minimum of 4 characters");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // validate email
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // validate message
    if(message == "") {
        printError("messageErr", "Please enter your message");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("messageErr", "Please enter a valid name");
        } else if (name.length < 4) {
            printError("messageErr", "Message must have a minimum of 20 characters");
        } else {
            printError("messageErr", "");
            nameErr = false;
        }
    }

     // Prevent the form from being submitted if there are any errors
     if((nameErr || emailErr || titleErr || messageErr ) == true) {
        return false;
     }

     if(!(nameErr || emailErr || titleErr || messageErr ) == true) {
        printError("submitErr", "Your message has been sent successfully.");
     }
    }