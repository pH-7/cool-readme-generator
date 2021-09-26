function generateVideo({ youtube_id, heading }) {
  if (youtube_id) {
    return `
### Video - ${heading}
[![Youtube Video, how to use ${heading}](https://img.youtube.com/vi/${youtube_id}/0.jpg)](https://www.youtube.com/watch?v=${youtube_id})
`;
  }

  return '';
}

function generateMarkdown(data) {
  const video = generateVideo(data);

  return ` 
# ${data.heading}

## 📄 Description
${data.description}


## 🛠 Installation
${data.installation}


## 🎮 Usage
${data.usage}

${video}

## 😋 Who cooked it?

[![${data.author}](https://avatars0.githubusercontent.com/u/1325411?s=200)](${data.website} "${data.author} personal website")


[![@${data.twitter}][twitter-image]](https://twitter.com/${data.twitter}) [![${data.github}][github-image]](https://github.com/${data.github})

**[${data.author}](${data.website})**, a highly passionate, zen &amp; pragmatic software engineer 😊


## ⚖️ License

Generously distributed under the *${data.license}*


<!-- GitHub's Markdown reference links -->
[twitter-image]: https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
[github-image]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
`;
}

module.exports = generateMarkdown;
