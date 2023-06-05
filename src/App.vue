<script setup lang="ts">
import { ref } from 'vue';
import CcTable from '@/components/cc-table/cc-table.vue';
import type { CcTableContextCoreType } from './components/cc-table/setup';
const fetchData = (tableCtx: CcTableContextCoreType) => {
  const data = [
    {
      dept: `研发部${Date.now()}`,
    },
  ];
  console.log(tableCtx, data);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data,
        total: 1,
      });
    }, 1000);
  });
};
const formData = ref({ dept: '' });
</script>

<template>
  <div>
    <CcTable :columns="[{ prop: 'dept', label: '部门', width: '160px' }]" :fetch-data="fetchData">
      <template #form="tableCtx">
        <ElForm :model="tableCtx" inline>
          <ElFormItem label="部门" prop="dept">
            <ElInput v-model="formData.dept" />
          </ElFormItem>
          <ElFormItem>
            <ElButton type="primary" @click="tableCtx.updateTableData">查询</ElButton>
          </ElFormItem>
        </ElForm>
      </template>
    </CcTable>
  </div>
</template>

<style scoped></style>
