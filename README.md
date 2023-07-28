# ADBT 🦄

Adblock template support for Visual Studio Code
<br>
<sub>for <a href="https://github.com/igorskyflyer/npm-adblock-aria-compiler">Aria compiler</a></sub>

<br>

<div align="center">
	<img src="https://raw.githubusercontent.com/igorskyflyer/vscode-adbt/main/icons/adbt.png" alt="Aria/ADBT logo">
	<br>
📜 Provides ADBT (Adblock template) support in Visual Studio Code 🪅
</div>

<br>
<br>

## 🪄 Features

Currently it provides the following features:

- high-performance due to small footprint,
- language support and encoding for `*.adbt` files,
- syntax highlighting (see the [official API specification](https://github.com/igorskyflyer/file-formats/blob/main/adbt/README.md#-syntax) for details),
- auto-complete (Intellisense):
  - functions/statements (including path placeholders),
  - comments (including comment modifiers, i.e. `TODO`, `FIXME`, `NOTE`),
- hover information,
- snippets,
- meta files `*.adbm` support, relies on built-in JSON support:
  - autocomplete (Intellisense), see the [official specification](https://github.com/igorskyflyer/file-formats/blob/main/adbt/README.md#-meta-files) for details,
  - hover info,
- custom file icon.

<br>

<div align="center"><em><strong>🎉 Many more features coming soon!</strong></em></div>

<br>
<br>

> 💡 For more information about the `*.adbt` and `*.adbm` files, head to the official [ADBT file format](https://github.com/igorskyflyer/file-formats/blob/main/adbt/README.md) repository.

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
