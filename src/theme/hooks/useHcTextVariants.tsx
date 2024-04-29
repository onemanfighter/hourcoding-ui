import { TextVariantsImp } from '../TextVariants';
import { TextVariantsType, TextVariant } from '../types';

const useHcColor = () => {
  return (textVariant: TextVariantsType) => TextVariantsImp[textVariant as string] as TextVariant;
};

export default useHcColor;
