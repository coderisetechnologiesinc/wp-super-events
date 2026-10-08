# WP Super Events

## Overview
This document outlines the rules and regulations for commits, branching, merging, and release management for the internal `coderisetechnologiesinc/servv-wpse` repository. Public releases sync to `coderisetechnologiesinc/wp-super-events`.

## Branching Model
The repository uses two primary branches:

- **main**: The production-ready branch containing stable, released code. No direct commits are allowed to `main`. Only administrators can merge pull requests (PRs) into `main`.

- **develop**: The integration branch where all feature development and bug fixes are merged. Contributors work on feature branches forked from this branch.

## Contribution Workflow

### 1. Forking and Feature Branches
- **Fork the Repository**: Contributors must fork the `coderisetechnologiesinc/servv-wpse` repository to their own GitHub account.
- **Create a Feature Branch**:
  - Clone your fork locally:
    ```bash
    git clone https://github.com/<your-username>/servv-wpse.git
    cd servv-wpse
    ```
  - Create a feature branch from `develop`:
    ```bash
    git checkout develop
    git checkout -b feature/<feature-name>
    ```
  - Example: `feature/add-user-auth` or `feature/fix-login-bug`.
- **Make Changes**:
  - Implement enhancements or fixes in your feature branch.
  - There are **no restrictions** on commit message formats. Contributors can use any descriptive message (e.g., "Add user authentication", "Fix login bug").
  - Commit changes:
    ```bash
    git add .
    git commit -m "Your commit message"
    git push origin feature/<feature-name>
    ```

### 2. Pull Request to `develop`
- **Create a Pull Request (PR)**:
  - Push your feature branch to your fork and create a PR from `feature/<feature-name>` to `coderisetechnologiesinc/servv:develop` via GitHub.
  - Provide a clear PR description detailing the changes and purpose.
- **Review Process**:
  - The repository maintainers will review the PR.
  - Address any feedback.
- **Merge to `develop`**:
  - Once approved, maintainers will merge the PR into `develop`.
  - The feature branch can be deleted after merging.

### 3. Release Process (Admin Only)
- **Create PR from `develop` to `main`**:
  - Only **administrators** can create PRs from `develop` to `main`.

  - Create a PR from `develop` to `main` via GitHub.
  
- **Assign Release Label**:
  - During PR creation, the admin must assign **one** of the following labels to indicate the type of release:
    - `release:major`: Increments the major version (e.g., `v1.0.0` → `v2.0.0`). Used for breaking changes or major features.
    - `release:minor`: Increments the minor version (e.g., `v1.0.0` → `v1.1.0`). Used for non-breaking features.
    - `release:patch`: Increments the patch version (e.g., `v1.0.0` → `v1.0.1`). Used for minor bug fixes.
    - `release:hotfix`: Increments the patch version (e.g., `v1.0.0` → `v1.0.1`). Used for urgent fixes (treated as a patch-level update).
  - Example: For a hotfix, add the `release:hotfix` label.
  
- **Merge to `main`**:
  - The admin merges the PR into `main` after review.
  - The `release.yml` workflow automatically:
    - Bumps the version based on the label (e.g., `v1.0.0` → `v1.0.1` for `release:hotfix`).
    - Updates `CHANGELOG.md` with the last 20 non-merge commits since the last tag (or all commits if no tags exist).
    - Creates a GitHub release with the new version tag (e.g., `v1.0.1`).
    - Pushes the updated `CHANGELOG.md` to `main`.

### 4. Changelog Synchronization
- When `CHANGELOG.md` is updated and pushed to `main`, the `sync-docs.yml` workflow triggers automatically.
- This workflow copies `CHANGELOG.md` to `coderisetechnologiesinc/servv-docs` under `demo_docs/docs/changelog.md` and commits the change with a message like "Update changelog from v1.0.1".
- Ensure the following repository secrets are set:
  - `GIT_USERNAME`: `coderisetechnologiesinc`.
  - `GH_TOKEN`: A Personal Access Token (PAT) with `repo` scope for `servv-docs`.

### Commit and Merge Rules
- **No Direct Commits to `main`**:
  - Direct commits to `main` are prohibited for all contributors, including admins.
  - All changes must go through a PR from `develop` to `main`.
- **Commit Message Freedom**:
  - There are no restrictions on commit message formats in feature branches or `develop`.
  - Use clear, descriptive messages to aid reviewers (e.g., "Add user authentication endpoint", "Fix null pointer in login").
- **Admin Responsibilities**:
  - Only admins can create and merge PRs from `develop` to `main`.
  - Admins must assign the correct release label (`release:major`, `release:minor`, `release:patch`, `release:hotfix`) during PR creation.
- **Versioning**:
  - The project uses 3-digit versioning (`vX.Y.Z`).
  - The `release.yml` workflow automatically bumps the version based on the PR label:
    - `major`: `X+1.0.0`
    - `minor`: `X.Y+1.0`
    - `patch`: `X.Y.Z+1`
    - `hotfix`: `X.Y.Z+1` (treated as a patch update)
  - If no tags exist, the default tag is `v1.0.0`.

### Example Workflow
1. **Contributor**:
   - Fork `coderisetechnologiesinc/servv`.
   - Create `feature/add-login` from `develop`.
   - Commit changes: `git commit -m "Add login functionality"`.
   - Push and create PR to `develop`.
2. **Maintainer**:
   - Review and merge PR into `develop`.
3. **Admin**:
   - Create PR from `develop` to `main` (e.g., `release/v1.0.1`).
   - Add `release:patch` label.
   - Merge PR.

*Last updated: September 29, 2025, 02:18 PM IST*
