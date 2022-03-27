<template>
    <div id="app">
        <div>
            Total count: {{ data.totalRecordsCount }}
        </div>
        <div>
            Risks count: {{ data.withRiskRecordsCount }}
        </div>
        <risks-table :data="data" />
    </div>
</template>

<script>
import auditData from '@/data/withRisks.json';

import RisksTable from './components/RisksTable.vue'

export default {
    name: 'RiskDashboard',

    components: {
        RisksTable,
    },

    data: () => ({
        data: auditData,
    }),
}
</script>

<style lang="scss">
// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

#app {
    font-family: 'Lato', sans-serif;

    @include desktop {
        max-width: 80vw;
        margin: auto;
    }
}
</style>
