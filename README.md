# TypeScript Monorepo Starter

A modern TypeScript monorepo starter template with best practices for scalable projects.

## Features

- 📦 [PNPM](https://pnpm.io/) for fast, disk-efficient package management
- 🏎️ [Turborepo](https://turbo.build/repo) for high-performance build system
- 🔍 [Biome](https://biomejs.dev/) for fast linting and formatting
- ⚙️ [TypeScript](https://www.typescriptlang.org/) configured with modern Node LTS settings
- 🧪 [Vitest](https://vitest.dev/) for unit testing
- 📝 [Commitlint](https://commitlint.js.org/) with Conventional Commits
- 🔄 [Changesets](https://github.com/changesets/changesets) for versioning and changelogs
- 🚀 GitHub Actions for CI/CD with npm publishing
- 🪝 [Husky](https://typicode.github.io/husky/) for Git hooks

## Project Structure

```
ts-monorepo/
├── .changeset/          # Changesets configuration
├── .github/             # GitHub Actions workflows
├── .husky/              # Git hooks
├── packages/            # All packages
│   ├── core/            # Core package
│   ├── utils/           # Utilities package
│   └── feature-a/       # Feature package
├── biome.json           # Biome configuration
├── commitlint.config.js # Commitlint configuration
├── package.json         # Root package.json
├── pnpm-workspace.yaml  # PNPM workspace config
├── tsconfig.json        # Base TypeScript config
├── turbo.json           # Turborepo config
└── vitest.config.ts     # Vitest config
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [PNPM](https://pnpm.io/) (v8 or higher)

### Installation

1. Clone this repository
   ```bash
   git clone https://github.com/yourusername/ts-monorepo.git
   cd ts-monorepo
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Build all packages
   ```bash
   pnpm build
   ```

### Development Workflow

#### Running Tests

```bash
# Run all tests
pnpm test

# Run tests in watch mode
pnpm -F "@monorepo/core" test:watch
```

#### Linting and Formatting

```bash
# Lint all packages
pnpm lint

# Format all packages
pnpm format
```

#### Building

```bash
# Build all packages
pnpm build

# Build a specific package
pnpm -F "@monorepo/core" build
```

### Making Changes

1. Create a new branch
   ```bash
   git checkout -b feature/my-feature
   ```

2. Make your changes

3. Commit your changes using conventional commits
   ```bash
   git commit -m "feat: add new feature"
   ```

4. Add a changeset to document your changes
   ```bash
   pnpm changeset
   ```

5. Push your branch and create a pull request

### Release Process

Releasing is handled automatically through GitHub Actions when changes are merged to the main branch:

1. The workflow runs tests, type checking, and builds to ensure quality
2. Changesets creates a PR to bump versions and update changelogs
3. When the PR is merged, packages are published to npm

#### Setting Up npm Publishing

To enable npm publishing:

1. Generate an npm access token with publish permissions
2. Add the token as a repository secret named `NPM_TOKEN` in GitHub
3. Ensure your packages have unique names in the npm registry

## Working with this Monorepo

### Adding a New Package

1. Create a new folder in the `packages` directory
2. Add a `package.json` with appropriate dependencies
3. Add a `tsconfig.json` that extends from the root
4. Update root `tsconfig.json` with path mappings for the new package

### Package Interdependencies

Packages can depend on each other using the workspace protocol:

```json
"dependencies": {
  "@monorepo/core": "workspace:*"
}
```

## License

[MIT](LICENSE)