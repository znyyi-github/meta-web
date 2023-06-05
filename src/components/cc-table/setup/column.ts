import type { CcTableContextType } from './context';
import { computed } from 'vue';

export const useTableColumns = (tableCtx: CcTableContextType) => {
  const { props } = tableCtx;
  const tableColums = computed(() => {
    return [{ type: 'index', width: '55px' }, ...props.columns];
  });
  return { tableColums };
};
