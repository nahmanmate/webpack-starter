import "./styles.css";
import { greeting } from "./greeting.js";

const body = document.querySelector("body");

// Create header with theme toggle
const createHeader = () => {
    const header = document.createElement("header");
    
    // Create theme toggle switch
    const themeToggle = document.createElement("label");
    themeToggle.className = "theme-toggle";
    
    const toggleInput = document.createElement("input");
    toggleInput.type = "checkbox";
    toggleInput.id = "theme-toggle";
    
    const slider = document.createElement("span");
    slider.className = "slider";
    
    // Add sun and moon icons
    const sunIcon = document.createElement("span");
    sunIcon.className = "icon sun-icon";
    sunIcon.innerHTML = "☀️";
    
    const moonIcon = document.createElement("span");
    moonIcon.className = "icon moon-icon";
    moonIcon.innerHTML = "🌙";
    
    // Assemble the toggle
    themeToggle.appendChild(toggleInput);
    themeToggle.appendChild(slider);
    themeToggle.appendChild(sunIcon);
    themeToggle.appendChild(moonIcon);
    
    // Add toggle to header
    header.appendChild(themeToggle);
    
    return header;
};

// Theme toggle functionality
const setupThemeToggle = () => {
    const toggleInput = document.getElementById("theme-toggle");
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
        toggleInput.checked = true;
    }
    
    // Add event listener for theme toggle
    toggleInput.addEventListener("change", () => {
        if (toggleInput.checked) {
            document.body.classList.add("light-theme");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.remove("light-theme");
            localStorage.setItem("theme", "dark");
        }
    });
};

// Create main content
const heading = document.createElement("h1");
heading.textContent = "Webpack Starter Template";

const message = document.createElement("p");
message.textContent = "This is a basic template for a vanilla javascript project, using webpack as a compiler. The following features are built in:";

// Add header and content to body
const header = createHeader();
body.appendChild(header);
body.append(heading, message);

// Setup theme toggle after DOM is loaded
document.addEventListener("DOMContentLoaded", setupThemeToggle);

const webpackFeatures = {
    "Development Environment": [
    "Mode set to 'development'",
    "Source maps enabled using 'eval-source-map'"
    ],
    "Entry/Output Configuration": [
    "Entry point: './src/index.js'",
    "Output: Bundled into 'main.js' in the 'dist' directory",
    "Clean build: Previous builds are cleared"
    ],
    "Development Server": [
    "Watching template file: './src.template.html'"
    ],
    "Plugins": [
    "HtmlWebpackPlugin - generates HTML file from template at './src/template.html'"
    ],
    "Module Rules": [
    "CSS Processing:",
    "- Handles .css files",
    "- Uses style-loader and css-loader",
    "HTML Processing:",
    "- Processes .html files using html-loader",
    "Asset Management:",
    "- Images (.png, .svg, .jpg, .jpeg, .gif)",
    "- Fonts (.woff, .woff2, .eot, .ttf, .otf)",
    "- Both handled as resource assets"
    ]
};

Object.entries(webpackFeatures).forEach(([category, details]) => {
    // Create category heading
    const heading = document.createElement('h2');
    heading.textContent = category;
    document.body.appendChild(heading);

    // Create list of details
    const ul = document.createElement('ul');
    details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
});

// Create GitHub link with logo
const createGithubLink = () => {
    const linkContainer = document.createElement('div');
    
    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/nahmanmate/webpack-starter';
    githubLink.className = 'github-link';
    githubLink.target = '_blank';
    githubLink.rel = 'noopener noreferrer';
    
    // Create GitHub logo
    const githubLogo = document.createElement('img');
    githubLogo.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMiAyQTEwIDEwIDAgMCAwIDIgMTJjMCA0LjQyIDIuODcgOC4xNyA2Ljg0IDkuNWMuNS4wOC42Ni0uMjMuNjYtLjVWMTljMC0uMzUtLjE5LS41OC0uMzctLjgxYzEuODQuNjMgMi4zNy0uNzggMi4zOC0uNzhjLjIzLS42LS4xNC0xLjA1LS4xNC0xLjA1Yy0uODQtLjQzLjA4LS4zOC4wOC0uMzhjLjU0LjA1LjkxLjU1LjkxLjU1Yy43NiAxLjMgMi4wMi45MiAyLjUuN2MuMDgtLjU1LjMxLS45Mi41Ni0xLjFjLTEuNzgtLjItMy42NC0uODktMy42NC0zLjk1YzAtLjg3LjMxLTEuNTkuODItMi4xNWMtLjA4LS4yLS4zNi0xLjAyLjA4LTIuMTJjMCAwIC42Ny0uMjEgMi4yLjgyYTcuNDIgNy40MiAwIDAgMSA0IDBoMGE3LjQyIDcuNDIgMCAwIDEgNCAwYzEuNTMtMS4wNCAyLjItLjgyIDIuMi0uODJjLjQ0IDEuMS4xNiAxLjkyLjA4IDIuMTJjLjUxLjU2LjgyIDEuMjcuODIgMi4xNWMwIDMuMDctMS44NyAzLjc1LTMuNjUgMy45NWMuMzIuMjguNi44Mi42IDEuNjV2Mi40M2MwIC4yNy4xNi41OC42Ny41QzE5LjE0IDIwLjE2IDIyIDE2LjQyIDIyIDEyQTEwIDEwIDAgMCAwIDEyIDJ6Ii8+PC9zdmc+';
    githubLogo.className = 'github-logo';
    githubLogo.alt = 'GitHub Logo';
    
    const linkText = document.createTextNode('View on GitHub');
    
    githubLink.appendChild(githubLogo);
    githubLink.appendChild(linkText);
    linkContainer.appendChild(githubLink);
    
    return linkContainer;
};

// Create footer with copyright
const createFooter = () => {
    const footer = document.createElement('footer');
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} James Johns`;
    return footer;
};

// Add GitHub link and footer to the page
const githubLink = createGithubLink();
const footer = createFooter();
document.body.appendChild(githubLink);
document.body.appendChild(footer);