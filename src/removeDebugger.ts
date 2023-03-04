import * as vscode from 'vscode';

export default function removeDebugger() {
  findAllDebugger();
}

function findAllDebugger() {
  const editor = vscode.window.activeTextEditor;

  const reg = /debugger/gi;
  const fullTxt = editor?.document.getText() || '';
  const matches = fullTxt?.match(reg);

  if (!matches) {
    vscode.window.showInformationMessage('未找到 debugger', { modal: true }, 'Ok');
    return;
  }

  const replacedTxt = fullTxt.replace(reg, '');

  if (matches && matches.length) {
    editor?.edit(editBuilder => {
      editBuilder.replace(
        new vscode.Range(
          editor.document.positionAt(0),
          editor.document.positionAt(fullTxt.length)
        ),
        replacedTxt
      );
    });
    
    vscode.window.showInformationMessage('移除完成！');

    // vscode.window.showInformationMessage(
    //   `一共找到 ${matches?.length} 处 debugger，确认要删除吗？`,
    //   { modal: true }, 'Yes'
    // )
    // .then((value) => {
    //   if (value === 'Yes') {
    //     editor?.edit(editBuilder => {
    //       editBuilder.replace(
    //         new vscode.Range(
    //           editor.document.positionAt(0),
    //           editor.document.positionAt(fullTxt.length)
    //         ),
    //         replacedTxt
    //       );
    //     });
        
    //     vscode.window.showInformationMessage('移除完成！');
    //   }
    // });
  }

}
