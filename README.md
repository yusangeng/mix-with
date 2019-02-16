# mix-with

[![TypeScript](https://img.shields.io/badge/lang-typescript-blue.svg)](https://www.tslang.cn/) [![Build Status](https://travis-ci.org/yusangeng/mix-with.svg?branch=master)](https://travis-ci.org/yusangeng/mix-with) [![Coverage Status](https://coveralls.io/repos/github/yusangeng/mix-with/badge.svg?branch=master)](https://coveralls.io/github/yusangeng/mix-with?branch=master) [![Npm Package Info](https://badge.fury.io/js/mix-with.svg)](https://www.npmjs.com/package/mix-with) [![Downloads](https://img.shields.io/npm/dw/mix-with.svg?style=flat)](https://www.npmjs.com/package/mix-with)

## 综述 | Abstract

A mixin helper of typescript & es6.

## 安装 | Install

``` bash
npm install mix-with --save
```

## 使用 | Usage

### typescript

``` ts
import { mix, Ctor } from 'mix-with'

class Foo {
  foo: string = 'foo'
}

const Bar = <T extends Ctor>(superclass: T) => class extends superclass {
  bar: string = 'bar'
}

const Baz = <T extends Ctor>(superclass: T) => class extends superclass {
  baz: string = 'baz'
}

const Foobar = mix(Foo).with(Bar, Baz)
const fbz = new Foobar()

console.log(`${fbz.foo}${fbz.bar}${fbz.baz}`) // => foobarbaz
```

### ecmascript

``` js
import mix from 'mix-with'

class Foo { foo = 'foo' }

const Bar = (superclass) => class Bar extends superclass {
  bar = 'bar'
}

const Baz = (superclass) => class Baz extends superclass {
  baz = 'baz'
}

const Foobar = mix(Foo).with(Bar, Baz)
const fbz = new Foobar()

console.log(`${fbz.foo}${fbz.bar}${fbz.baz}`) // => foobarbaz
```
