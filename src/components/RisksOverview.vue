<template>
    <div class="risks-overview">
        <h5 class="is-size-5 has-text-weight-bold mb-3">
            Records with risks
        </h5>
        <b-table
            :data="data.typesWithCount"
            default-sort-direction="desc"
            default-sort="count"
            sort-icon-size="is-small"
            striped
            narrowed
            hoverable
        >
            <b-table-column
                v-slot="props"
                field="type"
                label="Type"
                sortable
                subheading="Total:"
            >
                {{ props.row.type }}
            </b-table-column>
            <b-table-column
                v-slot="props"
                field="count"
                label="Count"
                numeric
                sortable
                :subheading="data.riskRecordsCount"
            >
                {{ props.row.count }}
            </b-table-column>
        </b-table>
    </div>
</template>

<script>
export default {
    name: 'RisksOverview',

    props: {
        data: {
            type: Object,
            required: true,
        },
    },
}
</script>

<style lang="scss">
.risks-overview {
    line-height: 1.2;
}
</style>
