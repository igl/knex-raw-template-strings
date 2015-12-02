'use strict'

module.exports = function SQL (template) {
    var args = Array.prototype.slice.call(arguments, 1)
    var sql = ''
    var values = []
    var i = 0
    var templateLength = template.length
    var argsLength = args.length

    for (i; i < templateLength; i++) {
        sql += template[i]

        if (typeof args[i] === 'object' && args[i] !== null) {
            sql += args[i].value
        } else if (i < argsLength) {
            values.push(args[i])
            sql += '?'
        }
    }

    return [ sql, values ]
}
