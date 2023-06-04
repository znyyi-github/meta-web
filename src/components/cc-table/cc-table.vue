<script setup>
const tableData = ref([]);
tableData.value = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
];
</script>

<template>
  <div>
    <ElButton type="primary">Primary</ElButton>
    <ElTable :data="tableData">
      <ElTableColumn prop="date" label="Date" width="180"></ElTableColumn>
      <ElTableColumn prop="name" label="Name" width="180"></ElTableColumn>
      <ElTableColumn prop="address" label="Address"></ElTableColumn>
    </ElTable>
  </div>
</template>
