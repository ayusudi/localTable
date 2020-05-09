require('dotenv/types').config()
const [baseID, tableName, buddyID] = process.argv.slice(2)  // [String, String, String]
const getFiles = require('./helper/getFiles')
const Airtable = require('./config/airtable');
const base = Airtable.base(baseID)

base(tableName).select({
    maxRecords: 30,
    view: "Grid view"
}).eachPage((records, fetchNextPage) => {
    const [day, date, month, year] = new Date(records[0]._rawJson.createdTime).toUTCString().split(' ')
    const studentFolders = records.filter(record => record.fields.Buddy.includes(buddyID))
    const datas = studentFolders.map((task) => {
        return {
            "folder-name": task.get('Name').split(' ').join('-').toLowerCase(),
            files: getFiles(task)
        }
    })
    let folder = {
        name: `${month}${year}-${tableName.replace(/\s/g, '')}`.toLowerCase(),
        studentFolders: datas
    }
    console.log(JSON.stringify(folder, null, 2))
    fetchNextPage();
}, function done(err) {
    if (err) { console.error(err); return; }
})