'use strict'

module.exports = function SQL (template) {
    var args = Array.from(arguments).slice(1)
    var sql = ''
    var values = []

    for (var i = 0, stringsLength = template.length, argsLength = args.length; i < stringsLength; i++) {
        sql += template[i]
        if (typeof args[i] === 'object' && args[i] !== null && args[i].raw) {
            sql += args[i].value
        } else if (i < argsLength) {
            values.push(args[i])
            sql += '?'
        }
    }

    return [ sql, values ]
}
