type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

type SanityDocument = {
  id: string;
  _type: string;
};
