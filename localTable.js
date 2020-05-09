require('dotenv').config()
const [baseID, tableName, buddyID] = process.argv.slice(2)  // [String, String, String]
const getFiles = require('./helper/getFiles')
const downloadData = require('./helper/downloaData')
const Airtable = require('./config/airtable');
const base = Airtable.base(baseID)

base(tableName).select({
	maxRecords: 30,
	view: "Grid view"
}).eachPage((records, fetchNextPage) => {
	const [day, date, month, year] = new Date(records[0]._rawJson.createdTime).toUTCString().split(' ')
	const filterRecords = buddyID ? records.filter(record => record.fields.Buddy.includes(buddyID)) : records
	const studentFolders = filterRecords.map((task) => {
		return {
			"folder-name": task.get('Name').split(' ').join('-').toLowerCase(),
			files: getFiles(task)
		}
	})
	let folder = {
		name: `${month}${year}-${tableName.replace(/\s/g, '')}`.toLowerCase(),
		studentFolders
	}

	downloadData(folder) 
	// If you're not interest to get file in local,
	// comment downloadData(folder) and uncomment line below
	// console.log(JSON.stringify(folder, null, 2)) 

	fetchNextPage()
}, function done(err) {
	if (err) { console.error(err); return; }
})



