<template>
    <div id="app">
        <h1 class="title is-1 has-text-centered">
            Risks Dashboard
        </h1>
        <div>
            Total count: {{ data.totalRecordsCount }}
        </div>
        <div>
            Risks count: {{ data.riskRecordsCount }}
        </div>
        <risks-table :data="data" />
    </div>
</template>

<script>
import auditData from '@/data/risks.json';

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
