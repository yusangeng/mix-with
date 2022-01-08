# mix-with

[![TypeScript](https://img.shields.io/badge/lang-typescript-blue.svg)](https://www.tslang.cn/) [![Build Status](https://github.com/yusangeng/mix-with/workflows/test/badge.svg)](https://github.com/yusangeng/mix-with/actions?query=workflow%3Atest) [![Coverage Status](https://coveralls.io/repos/github/yusangeng/mix-with/badge.svg?branch=master)](https://coveralls.io/github/yusangeng/mix-with) [![Npm Package Info](https://badge.fury.io/js/mix-with.svg)](https://www.npmjs.com/package/mix-with) [![Downloads](https://img.shields.io/npm/dw/mix-with.svg?style=flat)](https://www.npmjs.com/package/mix-with)

## Abstract

A type-safe mixin helper function.

## Install

```bash
npm install mix-with --save
```

## Usage

### typescript

```ts
import { mix, catagory } from 'mix-with'

class Foo {
  foo: string = 'foo'
}

const Bar = catagory(
  superclass =>
    class extends superclass {
      bar: string = 'bar'
    }
)

const Baz = catagory(
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
import { mix } from 'mix-with'

class Foo {
  foo = 'foo'
}

const Bar = superclass =>
  class Bar extends superclass {
    bar = 'bar'
  }

const Baz = superclass =>
  class Baz extends superclass {
    baz = 'baz'
  }

const Foobar = mix(Foo).with(Bar, Baz)
const fbz = new Foobar()

console.log(`${fbz.foo}${fbz.bar}${fbz.baz}`) // => foobarbaz
```
