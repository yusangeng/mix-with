/* global describe it */
import chai from 'chai'
import { mix, catagory, Constructor } from '../src'

chai.should()

interface IFoo {
  imFoo(): void
}

class Foo implements IFoo {
  a: number = 1
  imFoo() {}
  b() {
    return this.a
  }
}

const Bar = catagory(
  (superclass: Constructor<IFoo>) =>
    class extends superclass {
      c: number = 2
      d() {
        return this.c
      }
    }
)

const Bar2 = catagory(
  superclass =>
    class extends superclass {
      c: number = 2
      d() {
        return this.c
      }
    }
)

const Baz = catagory(
  superclass =>
    class extends superclass {
      e: number = 3
      f() {
        return this.e
      }
    }
)

describe('mix', () => {
  it('should throw', async () => {
    const fn = () => mix(1 as any)
    fn.should.throws()
  })

  it('FooBarBaz result class should have all properties & methods', async () => {
    const FooBarBaz = mix(Foo).with(Bar, Baz)
    const fbz = new FooBarBaz()

    fbz.b().should.be.eq(1)
    fbz.d().should.be.eq(2)
    fbz.f().should.be.eq(3)
  })

  it('BarBaz result class should have all properties & methods', async () => {
    const BarBaz = mix().with(Bar2, Baz)
    const bz = new BarBaz()

    bz.d().should.be.eq(2)
    bz.f().should.be.eq(3)
  })

  it('FooCopy result class should have all properties & methods', async () => {
    const FooCopy = mix(Foo).with()
    const f = new FooCopy()

    f.b().should.be.eq(1)
  })
})
