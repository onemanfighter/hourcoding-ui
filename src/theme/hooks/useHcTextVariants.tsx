import { TextVariantsImp } from '../TextVariants';
import { TextVariantsType } from '../types';

const useHcColor = () => {
  return (textVariant: TextVariantsType) => TextVariantsImp[textVariant];
};

export default useHcColor;
