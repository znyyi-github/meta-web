import { defineComponentsProps } from '@/utils';
import type { ExtractPropTypes } from 'vue';

export const ccTableProps = defineComponentsProps({
  columns: {
    type: Array,
    default: () => [],
  },
  pageSizes: { type: Array, default: () => [10, 20, 30, 40, 50] },
  data: { type: Array, default: () => [] },
  fetchData: { type: Function, default: () => {} },
  manualUpdateData: { type: Boolean, default: false },
});

export type CcTablePropsType = ExtractPropTypes<typeof ccTableProps>;
