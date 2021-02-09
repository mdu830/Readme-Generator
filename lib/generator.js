const readMe = (response) => {
return `
# ${response.appTitle}

![license badge](https://img.shields.io/github/license/${response.githubUser}/${response.repoName}?color=green)

### Description: 

<ul>
    ${response.appDetail}
</ul>

### Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Testing](#testing)
* [Contributors](#contributors)
* [License](#License)
    
### Installation:
<ul>
    ${response.appInstall}
</ul>

### Usage:
<ul>
    ${response.appUsage}
</ul>

### License
<ul>
    This application is covered under the ${response.license}
</ul>

### Contributors:

[@${response.appContribute}](https://api.github.com/users/${response.appContribute})

### Testing:
<ul>
    ${response.appTest}
</ul>

### Questions?

If you have any questions, feel free to contact me at:

GitHub: [@${response.githubUser}](https://api.github.com/users/${response.githubUser})

Email: ${response.email}
`}

module.exports = readMe
