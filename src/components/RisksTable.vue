<template>
    <div class="risks-table">
        <b-table
            :data="data.records"
            paginated
            pagination-size="is-small"
            default-sort-direction="asc"
            default-sort="risk"
            sort-icon-size="is-small"
            per-page="50"
            pagination-position="bottom"
            pagination-order="is-centered"
            detailed
            detail-key="id"
            :opened-detailed="openedRows"
            :show-detail-icon="false"
            striped
            narrowed
            hoverable
            @click="toggleDetailRow"
        >
            <b-table-column
                v-slot="props"
                field="id"
                label="ID"
            >
                {{ props.row.id }}
            </b-table-column>
            <b-table-column
                v-slot="props"
                field="created"
                label="Created"
                centered
                sortable
            >
                {{ props.row.created }}
            </b-table-column>
            <b-table-column
                v-slot="props"
                field="risk"
                label="Risk Type"
                sortable
            >
                {{ props.row.risk }}
            </b-table-column>
            <b-table-column
                v-slot="props"
                field="risk_level"
                label="Risk Level"
                sortable
            >
                {{ props.row.risk_level }}
            </b-table-column>

            <!-- expandable detailed content -->
            <template #detail="props">
                <h3 class="is-size-4">
                    Flagged Content
                </h3>
                <div class="metadata-content">
                    <div class="content-item">
                        <strong>URL:</strong> {{ JSON.parse(props.row.meta).content }}
                    </div>
                    <div class="content-item">
                        <strong>User Agent:</strong> {{ parseUserAgent(JSON.parse(props.row.meta).user_agent) }}
                    </div>
                    <div class="content-item">
                        <strong>User Agent Raw:</strong> {{ JSON.parse(props.row.meta).user_agent }}
                    </div>
                    <div class="content-item">
                        <strong>IP (external):</strong> {{ JSON.parse(props.row.meta).ip_external }}
                    </div>
                    <div class="content-item">
                        <strong>IP (internal):</strong> {{ JSON.parse(props.row.meta).ip_internal }}
                    </div>
                    <div class="content-item">
                        <strong>Browser UUID:</strong> {{ JSON.parse(props.row.meta).browser_uuid }}
                    </div>
                </div>
            </template>
        </b-table>
    </div>
</template>

<script>
import uaParser from 'ua-parser-js';

export default {
    name: 'RisksTable',

    props: {
        data: {
            type: Object,
            required: true,
        },
    },

    data: () => ({
        openedRows: [],
    }),

    methods: {
        /**
         * Toggle the table detailed row open or closed
         *
         * @param {object} row - clicked table row object
         */
        toggleDetailRow(row) {
            const index = this.openedRows.indexOf(row.id);

            // if id is already in the array, remove it
            if (index !== -1) {
                this.openedRows.splice(index, 1);
            } else {
                // open details for clicked row
                this.openedRows.push(row.id);
            }
        },

        /**
         * Parse user agent string into usable pieces
         *
         * @param {string} userAgent - user agent string
         * @returns {string} human readable browser and os details
         */
        parseUserAgent(userAgent) {
            const parsed = uaParser(userAgent);
            return `${parsed.browser.name} on ${parsed.os.name} ${parsed.os.version}`
        },
    },
}
</script>
