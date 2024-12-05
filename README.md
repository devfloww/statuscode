# Description
`$ statuscode` _HTTP Status Code Lookup_

> ⛔
__Caution:__ `statuscode` is still under development. Do not try to install it.

A CLI app for looking up HTTP status codes from the comfort of your terminal.

Instantly retrieve information on HTTP status codes, including their meaning, description, and specification. No more tedious web searches or cumbersome documentation.

*Features*

- Quick and easy lookup of HTTP status codes
- Detailed information on each status code, including meaning, description, and specification
- Convenient CLI interface for rapid lookup

# Getting Started
## Installation
`statuscode` can be installed using [npm](https://npmjs.com):
```bash
npm install statuscode
```
or by cloning the repo and installing manually:
```bash
# cloning the repo
git clone https://github.com/devfloww/statuscode
# enter the cloned repo directory
cd statuscode

# [on Linux | POSIX]
# give installation script run permissions 
chmod -x ./install.sh
# run the installation script
./install.sh
```
```powershell
# [on Windows], make sure scripts have permission to run
. .\install.ps1
```
## Usage
- To seek help:
```bash
statuscode [-h | --help]
```
- To look-up a status code with a short description (just the name):
```bash
statuscode -c <code>
```
- To look-up a status code with a longer description (meaning, specification, examples): 
```bash
statuscode -c <code> [--l | --long]
```
- To check version:
```bash
statuscode [-v | --version]
```
- To update to latest version of the application
```bash
statuscode --update 
```
## Removal 
And of course, when you don't need it anymore and want to remove it, run:
```bash
statuscode --remove
```
or 
```bash
npm remove statuscode
```
> If you were not satisfied with the experience you had with this tool, please do me a favor and call my attention for improvements. This will help me a lot and I will very much appreciate that.😅

Mail me @ [svdiqhayatuddeen@gmail.com](mailto:svdiqhayatuddeen@gmail.com) or raise an _Issue_ here on Github. Thank you.

# Support me
Buy me coffee to support😅.\

<a href="https://buymeacoffee.com/devfloww" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
