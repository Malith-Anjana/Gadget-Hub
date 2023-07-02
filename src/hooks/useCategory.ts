import { useData } from './useData';

  
export const useCategory = ()=>useData<string>('/categories');