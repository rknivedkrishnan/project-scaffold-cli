# Project Scaffold CLI

A simple yet powerful CLI tool to instantly scaffold your "Daily Driver" web projects.

`create-my-app` generates a clean, ready-to-run folder structure with `index.html`, `style.css`, and `.gitignore`, saving you from repetitive setup.

## Features

- 🚀 **Instant Setup**: Create a new project in seconds.
- 📦 **Node.js Powered**: Built on standard Node.js libraries.
- 🛠️ **Customizable**: Edit the templates in `bin/cli.js` to match your preferences.
- 🌐 **Web Ready**: Includes a responsive HTML boilerplate and CSS reset.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/)

## Installation

Since this is a local tool for now, you can link it globally on your machine:

1. Clone or download this repository.
2. Navigate to the project directory:
   ```bash
   cd project-scaffold-cli
   ```
3. Link the package globally:
   ```bash
   npm link
   ```

Now you can run `create-my-app` from anywhere in your terminal!

## Usage

Create a new project by running:

```bash
create-my-app <project-name>
```

Example:
```bash
create-my-app my-awesome-idea
cd my-awesome-idea
```

This will create a folder named `my-awesome-idea` with the following structure:

```
my-awesome-idea/
├── .gitignore
├── index.html
└── style.css
```

## Contributing

Contributions are welcome! If you have ideas for new features or improvements, feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
