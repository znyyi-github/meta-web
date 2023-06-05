import { computed, ref, useAttrs } from 'vue';
import type { CcTableContextType } from './context';

export const useTableAttrs = (tableCtx: CcTableContextType) => {
  const { tableData } = tableCtx;
  const attrs = useAttrs();
  const tableAttrs = computed(() => {
    return {
      data: tableData.value,
      ...attrs,
    };
  });
  return {
    tableAttrs,
  };
};
