#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

async function createProject() {
    const args = process.argv.slice(2);
    const projectName = args[0];

    if (!projectName) {
        console.error('Please provide a project name.');
        console.error('Usage: create-my-app <project-name>');
        process.exit(1);
    }

    const projectDir = path.resolve(process.cwd(), projectName);

    try {
        await fs.mkdir(projectDir);
        console.log(`Created directory: ${projectDir}`);

        // index.html
        const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${projectName}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Welcome to ${projectName}!</h1>
</body>
</html>`;
        await fs.writeFile(path.join(projectDir, 'index.html'), indexHtml);
        console.log('Created index.html');

        // style.css
        const styleCss = `body {
    font-family: sans-serif;
    margin: 0;
    padding: 2rem;
    background-color: #f0f0f0;
}

h1 {
    color: #333;
}`;
        await fs.writeFile(path.join(projectDir, 'style.css'), styleCss);
        console.log('Created style.css');

        // .gitignore
        const gitignore = `node_modules/
.DS_Store
dist/
.env`;
        await fs.writeFile(path.join(projectDir, '.gitignore'), gitignore);
        console.log('Created .gitignore');

        console.log(`\nSuccess! Project ${projectName} created.`);
        console.log(`cd ${projectName}`);
    } catch (error) {
        if (error.code === 'EEXIST') {
            console.error(`Directory ${projectName} already exists.`);
        } else {
            console.error('Error creating project:', error);
        }
    }
}

createProject();
