import { useTableColumns } from './column';
import { useContext } from './context';
import { usePagination } from './pagination';
import type { CcTablePropsType } from './props';
import { useTableAttrs } from './table';
export * from './props';
export type { CcTableContextCoreType, CcTableContextType } from './context';

export const useSetup = (props: CcTablePropsType) => {
  const tableCtx = useContext(props);
  const paginationCtx = usePagination(tableCtx);
  const tableColumsCtx = useTableColumns(tableCtx);
  const tableAttrsCtx = useTableAttrs(tableCtx);
  return {
    tableCtx,
    ...paginationCtx,
    ...tableColumsCtx,
    ...tableAttrsCtx,
  };
};
