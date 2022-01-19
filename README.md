# mix-with

[![TypeScript](https://img.shields.io/badge/lang-typescript-blue.svg)](https://www.tslang.cn/) [![Build Status](https://github.com/yusangeng/mix-with/workflows/test/badge.svg)](https://github.com/yusangeng/mix-with/actions?query=workflow%3Atest) [![Coverage Status](https://coveralls.io/repos/github/yusangeng/mix-with/badge.svg?branch=master)](https://coveralls.io/github/yusangeng/mix-with) [![Npm Package Info](https://badge.fury.io/js/mix-with.svg)](https://www.npmjs.com/package/mix-with) [![Downloads](https://img.shields.io/npm/dw/mix-with.svg?style=flat)](https://www.npmjs.com/package/mix-with)

## Abstract

A type-safe mixin helper function.

## Install

```bash
npm install mix-with --save
```

## Concepts

### superclass

`superclass` is the typescript class to which you want to mix some feature.

Example:

```ts
class Foo {
  foo: string = 'foo'
}
```

### catagory

`catagory` is a feature described by a function which maps a `superclass`(in parameter) to a anonymous typescript class(out parameter).

Example:

```ts
import { catagory } from 'mix-with'

const Bar = catagory(
  superclass =>
    class extends superclass {
      bar: string = 'bar'
    }
)
```

### mix

`mix` is the core function of this library(mix-with).

To mixin features to your `superclass`, you should wrap your `superclass` with the `mix` function, which returns a special object with a method named `with`.

The input of `with` method is the `catagories` you want to mixin, the output of `with` method is the result class.

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

const Foobarbaz = mix(Foo).with(Bar, Baz)
const fbz = new Foobarbaz()

console.log(`${fbz.foo}${fbz.bar}${fbz.baz}`) // => foobarbaz
```

### Type constraint of superclass

`superclass` could be constrained by an interface.

Example:

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

      barMethod() {
        // method of ISuperClass
        this.isSuperClass()
      }
    }
)

const Foobar = mix(Foo).with(Bar) // OK
const ErrorFoobar = mix(FakeFoo).with(Bar) // => TSError
```

### Constructor type constraint of superclass

The type constraints of the constructor of the mixed result class is the same as the type constraints of input `superclass`.

Note:

- The output anonymous class of a catagory should NOT have custom constructor.

```ts
import { mix, catagory, Constructor } from 'mix-with'

class Foo {
  // Constructor type constraint of superclass
  constructor(text: string) {
    console.log(text)
  }
}

const Bar = catagory(
  superclass =>
    class extends superclass {
      bar: string = 'bar'
    }
)

const Foobar = mix(Foo).with(Bar)

const foobar = new Foobar('somt text') // OK
const errorFoobar = new Foobar() // TSError
```
