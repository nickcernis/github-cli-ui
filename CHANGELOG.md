# Changelog

All notable changes to the GitHub CLI UI VS Code extension will be documented in this file.

## [0.2.0] - 2022-01-12

- Support projects where the git workspace is in a subfolder, not in the workspace root. Just open a file in the git subfolder before running commands such as `gh pr list`.
- Support projects with multiple git repos. Commands use the repo related to the active file.

## [0.1.1] - 2021-07-14

- Improve error reporting in the case of missing git repos or remotes.

## [0.1.0] - 2021-07-14

- Initial release.
- Includes support for `gh pr list`, `gh pr checkout` and `gh pr view`.
