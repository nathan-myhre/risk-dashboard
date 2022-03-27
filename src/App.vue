<template>
    <div id="app">
        <h1 class="title is-1 has-text-centered">
            Risks Dashboard
        </h1>
        <risks-pie-chart :chart-data="data.typesWithCount" />
        <risks-table :data="data" />
    </div>
</template>

<script>
import auditData from '@/data/risks.json';

import RisksPieChart from './components/RisksPieChart.vue'
import RisksTable from './components/RisksTable.vue'

export default {
    name: 'RiskDashboard',

    components: {
        RisksPieChart,
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
    margin: 2rem auto;

    @include desktop {
        max-width: 80vw;
    }
}
</style>
