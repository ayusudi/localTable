> ###### localtable
<meta property="og:title" content="Local Table"/>
#  :file_cabinet: :house: LOCAL TABLE 

##### Local Table help you download file from airtable to your local computer with command line

<u>**Note :**</u><br>
If you're instrested to fetching files link without download to local.<br>
please follow this information :arrow_heading_down:<br>
![info](./assets/dowloadData.png)​
**find this code** in `localTable.js` and `localSpecific.js`

> ######  :rocket: Local Tabel faster than GUI

<br>

## Getting Started

```bash
$ git clone https://github.com/ayusudi/localTable.git
$ cd localTable
$ npm install 
$ npm link 
$ touch .env 
```

**Write your env with this template**

```js
APIKEY="REPLACE_WITH_AIRTABLE_APIKEY"
```

<br>

## List CLI (Command Line)   

**Local Table** by default download file to your local directory :inbox_tray:

| CLI                                     | Description                                                  |
| --------------------------------------- | ------------------------------------------------------------ |
| lt <base_id> <table_name>               | To get all file from **table in your database**              |
| lt <base_id> <table_name> <buddy_id>    | To get all file by **buddy_id** from **table in your database** |
| lts <base_id> <table_name> <field_name> | To get **specific file** from all submission in table        |

<br>

## Demo :robot:


![demo](https://drive.google.com/uc?export=view&id=15xIDnm2he6RsmvBV7kkLu5vx801xyuZp)

![done](./assets/done.png)



## Clue

clue for : 

- base_id
- table_name
- field_name
- buddy_id

![clue](https://drive.google.com/uc?export=view&id=1jTOEV0C0kFxot454HHCfGYfbyR0vTj6d)