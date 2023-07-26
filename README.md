# ADBT 🦄

Adblock template support for Visual Studio Code

<br>

<div align="center">
	<img src="https://raw.githubusercontent.com/igorskyflyer/vscode-adbt/main/assets/aria.png" alt="Aria/ADBT logo">
	<br>
📜 Provides ADBT (Adblock template) support in Visual Studio Code 🪅
</div>

<br>
<br>

## 🪄 Features

Currently it provides the following features:

- high-performance due to small footprint,
- language support and encoding for `*.adbt` files,
- syntax highlighting (see the [official API specification](https://github.com/igorskyflyer/file-formats/blob/main/adbt/README.md) for details),
- auto-complete (Intellisense):
  - functions/statements (including path placeholders),
  - comments (including comment modifiers, i.e. `TODO`, `FIXME`, `NOTE`),
- hover information,
- meta files `*.adbt.meta` support, relies on built-in JSON support:
  - autocomplete (Intellisense), see the [official specification](hhttps://github.com/igorskyflyer/file-formats/blob/main/adbt/README.md) for details,
  - hover info.

<br>

**_🎉 Many more features coming soon!_**

<br>
<br>

> 💡 For more information about the `*.adbt` and `*.adbt.meta` files, head to the official [ADBT file format](https://github.com/igorskyflyer/file-formats/blob/main/adbt/README.md) repository.

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
