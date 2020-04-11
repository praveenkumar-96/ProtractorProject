var XLSX = require('xlsx');
var workbook = XLSX.readFile('C:/Users/PraveenKumar/Desktop/selenium/PreparerData.xlsx');
var worksheet = workbook.Sheets['Sheet1'];
const cassandra = require('Cassandra-driver');
var PlainTextAuthProvider = cassandra.auth.PlainTextAuthProvider;
const client = new cassandra.Client({ contactPoints: ['9.220.136.201:9042'],localDataCenter:'dc1',authProvider: new PlainTextAuthProvider('cassandra', 'cassandra'),keyspace:'perf2_keyspace'});
client.connect();
const query = worksheet['P2'].v;
client.execute(query, function (err, result,fields) {
console.log(result);
});
