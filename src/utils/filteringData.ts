import { dataType } from 'types';

const methodInterSection = (obj: dataType, arr: string[]) => {
  for (let i = 0; i < arr.length; i++) {
    if (!obj.method.includes(arr[i])) return false;
  }
  return true;
};

const materialInterSection = (obj: dataType, arr: string[]) => {
  for (let i = 0; i < arr.length; i++) {
    if (!obj.material.includes(arr[i])) return false;
  }
  return true;
};

export { methodInterSection, materialInterSection };
