/**
 * mixin helper function.
 *
 * @author Y3G
 */

export type Constructor<T = {}> = new (...args: any[]) => T

type Catagory<T, M> = (superclass: Constructor<T>) => Constructor<M>

// m为一个接收基类, 返回子类的函数, 形如:
// const m = (superclass: Constructor) => class extends superclass {
//   someMixinMethod () {
//     console.log('hello.')
//   }
// }
export interface Mixer<superclass extends Constructor> {
  with<M>(m: Catagory<InstanceType<superclass>, M>): Constructor<InstanceType<superclass> & M>

  with<M1, M2>(
    m1: Catagory<InstanceType<superclass>, M1>,
    m2: Catagory<InstanceType<superclass> & M1, M2>
  ): Constructor<InstanceType<superclass> & M1 & M2>

  with<M1, M2, M3>(
    m1: Catagory<InstanceType<superclass>, M1>,
    m2: Catagory<InstanceType<superclass> & M1, M2>,
    m3: Catagory<InstanceType<superclass> & M1 & M2, M3>
  ): Constructor<InstanceType<superclass> & M1 & M2 & M3>

  with<M1, M2, M3, M4>(
    m1: Catagory<InstanceType<superclass>, M1>,
    m2: Catagory<InstanceType<superclass> & M1, M2>,
    m3: Catagory<InstanceType<superclass> & M1 & M2, M3>,
    m4: Catagory<InstanceType<superclass> & M1 & M2 & M3, M4>
  ): Constructor<InstanceType<superclass> & M1 & M2 & M3 & M4>

  with<M1, M2, M3, M4, M5>(
    m1: Catagory<InstanceType<superclass>, M1>,
    m2: Catagory<InstanceType<superclass> & M1, M2>,
    m3: Catagory<InstanceType<superclass> & M1 & M2, M3>,
    m4: Catagory<InstanceType<superclass> & M1 & M2 & M3, M4>,
    m5: Catagory<InstanceType<superclass> & M1 & M2 & M3 & M4, M5>
  ): Constructor<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5>

  with<M1, M2, M3, M4, M5, M6>(
    m1: Catagory<InstanceType<superclass>, M1>,
    m2: Catagory<InstanceType<superclass> & M1, M2>,
    m3: Catagory<InstanceType<superclass> & M1 & M2, M3>,
    m4: Catagory<InstanceType<superclass> & M1 & M2 & M3, M4>,
    m5: Catagory<InstanceType<superclass> & M1 & M2 & M3 & M4, M5>,
    m6: Catagory<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5, M6>
  ): Constructor<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5 & M6>

  with<M1, M2, M3, M4, M5, M6, M7>(
    m1: Catagory<InstanceType<superclass>, M1>,
    m2: Catagory<InstanceType<superclass> & M1, M2>,
    m3: Catagory<InstanceType<superclass> & M1 & M2, M3>,
    m4: Catagory<InstanceType<superclass> & M1 & M2 & M3, M4>,
    m5: Catagory<InstanceType<superclass> & M1 & M2 & M3 & M4, M5>,
    m6: Catagory<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5, M6>,
    m7: Catagory<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5 & M6, M7>
  ): Constructor<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5 & M6 & M7>

  with<M1, M2, M3, M4, M5, M6, M7, M8>(
    m1: Catagory<InstanceType<superclass>, M1>,
    m2: Catagory<InstanceType<superclass> & M1, M2>,
    m3: Catagory<InstanceType<superclass> & M1 & M2, M3>,
    m4: Catagory<InstanceType<superclass> & M1 & M2 & M3, M4>,
    m5: Catagory<InstanceType<superclass> & M1 & M2 & M3 & M4, M5>,
    m6: Catagory<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5, M6>,
    m7: Catagory<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5 & M6, M7>,
    m8: Catagory<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5 & M6 & M7, M8>
  ): Constructor<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5 & M6 & M7 & M8>
}

class DefaultSuperClass {}

type _MixerType<T> = T extends Constructor ? Mixer<T> : never
type MixerType<T> = T extends undefined ? Mixer<typeof DefaultSuperClass> : _MixerType<T>

export function mix<T extends Constructor>(superclass?: T): MixerType<T> {
  const clazz = superclass || DefaultSuperClass

  if (typeof clazz !== 'function') {
    throw new TypeError('Argument "superclass" should be a class.')
  }

  return {
    with(...mixins: any[]) {
      return mixins.reduce((prev, mixin) => mixin(prev), clazz)
    }
  } as MixerType<T>
}

export function mixin<T extends Constructor, U extends T>(fn: (superclass: T) => U) {
  return fn
}

export default mix
