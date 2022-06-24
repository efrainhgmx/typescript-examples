import express from 'express';

//const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

  res.status(401).json({
    ok: false,
    msg: 'No hay token en la aplicación'
  })
  res.json({
    ok: true,
    msg: 'Todo ok!'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})