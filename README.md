# mix-with

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![Npm Info](https://nodei.co/npm/mix-with.png?compact=true)](https://www.npmjs.com/package/mix-with)

ES6 class mixin 工具.

### 安装

```
npm install mix-with --save
```

### 使用

``` js
import mix from 'mix-with'

class Foo {
  foo() {
    console.log('foo')
  }
}

const Bar = superclass => class extends superclass {
  bar() {
    console.log('bar')
  }
}

const Baz = superclass => class extends superclass {
  baz() {
    console.log('baz')
  }
}

class Something extends mix(Foo).with(Bar, Baz) {
  constructor() {
    this.foo()
    this.bar()
    this.baz()
  }
}
```


