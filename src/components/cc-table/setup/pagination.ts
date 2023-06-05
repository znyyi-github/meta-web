import { computed } from 'vue';
import type { CcTableContextType } from './context';
export const usePagination = (tableCtx: CcTableContextType) => {
  const { pagination, props, updateTableData } = tableCtx;
  const paginationAttrs = computed(() => {
    return {
      ...pagination.value,
      pageSizes: props.pageSizes,
      layout: 'total, sizes, prev, pager, next, jumper',
      onSizeChange: (pageSize: number) => {
        pagination.value.pageSize = pageSize;
        pagination.value.currentPage = 1;
        updateTableData();
      },
      onCurrentChange: (currentPage: number) => {
        pagination.value.currentPage = currentPage;
        updateTableData();
      },
    };
  });
  return { paginationAttrs };
};
