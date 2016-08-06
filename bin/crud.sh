curl -XPOST "127.0.0.1:3001/product" -d '{"id":1,"name":"Test","price":1}' -H 'Content-Type: application/json'
curl -XGET "127.0.0.1:3001/product" -H 'Content-Type: application/json'
curl -XPUT "127.0.0.1:3001/product/1" -d '{"name":"Test1"}' -H 'Content-Type: application/json'
curl -XGET "127.0.0.1:3001/product/1" -H 'Content-Type: application/json'
curl -XDELETE "127.0.0.1:3001/product/1"

