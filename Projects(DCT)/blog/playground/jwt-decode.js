const jwt = require('jsonwebtoken')

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzdhMzZlNTUwNjczNzI4MWYwZDg2OTIiLCJ1c2VybmFtZSI6ImthdnlhIiwiY3JlYXRlZEF0IjoxNTUxNjIxMTM0OTM5LCJpYXQiOjE1NTE2MjExMzR9.TYfCKQi6-kc-J9pRcHUIn71PZulnDYkpsWOmsD_7MzI"

console.log(jwt.verify(token, 'jwt123'))