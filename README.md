# Toy Store CLI
by [Christopher Gutierrez](mailto:christophergoot@gmail.com)
[christophergoot.com](http://christophergoot.com)

## Description
A command line interface to a transactional key value store. A user can enter commands to get/get/delete key:value pairs and count values. All values are treated as strings, and data only exists in session memory

## Instructions
1. Navigate to [repo](https://github.com/christophergoot/toy-store)
2. Clone locally using `git clone https://github.com/christophergoot/toy-store.git`
3. Load using `node javascript-cli.js`

## Supported Commands
|Command            |Description   |
|---|---|
|SET <key> <value>  |store the value for key   |
|GET <key>          |return the current value for key   |
|DELETE <key>       |remove the entry for key   |
|COUNT <value>      |return the number of keys that have the given value   |