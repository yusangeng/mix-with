# mix-with

[![TypeScript](https://img.shields.io/badge/lang-typescript-blue.svg)](https://www.tslang.cn/) [![Build Status](https://github.com/yusangeng/mix-with/workflows/test/badge.svg)](https://github.com/yusangeng/mix-with/actions?query=workflow%3Atest) [![Coverage Status](https://coveralls.io/repos/github/yusangeng/mix-with/badge.svg?branch=master)](https://coveralls.io/github/yusangeng/mix-with) [![Npm Package Info](https://badge.fury.io/js/mix-with.svg)](https://www.npmjs.com/package/mix-with) [![Downloads](https://img.shields.io/npm/dw/mix-with.svg?style=flat)](https://www.npmjs.com/package/mix-with)

## Abstract

A type-safe mixin helper function.

## Install

```bash
npm install mix-with --save
```

## Usage

### Basic usage

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

### Type constraint of superclass

```ts
import { mix, catagory, Constructor } from 'mix-with'

interface ISuperClass {
  isSuperClass(): boolean
}

class Foo implement ISuperClass {
  foo: string = 'foo'
  isSuperClass() {
    return true
  }
}

class FakeFoo {
  foo: string = 'foo'
}

// Type constraint of superclass
const Bar = catagory(
  (superclass: Constructor<ISuperClass>) =>
    class extends superclass {
      bar: string = 'bar'
    }
)

const Foobar = mix(Foo).with(Bar) // Ok
const AnotherFoobar = mix(FakeFoo).with(Bar) // => TSError
```
