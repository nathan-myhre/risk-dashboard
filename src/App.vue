<template>
    <div id="app">
        <h1 class="title is-1 has-text-centered">
            Risks Dashboard
        </h1>
        <h5 class="is-size-5 has-text-centered">
            <strong>Total records analyzed:</strong> {{ data.totalRecordsCount }}
        </h5>
        <div class="breakdown-content">
            <risks-overview :data="data" />
            <risks-pie-chart :chart-data="data.typesWithCount" />
        </div>
        <risks-table :data="data" />
    </div>
</template>

<script>
import auditData from '@/data/risks.json';

import RisksPieChart from './components/RisksPieChart.vue'
import RisksTable from './components/RisksTable.vue'
import RisksOverview from './components/RisksOverview.vue'

export default {
    name: 'RiskDashboard',

    components: {
        RisksPieChart,
        RisksTable,
        RisksOverview,
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
    margin: 2rem auto;
    max-width: 80vw;

    .breakdown-content {
        display: grid;
        grid-template-columns: repeat(2, auto);
        justify-items: center;
        margin: 4rem 0;
    }
}
</style>
