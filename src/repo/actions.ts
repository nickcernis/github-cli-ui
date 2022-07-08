/**
 * GitHub repo actions.
 *
 * Implemented:
 * - https://cli.github.com/manual/gh_repo_view
 */
 import * as vscode from "vscode";
 import { exec } from "child_process";
 import { getRoot } from "../workspace";
 
 const gitRootNotFoundMessage = "No git repo found. Open a file in the git directory or initialize the repo.";
 
 /**
  * View the GitHub repo in the browser.
  */
 function view(number: number) {
   const root = getRoot();
   if (!root) {
     vscode.window.showErrorMessage(gitRootNotFoundMessage);
     return;
   }
   exec(`cd ${root} && gh repo view --web`, (err, stdout, stderr) => {
     if (err) {
       vscode.window.showErrorMessage(`${err}`);
     }
   });
 }
 
 export { view };
 