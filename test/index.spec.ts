/* global describe it */
import chai from 'chai'
import { mix, C, $ } from '../src'

chai.should()

describe('mix', () => {
  it('result class should have all properties & methods', async () => {
    class Foo {
      a: number = 1
      b () { return this.a }
    }

    const Bar = <T>(superclass: C<T>) => {
      class Bar extends $(superclass) {
        c: number = 2
        d () { return this.c }
      }
      
      return Bar as C<T & Bar>
    }

    const Baz = <T>(superclass: C<T>) => {
      class Baz extends $(superclass) {
        e: number = 3
        f () { return this.e }
      } 

      return Baz as C<T & Baz>
    }

    const FooBarBaz = mix(Foo).with(Bar, Baz)
    const fbz = new FooBarBaz()

    fbz.b().should.be.eq(1)
    fbz.d().should.be.eq(2)
    fbz.f().should.be.eq(3)

    const BarBaz = mix().with(Bar, Baz)
    const bz = new BarBaz()
    
    bz.d().should.be.eq(2)
    bz.f().should.be.eq(3)
  })
})