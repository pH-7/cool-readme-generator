const { url: gravatarUrl } = require('gravatar');

const GRAVATAR_SIZE = 200;

function getLicenseLink({ license }) {
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';

    case 'GPL':
      return 'https://www.gnu.org/licenses/gpl.html';

    case 'ISC':
      return 'https://opensource.org/licenses/ISC';

    case 'MPL':
      return 'https://www.mozilla.org/en-US/MPL/';

    case 'AGPL':
      return 'https://www.gnu.org/licenses/agpl.html';

    default:
      return 'https://opensource.org/licenses/';
  }
}

function generateVideo({ youtube_id, name }) {
  if (youtube_id) {
    return `
### Video - ${name}
[![Youtube Video, how to use ${name}](https://img.youtube.com/vi/${youtube_id}/0.jpg)](https://www.youtube.com/watch?v=${youtube_id})
`;
  }

  return '';
}

function generateMarkdown(data) {
  const video = generateVideo(data);
  const profilePhotoUrl = gravatarUrl(data.email, { protocol: 'https', s: GRAVATAR_SIZE });
  const licenseLink = getLicenseLink(data);

  return ` 
# ${data.name}

### *${data.heading}*

## 📄 Description
${data.description}


## ⚙️ Requirements
${data.requirements}


## 🎮 Usage
${data.usage}

${video}

## 😋 Who cooked it?

[![${data.author}](${profilePhotoUrl})](${data.website} "${data.author} personal website")


[![@${data.twitter}][twitter-image]](https://twitter.com/${data.twitter}) [![${data.github}][github-image]](https://github.com/${data.github})

**[${data.author}](${data.website})**, a highly passionate, zen &amp; pragmatic software engineer 😊


## ⚖️ License

**${data.name}** is generously distributed under the *[${data.license}](${licenseLink})*.


<!-- GitHub's Markdown reference links -->
[twitter-image]: https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white
[github-image]: https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white

<!-- README generated with: https://github.com/pH-7/cool-readme-generator -->
`;
}

module.exports = generateMarkdown;
