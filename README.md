# Cypress TypeScript Framework

This project is a boilerplate framework for end-to-end testing using [Cypress](https://www.cypress.io/) with [TypeScript](https://www.typescriptlang.org/).

## Features

- Written in TypeScript for type safety and better developer experience
- Organized folder structure for tests, page objects, and utilities
- Cypress best practices and custom commands
- Easy configuration and environment management

## Getting Started

### Prerequisites

- Node.js (v14 or above)
- npm

### Installation

```bash
npm install
```

### Running Tests

To open the Cypress Test Runner:

```bash
npx cypress open
```

To run tests in headless mode:

```bash
npx cypress run
```

## Project Structure

```
cypress/
  ├── e2e/           # Test files
  ├── fixtures/      # Test data
  ├── support/       # Custom commands and support files
  └── ...
tsconfig.json        # TypeScript configuration
cypress.config.ts    # Cypress configuration
```

## Writing Tests

- Place your test files in the `cypress/e2e/` directory.
- Use TypeScript for all test files (`.ts`).

## Custom Commands

Add reusable commands in `cypress/support/commands.ts`.

## Contributing

Feel free to open issues or submit pull requests.

## License
