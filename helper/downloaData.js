const shell = require("shelljs");

function downloadData(folder){
    shell.exec(`mkdir corrections`)
    shell.exec(`mkdir ./corrections/${folder.name}`)
    folder.studentFolders.forEach(el => {
        shell.exec(`mkdir ./corrections/${folder.name}/${el['folder-name']}`)
        el.files.forEach(file => {
            shell.exec(`curl ${file.link} -o ./corrections/${folder.name}/${el['folder-name']}/${file.name}`)
        })
    })
    shell.exec(`clear`)
    console.log('\n\n🗄 🏠 LOCAL TABLE  🐑💨 ___ __ _ _ 🐑💨 ___ _ _ _ 🐑💨 ___ _   ☁️ ☀️ ☁️ \n\n')
    console.log('💯 DONE! ')
    console.log(`📥 Files download in directory : ./corrections/${folder.name}/  \n\n`)
}

module.exports = downloadData