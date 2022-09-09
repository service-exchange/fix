telecms cli
=================
<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @service-exchange/telecms-cli
$ telecms COMMAND
running command...
$ telecms (--version)
@service-exchange/telecms-cli/0.0.1 darwin-arm64 node-v14.17.3
$ telecms --help [COMMAND]
USAGE
  $ telecms COMMAND
...
```
<!-- usagestop -->

Command should be executed inside `Tele-CMS` directory

# Commands
<!-- commands -->
[`telecms info`](#telecms-info)

* [`telecms plugin create PLUGIN_NAME`](#telecms-plugin-create-plugin_name)
* [`telecms plugin delete PLUGIN_NAME`](#telecms-plugin-delete-plugin_name)
* [`telecms plugin install NPM_MODULE`](#telecms-plugin-install-npm_module)

## `telecms info`

This command returns the information about where telecms is being run

```
USAGE
  $ telecms info

DESCRIPTION
  This command returns the information about where telecms is being run
```

## `telecms plugin create PLUGIN_NAME`

Creates a new telecms plugin

```
USAGE
  $ telecms plugin create [PLUGIN_NAME] [--type database|api|cloud-storage] [-b]

ARGUMENTS
  PLUGIN_NAME  Name of the plugin

FLAGS
  -b, --build
  --type=<option>  <options: database|api|cloud-storage>

DESCRIPTION
  Create a new telecms plugin

EXAMPLES
  $ telecms plugin create <name> --type=<database | api | cloud-storage> [--build]
```

## `telecms plugin delete PLUGIN_NAME`

Deletes a telecms plugin

```
USAGE
  $ telecms plugin delete [PLUGIN_NAME] [-b]

ARGUMENTS
  PLUGIN_NAME  Name of the plugin

FLAGS
  -b, --build

DESCRIPTION
  Deletes a telecms plugin

EXAMPLES
  $ telecms plugin delete <name> [--build]
```

## `telecms plugin install NPM_MODULE`

Installs a new npm module inside a telecms plugin

```
USAGE
  $ telecms plugin install [NPM_MODULE] --plugin <value>

ARGUMENTS
  NPM_MODULE  Name of the npm module

FLAGS
  --plugin=<value>  (required)

DESCRIPTION
  Installs a new npm module inside a telecms plugin

EXAMPLES
  $ telecms plugin install <npm_module> --plugin <plugin_name>
```
<!-- commandsstop -->
