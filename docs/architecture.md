## Continuous Integration (CI):

The project uses GitHub Actions to ensure code quality.

### Triggers:

- On every `push`
- On every `pull_request`

### Pipeline steps:

- Install dependencies
- Run ESLint
- Run TypeScript type check
- Build the project

This guarantees that no code is merged without passing quality gates.
