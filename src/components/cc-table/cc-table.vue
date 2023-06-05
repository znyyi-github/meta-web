<script setup lang="ts">
import { useSetup } from './setup';
import { ccTableProps } from './setup';

const props = defineProps(ccTableProps);
const { paginationAttrs, tableCtx, tableColums, tableAttrs } = useSetup(props);
const { loading } = tableCtx;
</script>

<template>
  <div class="cc-table">
    <!-- 表单 -->
    <slot name="form" v-bind="tableCtx" />
    <!-- 表格操作栏 todo -->
    <!-- 表格 -->
    <ElTable v-loading="loading" v-bind="tableAttrs">
      <ElTableColumn v-for="(column, index) in tableColums" :key="index" v-bind="column">
        <!-- 特殊列 todo -->
      </ElTableColumn>
    </ElTable>
    <!-- 表格底部栏：分页 -->
    <ElPagination v-bind="paginationAttrs"></ElPagination>
    <div>
      <!-- 对话框 todo -->
    </div>
  </div>
</template>
