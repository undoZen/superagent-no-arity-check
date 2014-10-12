superagent-no-arity-check
=========================

always call callback using two arguments to avoid troubles

Usage
-----

```js
superagent.get('...').ennd(function() {
  //arguments[0] may be null or error object
  //arguments[1] will always be res object
});
```
