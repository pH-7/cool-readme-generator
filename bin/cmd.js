#!/usr/bin/env node

const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const README_FILENAME = 'README.md';

const generateMarkdown = require('./markdownGenerator');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'README Heading',
      name: 'heading',
    },
    {
      type: 'input',
      message: 'Project description',
      name: 'description',
    },
    {
      type: 'input',
      message: 'YouTube Video ID? (optional)',
      name: 'youtube_id',
    },
    {
      type: 'input',
      message: 'Installation requirements?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How to use it?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Your Full Name?',
      name: 'author',
      default: 'Pierre-Henry Soria',
    },
    {
      type: 'input',
      message: 'Your Email?',
      name: 'email',
      default: 'hi@ph7.me',
    },
    {
      type: 'input',
      message: 'Your Twitter username?',
      name: 'twitter',
      default: 'phenrysay',
    },
    {
      type: 'input',
      message: 'Your Personal Webpage?',
      name: 'website',
      default: 'https://ph7.me',
    },
    {
      type: 'input',
      message: 'GitHu account?',
      name: 'github',
      default: 'pH-7',
    },
    {
      type: 'list',
      message: 'License?',
      name: 'license',
      choices: ['MIT', 'ISC', 'MPL', 'GPL', 'AGPL'],
      default: 'MIT',
    },
  ])
  .then((data) => {
    const fullReadmePath = path.resolve(__dirname, `../${README_FILENAME}`);

    fs.writeFile(fullReadmePath, generateMarkdown(data), (err) =>
      err
        ? console.log(err)
        : console.log(`Your ${README_FILENAME} has been generated at: ${fullReadmePath}! 🚀`)
    );
  });
