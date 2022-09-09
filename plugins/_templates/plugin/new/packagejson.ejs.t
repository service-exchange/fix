---
to: <%= plugins_path %>/packages/<%= name %>/package.json
---
{
  "name": "@service-exchange/<%= name %>",
  "version": "1.0.0",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "directories": {
    "lib": "lib",
    "test": "__tests__"
  },
  "files": [
    "lib"
  ],
  "scripts": {
    "test": "echo \"Error: run tests from root\" && exit 1",
    "build": "tsc -b",
    "clean": "rimraf ./dist && rimraf tsconfig.tsbuildinfo"
  },
  "homepage": "https://github.com/service-exchange/fix#readme",
  "dependencies": {
    "@service-exchange/common": "file:../common",
    "react": "^17.0.2"
  }
}