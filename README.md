# Webpack Starter

This is a basic starter repository for webpack. 

## Features

This is purely a template for webpack featureset. The implemented features are:

**Development Environment:**

- Mode set to "development"
- Source maps enabled using "eval-source-map"

**Entry/Output Configuration:**

- Entry point: "./src/index.js"
- Output: Bundled into "main.js" in the "dist" directory
- Clean build: Previous builds are cleared

**Development Server:**

- Watching template file: "./src.template.html"

**Plugins:**

- HtmlWebpackPlugin - generates HTML file from template at "./src/template.html"

**Module Rules:**

- CSS Processing
- Handles .css files
- Uses style-loader and css-loader
- HTML Processing
- Processes .html files using html-loader
- Asset Management
- Images (.png, .svg, .jpg, .jpeg, .gif)
- Fonts (.woff, .woff2, .eot, .ttf, .otf)
- Both handled as resource assets

## Tech Stack

This is a relatively simple project, and the following was used:

- Javascript (plain old vanilla js)
- HTML & CSS
- Webpack (and associated plugins)

## License

*Copyright belongs to James Johns.*

[MIT License](https://github.com/nahmanmate/webpack-starter/blob/main/LICENSE).
