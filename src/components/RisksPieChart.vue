<template>
    <div class="risks-pie-chart">
        <div
            id="vis"
            class="chart-display-div"
        />
    </div>
</template>

<script>
import * as vega from 'vega';
import vegaEmbed from 'vega-embed';

export default {
    name: 'RisksPieChart',

    props: {
        chartData: {
            type: Array,
            required: true,
        },
    },

    data: () => ({
        vlSpec: {
            $schema: "https://vega.github.io/schema/vega-lite/v5.json",
            description: "Risks pie chart with tooltips",
            width: 400,
            data: {
                values: [] // added from props
            },
            encoding: {
                theta: { field: 'count', type: 'quantitative', stack: true },
                color: { field: 'type', type: 'nominal' },
                order: { field: 'count', type: 'quantitative', sort: 'descending' },
                tooltip: [
                    { field: 'type', type: 'nominal' },
                    { field: 'count', type: 'quantitative' }
                ]
            },
            layer: [{
                mark: { type: 'arc', outerRadius: 180 }
            }]
        },
    }),

    mounted() {
        this.render();
    },

    methods: {
        /**
         * Set chart data then render chart
         */
        async render() {
            this.vlSpec.data.values = this.chartData;

            await vegaEmbed('#vis', this.vlSpec, { actions: false });
        },
    },
}
</script>

<style lang="scss">
.risks-pie-chart {
    display: grid;
    align-items: center;
}
</style>
