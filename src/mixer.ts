/**
 * interface mixer.
 *
 * @author yusangeng
 */

import {
  type Constructor,
  type ConstructorArgTypes,
  type MergeElementTypes
} from './type-utils'

type Catagory<T extends object, M extends object> = (superclass: Constructor<T>) => Constructor<M>

type Minxins2Catagories<T extends object, Mixins extends object[]> = {
  [K in keyof Mixins]: Catagory<T, Mixins[K]>;
}

export interface Mixer<superclass extends Constructor> {
  with(): superclass
  with<Mixins extends object[]>(...mixins: Minxins2Catagories<InstanceType<superclass>, Mixins>)
    : Constructor<InstanceType<superclass> & MergeElementTypes<Mixins>, ConstructorArgTypes<superclass>>
}