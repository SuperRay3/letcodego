import * as vscode from 'vscode';
import removeDebugger from './removeDebugger';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('letcodego.undebug', () => {
		removeDebugger();
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
