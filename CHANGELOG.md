# Changelog

All notable changes to the GitHub CLI UI VS Code extension will be documented in this file.

## [0.3.2] - 2022-11-22

- Fix bug where actions could fail if repository parent directories contain spaces.

## [0.3.1] - 2022-07-20

- Sort pull requests by highest number first instead of lowest first when running `gh pr` commands, to match the behaviour of GitHub CLI.

## [0.3.0] - 2022-07-08

- Support the `gh repo view` command to open the current repo. in your browser (`--web` is automatically appended).

## [0.2.0] - 2022-01-12

- Support projects where the git workspace is in a subfolder, not in the workspace root. Just open a file in the git subfolder before running commands such as `gh pr list`.
- Support projects with multiple git repos. Commands use the repo related to the active file.

## [0.1.1] - 2021-07-14

- Improve error reporting in the case of missing git repos or remotes.

## [0.1.0] - 2021-07-14

- Initial release.
- Includes support for `gh pr list`, `gh pr checkout` and `gh pr view`.
