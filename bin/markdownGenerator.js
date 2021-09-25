function generateMarkdown(data) {
    return ` 
# ${data.heading}


## 📄 Description
${data.description}


## 🛠 Installation
${data.installation}


## 🎮 Usage
${data.usage}


## 😋 Who cooked it?

[![Pierre-Henry Soria](https://avatars0.githubusercontent.com/u/1325411?s=200)](${data.website} "My personal website :-)")


[![@${data.twitter}][twitter-image]](https://twitter.com/${data.twitter}) [![${data.github}][github-image]](https://github.com/${data.github})

**[Pierre-Henry Soria](${data.website})**, a highly pragmatic passionate, zen &amp; cool software engineer 😊


## ⚖️ License

Generously distributed under the *${data.license}*


<!-- GitHub's Markdown reference links -->
[twitter-image]: https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
[github-image]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
`
}

module.exports = generateMarkdown;
