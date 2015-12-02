knex-raw-template-strings
-------------------------

# Installation

    npm install --save knex-raw-template-strings


# Usage
    // compiles:
    knex.raw(...SQL`select * from users where name = ${ 'Hans' };`)
    // to:
    knex.raw(...[ 'select * from users where name = ?;', [ 'Hans' ] ])


# License

MIT

THIS SOFTWARE COMES WITH NO WARRANTIES, USE AT YOUR OWN RISK.
[ALL IN CAPITAL LETTERS BECAUSE I REALLY REALLY MEAN IT, KTHXBYE].
