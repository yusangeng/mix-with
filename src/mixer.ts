/**
 * interface mixer.
 *
 * @author yusangeng
 */

import { type Constructor, type ConstructorArgTypes, type Catagory } from './type-utils'

export interface Mixer<superclass extends Constructor> {
  with(): superclass

  with<M extends object>(
    m: Catagory<InstanceType<superclass>, M>
  ): Constructor<InstanceType<superclass> & M, ConstructorArgTypes<superclass>>

  with<M1 extends object, M2 extends object>(
    m1: Catagory<InstanceType<superclass>, M1>,
    m2: Catagory<InstanceType<superclass>, M2>
  ): Constructor<InstanceType<superclass> & M1 & M2, ConstructorArgTypes<superclass>>

  with<M1 extends object, M2 extends object, M3 extends object>(
    m1: Catagory<InstanceType<superclass>, M1>,
    m2: Catagory<InstanceType<superclass>, M2>,
    m3: Catagory<InstanceType<superclass>, M3>
  ): Constructor<InstanceType<superclass> & M1 & M2 & M3, ConstructorArgTypes<superclass>>

  with<M1 extends object, M2 extends object, M3 extends object, M4 extends object>(
    m1: Catagory<InstanceType<superclass>, M1>,
    m2: Catagory<InstanceType<superclass>, M2>,
    m3: Catagory<InstanceType<superclass>, M3>,
    m4: Catagory<InstanceType<superclass>, M4>
  ): Constructor<InstanceType<superclass> & M1 & M2 & M3 & M4, ConstructorArgTypes<superclass>>

  with<M1 extends object, M2 extends object, M3 extends object, M4 extends object, M5 extends object>(
    m1: Catagory<InstanceType<superclass>, M1>,
    m2: Catagory<InstanceType<superclass>, M2>,
    m3: Catagory<InstanceType<superclass>, M3>,
    m4: Catagory<InstanceType<superclass>, M4>,
    m5: Catagory<InstanceType<superclass>, M5>
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
    m2: Catagory<InstanceType<superclass>, M2>,
    m3: Catagory<InstanceType<superclass>, M3>,
    m4: Catagory<InstanceType<superclass>, M4>,
    m5: Catagory<InstanceType<superclass>, M5>,
    m6: Catagory<InstanceType<superclass>, M6>
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
    m2: Catagory<InstanceType<superclass>, M2>,
    m3: Catagory<InstanceType<superclass>, M3>,
    m4: Catagory<InstanceType<superclass>, M4>,
    m5: Catagory<InstanceType<superclass>, M5>,
    m6: Catagory<InstanceType<superclass>, M6>,
    m7: Catagory<InstanceType<superclass>, M7>
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
    m2: Catagory<InstanceType<superclass>, M2>,
    m3: Catagory<InstanceType<superclass>, M3>,
    m4: Catagory<InstanceType<superclass>, M4>,
    m5: Catagory<InstanceType<superclass>, M5>,
    m6: Catagory<InstanceType<superclass>, M6>,
    m7: Catagory<InstanceType<superclass>, M7>,
    m8: Catagory<InstanceType<superclass>, M8>
  ): Constructor<InstanceType<superclass> & M1 & M2 & M3 & M4 & M5 & M6 & M7 & M8, ConstructorArgTypes<superclass>>
}
