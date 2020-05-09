require('dotenv').config()
const [baseID, tableName, fieldName] = process.argv.slice(2)  // [String, String, String]
const getFiles = require('./helper/getFiles')
const downloadData = require('./helper/downloaData')
const Airtable = require('./config/airtable');
const base = Airtable.base(baseID)

base(tableName).select({
	maxRecords: 30,
	view: "Grid view"
}).eachPage((records, fetchNextPage) => {
	const [day, date, month, year] = new Date(records[0]._rawJson.createdTime).toUTCString().split(' ')
	const studentFolders = records.map((task) => {
		return {
			"folder-name": task.get('Name').split(' ').join('-').toLowerCase(),
			files: getFiles(task, fieldName)
		}
	})
	let folder = {
		name: `${month}${year}-${tableName.replace(/\s/g, '')}-${fieldName.replace(/\s/g, '')}`.toLowerCase(),
		studentFolders
	}

	downloadData(folder) 
	// If you're not interest to get file in local,
	// comment function downloadData(folder) and uncomment line below
	// console.log(JSON.stringify(folder, null, 2)) 

	fetchNextPage();
}, function done(err) {
	if (err) { console.error(err); return; }
})