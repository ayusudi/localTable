# LOCAL TABLE 

For fetching database from airtable 

### Getting Started

```
npm install 
npm link 
touch .env 
```

**Write your env with this template**

```js
APIKEY="REPLACE_WITH_AIRTABLE_APIKEY"
```



### List CLI (Command Line)   

| CLI                                     | Description                                              |
| --------------------------------------- | -------------------------------------------------------- |
| lt <base_id> <table_name>               | To get all file from **table base_id**                   |
| lt <base_id> <table_name> <buddy_id>    | To get all file by **buddy_id** from **table base_id**** |
| lts <base_id> <table_name> <field_name> | To get **specific file** from all submission in table    |

