# ADBT (Adblock template) 🦄

📜 Provides ADBT (Adblock template) support in Visual Studio Code. 🪅

<br>

Currently it provides the following features:

- language support and encoding for `*.adbt` files,
- syntax highlighting (see the [official specification](https://github.com/igorskyflyer/file-formats/tree/main/adbt) for details),
- auto-complete (Intellisense):
  - functions/statements,
  - comments (including comment modifiers, i.e. `TODO`, `FIXME`, `NOTE`),
- hover information,
- meta files `*.adbt.meta` support, relies on built-in JSON support:
  - autocomplete (Intellisense), see the [official specification](https://github.com/igorskyflyer/file-formats/tree/main/adbt) for details,
  - hover info.

<br>

**_🎉 Many more features coming soon!_**

<br>
<br>

> 💡 For more information about the `*.adbt` and `*.adbt.meta` files, head to the official [ADBT file format](https://github.com/igorskyflyer/file-formats/tree/main/adbt) repository.

<br>

## 📦 Prerequisites

As mentioned above, this extension provides ADBT support in Visual Studio Code but to actually compile ADBT files, you need to obtain and install the latest version of [Aria compiler](https://github.com/igorskyflyer/npm-adblock-aria-compiler) (CLI) via npm:

Globally,

```shell
npm i -g "@igor.dvlpr/aria"
```

or locally,

```shell
npm i "@igor.dvlpr/aria"
```

<br>

> 💡 More information about the Aria compiler CLI is available on its [official documentation](https://github.com/igorskyflyer/npm-adblock-aria-compiler).

<br>
<br>

## 🔫 In Action

<p align="center">
	<img src="https://raw.githubusercontent.com/igorskyflyer/vscode-adbt/main/assets/screenshots/intellisense.png" alt="ADBT - auto-complete, Intellisense">
	<sub>Intellisense - auto-complete, including comment modifiers</sub>
	<br>
	<sub>Visual Studio Code theme: <a href="https://github.com/igorskyflyer/vscode-theme-kai"><code>Kai</code></a></sub>
</p>

<br>

<p align="center">
<img src="https://raw.githubusercontent.com/igorskyflyer/vscode-adbt/main/assets/screenshots/syntax.png" alt="ADBT - auto-complete, Intellisense">
	<sub>Syntax highlighting</sub>
	<br>
	<sub>Visual Studio Code theme: <a href="https://github.com/igorskyflyer/vscode-theme-kai"><code>Kai</code></a></sub>
</p>
