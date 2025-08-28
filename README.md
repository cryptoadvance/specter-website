# Specter Website

This repository contains the source code for the Specter website, built with React, Express, and Vite.

The website is automatically deployed to **Netlify**, which provides preview deployments for every pull request, allowing you to see your changes live before they're merged.

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed on your system:

- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)
- **Git**
- **GitHub account** (for contributing)

#### Installing Node.js and npm

1. **Download Node.js**: Visit [nodejs.org](https://nodejs.org/) and download the LTS version
2. **Install Node.js**: Follow the installation instructions for your operating system
3. **Verify installation**: Open a terminal and run:
   ```bash
   node --version
   npm --version
   ```

#### Git Resources

If you're new to Git, here are some helpful resources:
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [GitHub's Git Tutorial](https://try.github.io/)
- [Atlassian Git Tutorials](https://www.atlassian.com/git/tutorials)

### Fork and Clone the Repository

Since you won't have direct push access to the main repository, you'll need to fork it first:

#### 1. Fork the Repository

1. Go to the [Specter Website repository](https://github.com/cryptoadvance/specter-website) on GitHub
2. Click the **"Fork"** button in the top-right corner
3. Select your GitHub account as the destination for the fork
4. Wait for GitHub to create your fork

#### 2. Clone Your Fork

1. **Clone your forked repository** (replace `YOUR_USERNAME` with your GitHub username):
   ```bash
   git clone git@github.com:YOUR_USERNAME/specter-website.git
   ```

   Or using HTTPS:
   ```bash
   git clone https://github.com/YOUR_USERNAME/specter-website.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd specter-website
   ```

#### 3. Add the Original Repository as Upstream

This allows you to keep your fork synchronized with the original repository:

```bash
git remote add upstream https://github.com/cryptoadvance/specter-website.git
```

Verify your remotes:
```bash
git remote -v
```

You should see:
- `origin` pointing to your fork
- `upstream` pointing to the original repository

### Install Dependencies

Install the project dependencies using npm:

```bash
npm install
```

### Run the Development Server

Start the development server:

```bash
npm run dev
```

The website will be available at `http://127.0.0.1:3000` (or the port shown in your terminal).

## Making Changes

### 1. Sync Your Fork (Important!)

Before making any changes, always sync your fork with the original repository:

```bash
# Switch to main branch
git checkout main

# Pull latest changes from upstream
git pull upstream main

# Push updates to your fork
git push origin main
```

### 2. Create a New Branch

Create a new branch for your work:

```bash
git checkout -b feature/your-feature-name
```

Or for bug fixes:
```bash
git checkout -b fix/your-bug-fix-name
```

### 3. Make Your Changes

- Edit files using your preferred code editor
- The development server will automatically reload when you save changes
- Test your changes in the browser

### 4. Commit Your Changes

1. **Check what files have changed**:
   ```bash
   git status
   ```

2. **Add files to staging**:
   ```bash
   git add .
   ```

   Or add specific files:
   ```bash
   git add path/to/your/file.js
   ```

3. **Commit your changes** with a descriptive message:
   ```bash
   git commit -m "Add: brief description of your changes"
   ```

### 5. Push Your Branch to Your Fork

Push your branch to your forked repository:

```bash
git push origin feature/your-feature-name
```

### 6. Create a Pull Request

1. Go to your fork on GitHub (`https://github.com/YOUR_USERNAME/specter-website`)
2. Click "Compare & pull request" button that appears after pushing
3. Make sure the base repository is `cryptoadvance/specter-website` and base branch is `main`
4. Make sure the head repository is your fork and compare branch is your feature branch
5. Fill out the pull request:
   - **Title**: Brief description of your changes
   - **Description**: Detailed explanation of what you changed and why
6. Click "Create pull request"

### 7. Preview Your Changes with Netlify

Once you create a pull request, **Netlify will automatically create a preview deployment**:

- 🔄 **Automatic Build**: Netlify builds your changes automatically
- 🔗 **Preview Link**: You'll get a unique preview URL to test your changes
- ✅ **Status Checks**: The PR will show whether the build succeeded or failed
- 👀 **Live Preview**: Share the preview link with others for feedback

Look for the **Netlify bot comment** in your PR with links like:
- **Deploy Preview**: `https://deploy-preview-123--specter-website.netlify.app`
- **Build Logs**: Link to see detailed build information

This allows you to verify that your changes work correctly before they're merged into the main website!

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the project for production
- `npm start` - Start the production server
- `npm run check` - Run TypeScript type checking
- `npm run db:push` - Push database schema changes (if applicable)

## Project Structure

```
specter-website/
├── client/          # Frontend React application
├── server/          # Backend Express server
├── shared/          # Shared utilities and types
├── dist/           # Built files (generated)
├── node_modules/   # Dependencies (generated)
├── package.json    # Project configuration and dependencies
├── vite.config.ts  # Vite configuration
├── tsconfig.json   # TypeScript configuration
└── tailwind.config.ts # Tailwind CSS configuration
```

## Development Tips

- **Hot Reload**: The development server automatically reloads when you make changes
- **TypeScript**: This project uses TypeScript for type safety
- **Tailwind CSS**: Styling is done with Tailwind CSS utility classes
- **Keep Your Fork Updated**: Regularly sync with upstream to avoid conflicts
- **Netlify Previews**: Every PR gets a live preview - use it to test your changes!

## Working with AI Tools

Modern AI tools can significantly speed up your development workflow. Here are some recommended tools:

### Augment (Recommended)

[Augment](https://www.augmentcode.com/) is an AI-powered coding assistant that provides intelligent code completion and suggestions:

- **Installation**: Available as a VS Code extension
- **Features**:
  - Context-aware code completion
  - Intelligent refactoring suggestions
  - Code explanation and documentation
  - Bug detection and fixes
- **Benefits**: Particularly helpful for React, TypeScript, and modern web development
- **Usage**: Works seamlessly with this project's tech stack

### Visual Studio Code with AI Extensions

**VS Code** is the recommended editor for this project, enhanced with AI capabilities:

#### Recommended Extensions:
- **Augment**: AI-powered code completion and assistance
- **GitHub Copilot**: AI pair programmer (requires subscription)
- **Tabnine**: AI code completion
- **IntelliCode**: Microsoft's AI-assisted development

#### VS Code Setup Tips:
```bash
# Install VS Code extensions via command line
code --install-extension augmentcode.augment
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension bradlc.vscode-tailwindcss
```

### AI-Assisted Development Workflow

1. **Code Generation**: Use AI to generate boilerplate components and functions
2. **Code Review**: Ask AI to review your code for potential issues
3. **Documentation**: Generate comments and documentation automatically
4. **Debugging**: Get AI suggestions for fixing errors and warnings
5. **Learning**: Ask AI to explain unfamiliar code patterns or concepts

### Best Practices with AI Tools

- **Review AI suggestions**: Always understand and review AI-generated code
- **Test thoroughly**: AI-generated code should be tested like any other code
- **Learn from suggestions**: Use AI as a learning tool to improve your skills
- **Maintain code quality**: Ensure AI suggestions follow the project's coding standards
- **Ask for explanations**: Don't just accept suggestions - understand why they work

### Example AI Prompts for This Project

- "Create a React component for displaying user profiles with TypeScript"
- "Add Tailwind CSS styling to make this component responsive"
- "Explain this TypeScript error and suggest a fix"
- "Generate unit tests for this React component"
- "Optimize this code for better performance"

Remember: AI tools are assistants, not replacements for understanding the code you're writing!

## Getting Help

- **Issues**: Report bugs or request features in [GitHub Issues](https://github.com/cryptoadvance/specter-website/issues)
- **Discussions**: Ask questions in [GitHub Discussions](https://github.com/cryptoadvance/specter-website/discussions)
- **Documentation**: Check existing documentation in the repository

## Contributing Guidelines

1. **Fork the repository** on GitHub
2. **Clone your fork** locally
3. **Create a feature branch** from `main`
4. **Keep your fork synced** with upstream
5. **Make your changes** with clear, descriptive commits
6. **Test your changes** thoroughly
7. **Push to your fork** and **submit a pull request**
8. **Respond to feedback** during the review process

## Common Git Commands for Forked Workflow

```bash
# Sync your fork with upstream
git checkout main
git pull upstream main
git push origin main

# Create and switch to new branch
git checkout -b new-feature-name

# Check current branch and status
git status

# View commit history
git log --oneline

# Push your branch to your fork
git push origin branch-name

# Delete a branch after PR is merged
git branch -d branch-name
git push origin --delete branch-name
```

## Important Notes

- **Never push directly to main**: Always work in feature branches
- **Keep PRs focused**: One feature or fix per pull request
- **Sync regularly**: Keep your fork updated to avoid merge conflicts
- **Test locally first**: Use `npm run dev` to test your changes locally
- **Use Netlify previews**: Check the preview deployment link in your PR to verify everything works
- **Wait for build status**: Make sure the Netlify build passes before requesting review

Remember: You're working with a fork, so you'll push to `origin` (your fork) and create pull requests to `upstream` (the original repository)!
