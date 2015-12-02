'use strict'

var SQL     = require('../index')
var assert  = require('assert')

suite('knex-raw-template-strings', function () {

    test('compiles to knex.raw argument array', function () {
        var name = 'Hans'
        var query = SQL`select * from users where name = ${ name };`

        assert.deepEqual(query, [ 'select * from users where name = ?;', [ 'Hans' ] ])
    })

})
