
# **File对ahasdhfasdf象**
```JavaScript
const fs = require('fs');
var fileBuffer = fs.readFileSync(path);
var fileString = fileBuffer.toString();
```
# **webView标签和API**
```html
<webview id="wb"/>
```
```JavaScript
var webview = document.querySelector('#wb');
webview.addEventListener('did-start-loading', fun);
//开始载入
webview.addEventListener('did-stop-loading', fun);
//载入完成
```
- **preload**="./xx.js" 载入脚本
- **wb.insertCSS(string)** 注入css样式

```JavaScript
wb.insertCSS('
    #su {
        background: red !important;
    }
');
```
- **wb.executeJavaScript(string)** 注入js

```JavaScript
wb.executeJavaScript('
    console.log('oops');
');
```
# **window对象**
## window.open() 打开子窗口 返回BrowserWindowProxy对象
	(string html, string name, string feature)

## window.opener.postMessage() 向父窗口传递信息
子窗口
```JavaScript
window.opener.postMessage('something...');
window.opener.postMessage({ type:1, name:"myname", etc..});
```
父窗口
```JavaScript
window.addEventListener('message', (msg)=>{
    ..
})
```




## **BrowserWindowProxy类**
```js
var subwin = window.open('...','subwin');
```
关闭子窗口 subwin.close()




# **BrowserWindow**
```js
var win = new BrowserWindow({
    width:.., height:..,
    frame: false,   //关闭边框
    backgroundColor: "#000000", 
    parent: parentWin,  //指定父窗口
})
```
## **ready-to-show** 事件
```js
const {BrowserWindow} = require('electron');
let win = new BrowserWindow({ show:fasle });
//once:只运行一次
win.once('ready-to-show', ()=>{
    win.show();
});
//准备好再显示 防止页面闪烁
```
## **模态窗口** (不常用)
```js
let win = new BrowserWindow({ 
    modal:true, 
    x:.., y:..
});
//启用模态窗口
```
# **BrowserView**
嵌入BrowserWindow的视图
```js
const { BrowserView, BrowserWindow } = require('electron');
let win = new BrowserWindow({
    width: 800, height: 600
});
win.on('closed', ()=>{
    win = null;
});
let view = new BrowserView();
win.setBrowserView(view);
view.setBounds({
    x: 0, y: 0,
    width: 300, height: 300
});
view.webContents.loadURL('https://electronjs.org');
// 获取webContent实例
view.destroy();//摧毁视图
```
# 对话框 **dialog**
主线程使用 :
```js
const { dialog } = require('electron');
console.log(dialog.showOpenDialog({
    properties:['openFile', 'openDirectory', 'multiSelections']
}))
```
渲染进程使用 :
```js
const { dialog } = require('electron').remote;
console.log(dialog);
```
## 涵盖方法
- **showOpenDialog/Sync**([browserWindow, ]options, callback)
    - options
        - title String 标题
        - defaultPath String 默认路径
        - buttonLabel String [确认]按钮的文本
        - filters filter[] 过滤格式
```js
filters: [
{ name: '显示的名称', extensions: ['js', 'html', '过滤的格式'] },
{ name: '显示的名称', extensions: ['js', 'html', '过滤的格式'] }
]
```
        - properties String 属性
          - openFile 选择文件
          - openDirectory 选择文件夹
          - multiSelections 多选
          - promptToCreate 文件路径不存在时提示创建
    - callback(res): res[0] = filePath;(showOpenDialog)
- **showSaveDialog/Sync(option, callback)**
  ```js
  dialog.showSaveDialog({
    ...
  }, res=>{
      fs.writeFileSync(res, 'content');
  })
  ```
- **showMessageBox/Sync(option, callback)**
  - option
    - type String
      - 可设为none、info、error、question、warning
    - buttons String[] 按钮文本
    - title String
    - message String 必填
  - callback(res): res Integer: 点击的按钮数组的元素的索引

# **渲染进程对主线程的通信**
```js
const { ipcMain } = require('electron');    //主进程
const { ipcRenderer } = require('electron');//渲染进程
```
## ipcMain
### on('msg', (event, args)=>{})
### event.reply('msg', args)
### event.returnValue = args;
## ipcRenderer
  ### send('msg', args)
  ### sendSync('msg', args)
## 同步通信
```js
ipcMain.on('sync-A', (event, arg)=>{
    event.returnValue = 'result..';
});
```
```js
var res = ipcRenderer.sendSync('sync-A', 'something..');
console.log(res); // print result..
```
## 异步通信
```js
ipcRenderer.send('async-A', 'something..');
```
```js
ipcMain.on('async-A', (event, arg)=>{
    event.reply('async-B', 'I got it');
})
```
```js
ipcRenderer.on('async-B', (event, arg)=>{
    console.log(arg);
});
```
# **主线程对渲染进程通信**
```js
mainWindow.webContents.send('msg', 'something..');
```
```js
ipcRenderer.on('msg', (event, arg)=>{
    console.log(arg);
});
```

# 原生菜单 **Menu**
```js
const { Menu } = require('electron')    //主进程
const { remote } = require('electron')
const { Menu, MenuItem } = remote;      // 渲染进程
```
## 方法
- void - Menu.setApplicationMenu(menu)  设置顶部菜单
- menu - Menu.getApplicationMenu()
- menu - Menu.buildFromTemplate(MenuItem[] template)
  ```js
  var menuItem_0 = { label:'item_1' }
  var menuItem_1 = { label:'item_2' }
  var menuItem = {
      label:'Item_1',                       //名称
      click:()=>{},                         //点击回调
      submenu: [ menuItem_0, menuItem_1 ]   //子菜单
  }
  var template = [
      menuItem,
      { type: "separator" },    //分割线
      { role: "undo" },         //特殊动作(很多个)
  ]
  ```
- void - menu.popup() 弹出菜单
