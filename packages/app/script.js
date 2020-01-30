const ibmdb = require('ibm_db');

const dbname = 'MYDB';
const myhost = 'db';
const dbport = '50000';
const db2user = 'db2inst1';
const db2pass = 'thisisthepwd';


ibmdb.open(`DATABASE=${dbname};HOSTNAME=${myhost};UID=${db2user};PWD=${db2pass};PORT=${dbport};PROTOCOL=TCPIP`, function (err,conn) {
    if (err) return console.log(err);

    conn.query('select * from FRUITS.APPLE', function (err, data) {
        if (err) console.log(err);
        else console.log(data);

        conn.close(function () {
            console.log('done');
        });
    });
});
