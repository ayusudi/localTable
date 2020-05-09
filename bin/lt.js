#! /usr/bin/env node
const shell = require("shelljs");
const argv = process.argv.slice(2)
let [baseID, tableName, buddyID = ''] = argv

if (argv.length >= 2) {
	shell.exec(`node localTable.js "${baseID}" "${tableName}" "${buddyID}"`)
} else {
	console.log(`
    ERROR. INVALID COMMAND \n   
    LIST COMMAND LINE
    ╔══════════════════════════════════════════════════════════════════╗
    ║                                                                  ║
    ║    $ lt <base_id> <table_name>                                   ║
    ║    To get all file from table in airtable base_id                ║
    ║                                                                  ║
    ║    $ lt <base_id> <table_name> <buddy_id>                        ║
    ║    To get all file by buddy_id from table in airtable base_id    ║
    ║                                                                  ║
    ║    $ lts <base_id> <table_name> <field_name>                     ║
    ║    To get specific file from all submission                      ║                                     
    ║                                                                  ║
    ╚══════════════════════════════════════════════════════════════════╝\n\n`)
}
