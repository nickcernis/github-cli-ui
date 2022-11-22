import * as vscode from "vscode";

/**
 * Get the active git repository root URI.
 * See https://github.com/microsoft/vscode/blob/main/extensions/git/src/api/git.d.ts
 */
function getRoot(): string | undefined {
  const gitExtension = vscode.extensions.getExtension('vscode.git')?.exports;
  const git = gitExtension.getAPI(1);

  if (git.repositories?.length < 1) {
    return undefined;
  }

  if (git.repositories?.length === 1) {
    return git.repositories[0]?.rootUri?.path;
  }

  const candidateRepos = git.repositories.map((repo: { rootUri: { path: string; }; }) => repo.rootUri.path);
  const currentFilePath = vscode.window.activeTextEditor?.document.uri.fsPath;
  const activeRepo = candidateRepos.find((repo: string) => currentFilePath?.includes(repo));

  return activeRepo;
}

export { getRoot };
