/**
 * Quick Picker logic.
 */
import * as vscode from "vscode";
import { PRAction, checkout, view } from "./actions";

interface GitHubPR {
  author: {
    login: string;
  };
  headRefName: string;
  isDraft: boolean;
  number: number;
  title: string;
}

interface PRItem extends vscode.QuickPickItem {
  action?: PRAction;
  number?: number;
}

/**
 * Show a quick pick list.
 */
async function showList(list: PRItem[], action: PRAction = PRAction.list) {
  const selectedItem = await vscode.window.showQuickPick(list, {
    placeHolder: getListPlaceholder(action),
    matchOnDescription: true,
    matchOnDetail: true,
  });

  if (selectedItem !== undefined) {
    doListAction(selectedItem, action);
  }
}

/**
 * Get quick pick title based on the action.
 * TODO: i18n.
 */
function getListPlaceholder(action: PRAction): string {
  switch (action) {
    case PRAction.checkout:
      return "Checkout PR";
    case PRAction.view:
      return "View PR in your browser";
    case PRAction.empty:
      return "No open pull requests";
    case PRAction.options:
      return "PR Action";
    default:
      return "Select a PR for more options…";
  }
}

/**
 * Perform a list action based on the selected PR.
 */
function doListAction(selectedItem: PRItem, action?: PRAction) {
  if (action === PRAction.options && selectedItem.action) {
    doListAction(selectedItem, selectedItem.action);
  }

  if (action === PRAction.checkout && selectedItem.number) {
    checkout(selectedItem.number);
    return;
  }

  if (action === PRAction.view && selectedItem.number) {
    view(selectedItem.number);
    return;
  }

  if (action === PRAction.list && selectedItem.number) {
    showList(
      [
        {
          label: `Checkout PR #${selectedItem.number}`,
          action: PRAction.checkout,
          number: selectedItem.number,
        },
        {
          label: `View PR #${selectedItem.number}`,
          action: PRAction.view,
          number: selectedItem.number,
        },
      ],
      PRAction.options
    );
  }
}

/**
 * Generate a QuickPickItem list of pull requests from GitHub data.
 *
 * TODO: move drafts to the bottom of the list?
 */
function getListItems(data: GitHubPR[]): PRItem[] {
  return data
    .sort((a, b) => a.number - b.number)
    .map((item) => {
      return {
        label: `${item.number} ${item.title}`,
        description: item.author.login,
        detail: item.isDraft ? "DRAFT" : "",
        number: item.number,
      };
    });
}

export { showList, getListItems };
