function getFiles(datas){
    let result = []
    for (let name in datas.fields) {
        if (name.includes('Soal')) {
            result.push({
                name: name.split(' ').join('').toLowerCase() + '.js',
                link: datas.fields[name][0].url
            })
        }
    }
    result.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
    })
    return result
}

module.exports = getFiles