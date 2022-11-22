/**
 * GitHub PR actions.
 *
 * Implemented:
 * - https://cli.github.com/manual/gh_pr_list
 * - https://cli.github.com/manual/gh_pr_checkout
 * - https://cli.github.com/manual/gh_pr_view
 *
 * Wishlist:
 * - https://cli.github.com/manual/gh_pr_create
 */
import * as vscode from "vscode";
import { exec } from "child_process";
import { getRoot } from "../workspace";
import { showList, getListItems } from "./pickers";

const gitRootNotFoundMessage = "No git repo found. Open a file in the git directory or initialize the repo.";

enum PRAction {
  list,
  checkout,
  view,
  empty,
  options,
}

/**
 * Show a quick pick list of pull requests. Pressing enter prompts with further PR options.
 */
function list(action: PRAction = PRAction.list) {
  const root = getRoot();
  if (!root) {
    vscode.window.showErrorMessage(gitRootNotFoundMessage);
    return;
  }

  exec(
    `cd "${root}" && gh pr list --json=number,title,headRefName,isDraft,author`,
    (err, stdout, stderr) => {
      if (err) {
        vscode.window.showErrorMessage(`${err}`);
        return;
      }

      const response = JSON.parse(stdout);

      if (response.length < 1) {
        showList(
          [{ label: "No pull requests to choose from." }],
          PRAction.empty
        );
        return;
      }

      const list = getListItems(response);
      showList(list, action);
    }
  );
}

/**
 * Check out a GitHub pull request.
 */
function checkout(number: number) {
  const root = getRoot();
  if (!root) {
    vscode.window.showErrorMessage(gitRootNotFoundMessage);
    return;
  }

  exec(`cd "${root}" && gh pr checkout ${number}`, (err, stdout, stderr) => {
    if (err) {
      vscode.window.showErrorMessage(`${err}`);
    }
  });
}

/**
 * View a GitHub pull request in a browser.
 */
function view(number: number) {
  const root = getRoot();
  if (!root) {
    vscode.window.showErrorMessage(gitRootNotFoundMessage);
    return;
  }
  exec(`cd "${root}" && gh pr view ${number} --web`, (err, stdout, stderr) => {
    if (err) {
      vscode.window.showErrorMessage(`${err}`);
    }
  });
}

export { list, checkout, view, PRAction };
