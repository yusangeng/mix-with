# mix-with

[![TypeScript](https://img.shields.io/badge/lang-typescript-blue.svg)](https://www.tslang.cn/) [![Build Status](https://travis-ci.org/yusangeng/mix-with.svg?branch=master)](https://travis-ci.org/yusangeng/mix-with) [![Coverage Status](https://coveralls.io/repos/github/yusangeng/mix-with/badge.svg?branch=master)](https://coveralls.io/github/yusangeng/mix-with?branch=master) [![Npm Package Info](https://badge.fury.io/js/mix-with.svg)](https://www.npmjs.com/package/mix-with) [![Downloads](https://img.shields.io/npm/dw/mix-with.svg?style=flat)](https://www.npmjs.com/package/mix-with)

## Abstract

A mixin helper for typescript & es6.

## Install

```bash
npm install mix-with --save
```

## Usage

### typescript

```ts
import { mix, mixin } from 'mix-with'

class Foo {
  foo: string = 'foo'
}

const Bar = mixin(
  superclass =>
    class extends superclass {
      bar: string = 'bar'
    }
)

const Baz = mixin(
  superclass =>
    class extends superclass {
      baz: string = 'baz'
    }
)

const Foobar = mix(Foo).with(Bar, Baz)
const fbz = new Foobar()

console.log(`${fbz.foo}${fbz.bar}${fbz.baz}`) // => foobarbaz
```

### javacript

```js
import { mix, mixin } from 'mix-with'

class Foo {
  foo = 'foo'
}

const Bar = mixin(
  superclass =>
    class Bar extends superclass {
      bar = 'bar'
    }
)

const Baz = mixin(
  superclass =>
    class Baz extends superclass {
      baz = 'baz'
    }
)

const Foobar = mix(Foo).with(Bar, Baz)
const fbz = new Foobar()

console.log(`${fbz.foo}${fbz.bar}${fbz.baz}`) // => foobarbaz
```
