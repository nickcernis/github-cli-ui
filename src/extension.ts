import * as vscode from "vscode";
import { list, PRAction } from "./pr/actions";
import { view as RepoView } from "./repo/actions";

export function activate(context: vscode.ExtensionContext) {
  const prList = vscode.commands.registerCommand("github-cli-ui.PRList", list);
  const prCheckout = vscode.commands.registerCommand(
    "github-cli-ui.PRCheckout",
    () => list(PRAction.checkout)
  );
  const prView = vscode.commands.registerCommand("github-cli-ui.PRView", () =>
    list(PRAction.view)
  );
  const repoView = vscode.commands.registerCommand(
    "github-cli-ui.RepoView",
    RepoView
  );

  context.subscriptions.push(prList);
  context.subscriptions.push(prCheckout);
  context.subscriptions.push(prView);
  context.subscriptions.push(repoView);
}

export function deactivate() {}
