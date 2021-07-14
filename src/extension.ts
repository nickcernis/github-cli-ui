import * as vscode from "vscode";
import { list, PRAction } from "./pr/actions";

export function activate(context: vscode.ExtensionContext) {
  const prList = vscode.commands.registerCommand("github-cli-ui.PRList", list);
  const prCheckout = vscode.commands.registerCommand(
    "github-cli-ui.PRCheckout",
    () => list(PRAction.checkout)
  );
  const prView = vscode.commands.registerCommand("github-cli-ui.PRView", () =>
    list(PRAction.view)
  );
  context.subscriptions.push(prList);
  context.subscriptions.push(prCheckout);
  context.subscriptions.push(prView);
}

export function deactivate() {}
