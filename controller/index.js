var os = require('os');
var path = require('path');
require('dotenv').config();

function Capitalize(str)
{  return str.replace (/\w\S*/g, 
      function(txt)
      {  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); } );
}

exports.index=function(req,res){

        res.render(path.join(__dirname+'/../views/index.ejs'),
      	{title:'Web'}); 
};
exports.page_not_found=function(req,res){

        res.render(path.join(__dirname+'/../views/page_not_found.ejs'),
        {title:'Web Not Found'}); 
  }
exports.create=function(req,res){
const request = require('request-promise');
const datanya = {
    tgl_transaksi: req.body.tgl_transaksi,
    penjualan: req.body.penjualan,
    qty: req.body.qty,
    harga_jual: req.body.harga_jual,
    lokasi: req.body.lokasi
};
const options = {
    method: 'POST',
    url: 'http://localhost:3004/transaction/insert_transaction',
    body: datanya,
    json: true,
    headers: {
        'Content-Type': 'application/json'
    }
}
request(options).then(function (response){
    console.log(response);
    res.status(200).send('<script>alert("Transaction added"); location.replace(document.referrer);</script>')
})
.catch(function (err) {
    console.log(err);
     res.status(500).send('<script>alert("Transaction fail");  document.location.href="/";</script>') 

})
 }

