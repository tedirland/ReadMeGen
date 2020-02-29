const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

function init() {

inquirer.prompt([
    {
        type: "input",
    message:"Enter Your GitHub username",
    name: "username"
    },
    {
        type: "list",
        message: "What is your favorite color?",
        name: "color",
        choices: [
            "green",
            "blue",
            "pink",
            "red",

        ]
    }
])
.then(function({username}) {
    const queryUrl = `https://api.github.com/users/${username}`;

    axios.get(queryUrl).then(function(res){
        console.log(res);
        const userImage = res.data.avatar_url // Profile Img
        const githubUserName = res.data.login // Username
        const userLocation = res.data.location // Location
        const userBlog= res.data.blog // Blog Link
        const userBio = res.data.bio // Bio
        const userRepos = res.data.public_repos // Public Repos
        const userFollowers = res.data.followers // Follower 
        const userFollowing =res.data.following // Following
    })
})
}

module.exports(init);