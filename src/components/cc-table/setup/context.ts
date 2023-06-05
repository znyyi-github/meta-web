import { ref } from 'vue';
import type { CcTablePropsType } from './props';

export const useContext = (props: CcTablePropsType) => {
  const tableCtxCore = useContextCore(props);
  const tableDataCtx = useContextData(tableCtxCore);
  return { ...tableCtxCore, ...tableDataCtx };
};

export const useContextCore = (props: CcTablePropsType) => {
  const tableCtx = {
    pagination: ref({ currentPage: 1, pageSize: props.pageSizes[0], total: 0 }),
    loading: ref(false),
    props,
  };
  return tableCtx;
};

export const useContextData = (tableCtxCore: CcTableContextCoreType) => {
  const { props, loading, pagination } = tableCtxCore;
  const tableData = ref(props.data ?? []);
  const updateTableData = async () => {
    const { fetchData } = props;
    if (!fetchData) {
      return;
    }
    try {
      loading.value = true;
      const { data, total } = await fetchData(tableCtxCore);
      tableData.value = data;
      pagination.value.total = total;
    } catch (error) {
      tableData.value = [];
      throw error;
    } finally {
      loading.value = false;
    }
  };
  if (!props.manualUpdateData) {
    updateTableData();
  }
  return { tableData, updateTableData };
};
export type CcTableContextCoreType = ReturnType<typeof useContextCore>;
export type CcTableContextType = ReturnType<typeof useContext>;
