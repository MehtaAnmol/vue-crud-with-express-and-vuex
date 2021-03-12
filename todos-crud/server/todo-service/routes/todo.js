var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

const todosFilePath = path.join(__dirname, '../db.json');
const todosFile = fs.readFileSync(todosFilePath);
var todos = JSON.parse(todosFile);

/* GET todos listing. */
router.get('/', function (req, res, next) {
  res.send(todos.todos);
});

router.get('/:id', function (req, res, next) {
  let id = req.params.id && req.params.id !== "" ? parseInt(req.params.id) : 0;
  if (id > 0) {
    res.statusCode = 200;
    let todo = todos.todos.filter((elem) => elem.id === id)[0];
    res.send(todo);
  } else {
    res.statusCode = 204;
    res.send({ error: "Data not found" });
  }
});

router.post('/', function (req, res, next) {
  if (req.body) {
    const length = todos.todos.length;
    const todoObj = {
      id: length + 1,
      todo: req.body.todo
    };

    todos.todos.push(todoObj);
    res.statusCode = 200;
    res.send(todos.todos);
  } else {
    res.statusCode = 400;
    res.send({ error: 'body cannot be blank' });
  }
});

router.put('/', function (req, res, next) {
  console.log(req.body);
  if (req.body) {
    const todoObj = req.body;
    for (let obj of todos.todos) {
      if (obj.id === req.body.id) {
        obj.todo = todoObj.todo;
      }
    }
    res.statusCode = 200;
    res.send(todos.todos);
  } else {
    res.statusCode = 400;
    res.send({ error: 'body cannot be blank' });
  }
});

module.exports = router;
