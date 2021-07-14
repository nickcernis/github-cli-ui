import * as vscode from "vscode";

/**
 * Get the first workspace root URL.
 */
function getRoot(): string | undefined {
  let dirs = vscode.workspace.workspaceFolders?.map(
    (folder) => folder.uri.path
  );
  return dirs && dirs?.length > 0 ? dirs[0] : undefined;
}

export { getRoot };
