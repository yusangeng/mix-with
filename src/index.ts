/**
 * mixin helper function.
 *
 * @author yusangeng
 */

type ConstructorArgTypes<T> = T extends new (...args: infer Args) => any ? Args : never

export type Constructor<Target extends object = object, Args extends any[] = any[]> = new (...args: Args) => Target

type Catagory<T extends object, M extends object> = (superclass: Constructor<T>) => Constructor<M>

// m为一个接收基类, 返回子类的函数, 形如:
// const m = (superclass: Constructor) => class extends superclass {
//   someMixinMethod () {
//     console.log('hello.')
//   }
// }
export interface Mixer<superclass extends Constructor> {
  with(): superclass

  with<M extends object>(
    m: Catagory<InstanceType<superclass>, M>
  ): Constructor<InstanceType<superclass> & M, ConstructorArgTypes<superclass>>

  with<M1 extends object, M2 extends object>(
    m1: Catagory<InstanceType<superclass>, M1>,
    m2: Catagory<InstanceType<superclass> & M1, M2>
  ): Constructor<InstanceType<superclass> & M1 & M2, ConstructorArgTypes<superclass>>

  with<M1 extends object, M2 extends object, M3 extends object>(
    m1: Catagory<InstanceType<superclass>, M1>,
    m2: Catagory<InstanceType<superclass> & M1, M2>,
    m3: Catagory<InstanceType<superclass> & M1 & M2, M3>
  ): Constructor<InstanceType<superclass> & M1 & M2 & M3, ConstructorArgTypes<superclass>>

  with<M1 extends object, M2 extends object, M3 extends object, M4 extends object>(
    m1: Catagory<InstanceType<superclass>, M1>,
    m2: Catagory<InstanceType<superclass> & M1, M2>,
    m3: Catagory<InstanceType<superclass> & M1 & M2, M3>,
    m4: Catagory<InstanceType<superclass> & M1 & M2 & M3, M4>
  ): Constructor<InstanceType<superclass> & M1 & M2 & M3 & M4, ConstructorArgTypes<superclass>>

  with<M1 extends object, M2 extends object, M3 extends object, M4 extends object, M5 extends object>(
    m1: Catagory<InstanceType<superclass>, M1>,
    m2: Catagory<InstanceType<superclass> & M1, M2>,
    m3: Catagory<InstanceType<superclass> & M1 & M2, M3>,
    m4: Catagory<InstanceType<superclass> & M1 & M2 & M3, M4>,
    m5: Catagory<InstanceType<superclass> & M1 & M2 & M3 & M4, M5>
  ): Constructor<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5, ConstructorArgTypes<superclass>>

  with<
    M1 extends object,
    M2 extends object,
    M3 extends object,
    M4 extends object,
    M5 extends object,
    M6 extends object
  >(
    m1: Catagory<InstanceType<superclass>, M1>,
    m2: Catagory<InstanceType<superclass> & M1, M2>,
    m3: Catagory<InstanceType<superclass> & M1 & M2, M3>,
    m4: Catagory<InstanceType<superclass> & M1 & M2 & M3, M4>,
    m5: Catagory<InstanceType<superclass> & M1 & M2 & M3 & M4, M5>,
    m6: Catagory<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5, M6>
  ): Constructor<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5 & M6, ConstructorArgTypes<superclass>>

  with<
    M1 extends object,
    M2 extends object,
    M3 extends object,
    M4 extends object,
    M5 extends object,
    M6 extends object,
    M7 extends object
  >(
    m1: Catagory<InstanceType<superclass>, M1>,
    m2: Catagory<InstanceType<superclass> & M1, M2>,
    m3: Catagory<InstanceType<superclass> & M1 & M2, M3>,
    m4: Catagory<InstanceType<superclass> & M1 & M2 & M3, M4>,
    m5: Catagory<InstanceType<superclass> & M1 & M2 & M3 & M4, M5>,
    m6: Catagory<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5, M6>,
    m7: Catagory<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5 & M6, M7>
  ): Constructor<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5 & M6 & M7, ConstructorArgTypes<superclass>>

  with<
    M1 extends object,
    M2 extends object,
    M3 extends object,
    M4 extends object,
    M5 extends object,
    M6 extends object,
    M7 extends object,
    M8 extends object
  >(
    m1: Catagory<InstanceType<superclass>, M1>,
    m2: Catagory<InstanceType<superclass> & M1, M2>,
    m3: Catagory<InstanceType<superclass> & M1 & M2, M3>,
    m4: Catagory<InstanceType<superclass> & M1 & M2 & M3, M4>,
    m5: Catagory<InstanceType<superclass> & M1 & M2 & M3 & M4, M5>,
    m6: Catagory<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5, M6>,
    m7: Catagory<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5 & M6, M7>,
    m8: Catagory<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5 & M6 & M7, M8>
  ): Constructor<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5 & M6 & M7 & M8, ConstructorArgTypes<superclass>>
}

class DefaultSuperClass {}

type _MixerType<T> = T extends Constructor ? Mixer<T> : never
type MixerType<T> = T extends undefined ? Mixer<typeof DefaultSuperClass> : _MixerType<T>

export function mix<T extends Constructor>(superclass?: T): MixerType<T> {
  const clazz = superclass || DefaultSuperClass

  if (typeof clazz !== 'function') {
    throw new TypeError('The argument "superclass" of function "mix" should be a class.')
  }

  return {
    with(...mixins: any[]) {
      return mixins.reduce((prev, mixin) => mixin(prev), clazz)
    }
  } as MixerType<T>
}

export function catagory<T extends object, U extends T>(fn: (superclass: Constructor<T>) => Constructor<U>) {
  return fn
}

// 兼容老函数名
export const mixin = catagory

export default mix
