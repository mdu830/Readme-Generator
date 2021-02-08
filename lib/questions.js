const questions = [
    {
        type: "input",
        message: "What would you like the readme title to be?",
        name: "appTitle",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You need to have a name for your readme title.");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Please write a discription of your application.",
        name: "appDetail",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must have a description for your project");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Please explain the steps to install the appilcation.",
        name: "appInstall",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must explain how to install your application");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Please explain the usage of your application.",
        name: "appUsage",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("There was nothing entered for the usage");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "Do you have any contributors you would like to mention(github username)?",
        name: "appContribute",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must name atleast one contributor for your project.");
            }
            return true;
        }
    },
    {
        type: "input",
        message: "How would you test your application to make sure it was working?",
        name: "appTest",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must explain how to test your application (to make sure it is operating properly).");
            }
            return true;
        }
    },
    {
        type: "input", 
        message: "what is your Github username?",
        name: "githubUser",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a valid Github username.");
            }
            return true;
        }
    },
    {
        type: "input", 
        message: "what is your Email address?",
        name: "email",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a valid email address");
            }
            return true;
        }
    },
    {
        type: "input", 
        message: "what is the name of the github repository for this project?",
        name: "repoName",
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a valid Github repo for this username.");
            }
            return true;
        }
    },
    {
        type: "list", 
        message: "what license did you choose for your project? (same as when repo was created)",
        name: "license",
        // choices:,
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a valid license.");
            }
            return true;
        }
    }
    
]

module.exports = questions