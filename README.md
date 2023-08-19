# ADBT 🦄

Adblock template support for Visual Studio Code
<br>
<sub>via <a href="https://github.com/igorskyflyer/npm-adblock-aria-compiler">Aria compiler</a></sub>
<br>
<sub>for <a href="https://github.com/igorskyflyer/file-format-adbt">ADBT files</a></sub>

<br>

<div align="center">
	<img src="https://raw.githubusercontent.com/igorskyflyer/vscode-adbt/main/icons/adbt.png" alt="Aria/ADBT logo">
	<br>
📜 Provides ADBT (Adblock template) support in Visual Studio Code 🪅
</div>

<br>

<div align="center">
	<blockquote>
		<h4>💖 Support further development</h4>
		<span>I work hard for every project, including this one and your support means a lot to me!
		<br>
		Consider buying me a coffee. ☕
		<br>
		<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
		<br>
		<br>
		<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
		<br>
		<br>
		<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
	</blockquote>
</div>

<br>
<br>

## 🪄 Features

Currently it provides the following features:

- high-performance due to small footprint,
- language support and encoding for `*.adbt` files,
- syntax highlighting (see the [official API specification](https://github.com/igorskyflyer/file-format-adbt/releases/latest) for details),
- auto-complete (Intellisense):
  - functions/statements (including path placeholders),
  - comments (including comment modifiers, i.e. `TODO`, `FIXME`, `NOTE`),
  - directives,
- hover information,
- snippets,
- meta files `*.adbm` support, relies on built-in JSON support:
  - autocomplete (Intellisense), see the [official specification](https://github.com/igorskyflyer/file-format-adbt/releases/latest) for details,
  - hover info,
- custom file icon.

<br>

<div align="center"><em><strong>🎉 Many more features coming soon!</strong></em></div>

<br>
<br>

> 💡 For more information about the `*.adbt` and `*.adbm` files, head to the official [ADBT file format](https://github.com/igorskyflyer/file-format-adbt/) repository.

<br>

## 📦 Prerequisites

As mentioned above, this extension provides ADBT support in Visual Studio Code but to actually compile ADBT files, you need to obtain and install the latest version of [Aria compiler](https://www.npmjs.com/package/@igor.dvlpr/aria) (CLI) via npm:

Globally,

```shell
npm i -g "@igor.dvlpr/aria"
```

or locally,

```shell
npm i "@igor.dvlpr/aria"
```

<br>

> 💡 More information about the Aria compiler CLI is available on its [official API](https://github.com/igorskyflyer/npm-adblock-aria-compiler/tree/main#readme).

<br>
<br>

## 🔫 In action

<p align="center">
	<img src="https://raw.githubusercontent.com/igorskyflyer/vscode-adbt/main/assets/screenshots/intellisense.png" alt="ADBT - auto-complete, Intellisense">
	<sub><strong>Intellisense - auto-complete, including comment modifiers</strong></sub>
	<br>
	<sub>Visual Studio Code theme: <a href="https://github.com/igorskyflyer/vscode-theme-kai"><code>Kai</code></a></sub>
</p>

<br>

<p align="center">
<img src="https://raw.githubusercontent.com/igorskyflyer/vscode-adbt/main/assets/screenshots/syntax.png" alt="ADBT - auto-complete, Intellisense">
	<sub><strong>Syntax highlighting</strong></sub>
	<br>
	<sub>Visual Studio Code theme: <a href="https://github.com/igorskyflyer/vscode-theme-kai"><code>Kai</code></a></sub>
</p>

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/vscode-adbt/blob/main/LICENSE).

---

## 🧬 Related

[Open in Browser](https://marketplace.visualstudio.com/items?itemName=igordvlpr.open-in-browser)

> _Opens HTML files in a browser of user's choice._

[Pack VSIX](https://marketplace.visualstudio.com/items?itemName=igordvlpr.pack-vsix)

> _Build your extensions right from the editor itself._

[New Folder](https://marketplace.visualstudio.com/items?itemName=igordvlpr.new-folder)

> _📂 Provides a "New Folder" view in the Explorer and a command in the Command Palette. 🤟_

[Project Version](https://marketplace.visualstudio.com/items?itemName=igordvlpr.project-version)

> _📊 Provides a visual representation of you current npm project's version. 💪_

[Kai](https://marketplace.visualstudio.com/items?itemName=igordvlpr.kai-theme)

> _🌊 Aloha! Kai: Where Code Meets the Sea. Immerse yourself in the tranquil depths of coding with this refreshing VS Code theme inspired by the beauty of the Hawaiian sea. 🦞_

[AdVoid](https://github.com/igorskyflyer/ad-void)

> _✈ AdVoid is an efficient AdBlock filter that blocks ads, trackers, malware and a lot more if you want it to! 👾_
