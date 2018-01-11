Modern JavaScript
===


## Distributed Systems

Building Blocks:
* `OS`/`process`
* Browser
* Server
* Serverless

Two main capabilities:
1. Persistence (file system)
2. Networking

### Http Request/Response

Send a message, get a message

## JavaScript

### eslint

JavaScript linting (fail fast, fail early):
* `> npm i eslint`
* add `.eslintrc`
* vscode extension `ESLint`

See a red or green squiggle? **Fix it now!**
**No** word wrap

### Big Three

1. Objects `{}`
2. Arrays `[]`
3. Functions `()`

## Passing Functions

### Passing functions in javascript

#### "Functional" programming

```js
array.map(x => x * x);
```

* synchronous 
* happens `0` to `n` times

#### Aynchronous "callbacks"

```js
fetch('https://www.googleapis.com/books/v1/volumes?q=Alchemy&maxResults=40&startIndex=1')
  .then(response => response.json())
  .then(data => {
    //...
  });
```

* asynchronous 
* happens once and only once
* __Promises only apply to this category__

#### Event emitters

```js
http.createServer((req, res) => {...});

app.get('/foo', (req, res) => {...});

element.addEventListener('click', event => {...});

$('div').click(event => {...});
```

* (sync to ) asynchronous (observers)
* `0` to `n` times in time

### Event Loop

* What is it?
* Node Event Loop
    * Basic node architecture 101
    * v8 + event-loop + os-lib
    * Thread - actual "thread of execution"
    * Event loop explained
    * JavaScript single threaded event model

### Promises

https://github.com/martypdx/workshop-promises-fat-arrows/blob/master/promise-chaining.md

## Let's Build Something...

* Demo: Book App




