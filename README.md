# GitHub CLI UI for Visual Studio Code

Use GitHub CLI visually without leaving VS Code.

**Requires [GitHub CLI](https://cli.github.com/) to be installed and authenticated**.

## Features

GitHub CLI UI exposes `gh …` commands in VS Code's Command Palette:

<img src="https://raw.githubusercontent.com/nickcernis/github-cli-ui/main/docs/images/gh-pr-commands.png" alt="GitHub CLI PR commands in the VS Code Command Palette.">

Run a command such as `gh pr checkout` to display pull requests in a quicklist, complete with filterable author names and draft status:

<img src="https://raw.githubusercontent.com/nickcernis/github-cli-ui/main/docs/images/gh-pr-checkout.png" alt="GitHub pull requests displayed in a quicklist.">

Choose the PR to checkout by pressing enter and you're done! The plugin ran `gh pr checkout [number of selected PR]` for you and GitHub CLI pulled down and checked out the PR:

<img src="https://raw.githubusercontent.com/nickcernis/github-cli-ui/main/docs/images/checked-out-pr.png" alt="The checked out branch name in the VS Code status bar.">

You can check out another local or remote branch at any time. You don't have to do anything extra to undo the steps that GH CLI took.

## Benefits

GitHub CLI UI is:

- Faster than the terminal: no need to switch to the terminal to run `gh pr list` followed by `gh pr checkout [pull request ID]`.
- Built into VS Code to reduce context switching.
- More keyboard-driven than the official GitHub VS Code integration.
- Backed by the official GitHub CLI — no separate keys or authentication to manage.

## Setup
1. Install the [GitHub CLI](https://cli.github.com/) command line application.
2. Authenticate by running [gh cli login](https://cli.github.com/manual/gh_auth_login) from a terminal and following the steps in your browser.
3. Install the GitHub CLI UI extension in VS Code.

In VS Code, open any project that is managed by git with remotes hosted on GitHub.

Open the Command Palette (Cmd+Shift+P on Mac, Ctrl+Shift+P on Windows/Linux) and type the supported commands below (or part of a command, such as `ghc` for `gh pr checkout`).

## Supported commands

These commands are supported:

- `gh pr list` — see a list of open PRs. Press enter to select a PR and choose to check it out or view it online.
- `gh pr view` — see a list of PRs, then open the selected PR in your browser.
- `gh pr checkout` — see a list of open PRs, then checkout the selected PR.
- `gh pr create` — create a PR in your browser from the current branch, which must already be pushed to the remote (`--web` is automatically appended). 
- `gh repo view` — open the current repo in your browser (`--web` is automatically appended). 

Feel free to file issues requesting [other GH CLI features](https://cli.github.com/manual/).

## Create keyboard shortcuts
GitHub CLI UI does not use keyboard shortcuts by default because the commands are easily accessible and discoverable in the Command Palette.

If you use a command a lot, consider binding it to a keyboard shortcut.

1. Open the Command Palette.
2. Search for "Preferences: Open Keyboard Shortcuts".
3. Search for any supported command and add your own keyboard shortcut:

- github-cli-ui.PRList
- github-cli-ui.PRCheckout
- github-cli-ui.PRCreate
- github-cli-ui.PRView
- github-cli-ui.RepoView
