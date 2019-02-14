<template>
  <div>
    <gridTable></gridTable>
  </div>
</template>

<script>

import gridTable from "./components/gridTable.vue"


export default {

    name: 'app',
    data: function () {
        return {
        };
    },
    components: { gridTable: gridTable }
}
</script>