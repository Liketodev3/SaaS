<template>
    <div class="content">
        <div class="header_filters">
            <div>
                <div class="d-flex">
                    <b-input-group>
                        <b-form-input
                                id="example-input"
                                v-model="keyword"
                                type="text"
                                class="search_input"
                                placeholder="Search..."
                                autocomplete="off"
                        ></b-form-input>
                        <b-icon icon="search" style="color: #096BC4; width: 18px; height: 18px"  aria-hidden="true"></b-icon>


                    </b-input-group>
                    <b-input-group>
                        <b-form-input
                            id="example-input"
                            v-model="date_value"
                            type="text"
                            placeholder="Date"
                            autocomplete="off"
                        ></b-form-input>
                        <b-input-group-append>
                            <b-form-datepicker
                                v-model="date_value"
                                placeholder=""
                                class="date_pick"
                                right
                                locale="en-US"
                                aria-controls="example-input"
                                @context="onContext"
                            ></b-form-datepicker>
                        </b-input-group-append>
                    </b-input-group>
                    <b-input-group>
                        <b-dropdown class="drop_btn" text="Active" variant="outline-secondary">
                            <b-dropdown-item href="#">Active</b-dropdown-item>
                            <b-dropdown-item href="#">Paused</b-dropdown-item>
                            <b-dropdown-item href="#">Waiting for approval</b-dropdown-item>
                        </b-dropdown>
                    </b-input-group>

                    <b-input-group>
                        <b-dropdown class="drop_btn" text="job Category" variant="outline-secondary">
                            <b-dropdown-item href="#">Business</b-dropdown-item>
                            <b-dropdown-item href="#">Education</b-dropdown-item>
                            <b-dropdown-item href="#">Finance</b-dropdown-item>
                            <b-dropdown-item href="#">Marketing</b-dropdown-item>
                            <b-dropdown-item href="#">Sales</b-dropdown-item>
                            <b-dropdown-item href="#">Healthcare</b-dropdown-item>
                            <b-dropdown-item href="#">Human resources</b-dropdown-item>
                        </b-dropdown>
                    </b-input-group>
                </div>
            </div>
        </div>

        <div class="table_container">
            <b-table striped hover :items="items" :fields="fields" :keyword="keyword" responsive="sm">
                <template v-slot:cell(date)="data">
                    <div class="item_date">
                        {{data.item.date}}
                    </div>
                </template>

                <template v-slot:cell(client_tag)="data">
                    <div class="item_tag">
                        {{data.item.client_tag}}
                    </div>
                </template>

                <template v-slot:cell(status)="data">
                    <div class="item_status"
                         :class="{
                        'red': data.item.status ==='Paused',
                        'green': data.item.status ==='Active',
                        'orange': data.item.status ==='Waiting for approval'
                    }">
                        {{data.item.status}}
                    </div>
                </template>

                <template v-slot:cell(view)="data">
                    <div class="view_btn view_tooltip" @click="view()" v-b-tooltip.hover.bottom="{ variant: 'primary' }" title="View">
                        <b-icon icon="eye-fill" style="color: #095498;"  aria-hidden="true"></b-icon>
                    </div>
                </template>
                <template v-slot:cell(edit)="data">
                    <div class="view_btn" @click="edit()">
                        <b-icon icon="pencil-fill" style="color: #095498;"  aria-hidden="true"></b-icon>
                    </div>
                </template>
                <template v-slot:cell(pause)="data">
                    <button class="view_btn" @click="data.item.pause = !data.item.pause" :disabled="data.item.pause">
                        <b-icon icon="pause-fill" style="color: #095498;"  aria-hidden="true"></b-icon>
                    </button>
                </template>
            </b-table>

        </div>
        <div class="file_download">
            <div class="download_btn">
                <b-icon icon="cloud-download" style="color: #07054E;"  aria-hidden="true"></b-icon>
                Export the data
            </div>

        </div>



    </div>
</template>

<script>

    export default {
        name: "JobMain",

        data() {
            return {
                fields: [
                    {
                        key: 'date',
                        label: 'Date',
                    },
                    {
                        key: 'job_name',
                        label: 'Job Name',
                    },
                    {
                        key: 'application',
                        label: '# of applications',
                    },
                    {
                        key: 'impressions',
                        label: 'Impressions',
                    },
                    {
                        key: 'clicks',
                        label: 'Clicks',
                    },
                    {
                        key: 'client_tag',
                        label: 'Client tag',
                    },
                    {
                        key: 'status',
                        label: 'Status',
                    },
                    {
                        key: 'view',
                        label: '',
                    },
                    {
                        key: 'edit',
                        label: '',
                    },
                    {
                        key: 'pause',
                        label: '',
                    },

                ],
                dataArray: [
                    {  date: '23 JUNE', job_name: 'Business', application: 2, impressions: 2, clicks: 5, client_tag: '#client', status: 'Paused', view: '', edit: '', pause: true },
                    {  date: '23 JUNE', job_name: 'Education', application: 3, impressions: 3, clicks: 5, client_tag: '#client', status: 'Active', view: '', edit: '', pause: false },
                    {  date: '23 JUNE', job_name: 'Finance', application: 1, impressions: 1, clicks: 0, client_tag: '#client', status: 'Waiting for approval', view: '', edit: '', pause: true },
                    {  date: '23 JUNE', job_name: 'Marketing', application: 25, impressions: 25, clicks: 5, client_tag: '#client', status: 'Paused', view: '', edit: '', pause: false },
                    {  date: '23 JUNE', job_name: 'Sales', application: 3, impressions: 3, clicks: 5, client_tag: '#client', status: 'Active', view: '', edit: '', pause: false },
                    {  date: '23 JUNE', job_name: 'Healthcare', application: 4, impressions: 4, clicks: 5, client_tag: '#client', status: 'Active', view: '', edit: '', pause: false },
                    {  date: '23 JUNE', job_name: 'Human resources', application: 1, impressions: 1, clicks: 0, client_tag: '#client', status: 'Waiting for approval', view: '', edit: '', pause: true },
                    {  date: '23 JUNE', job_name: 'Healthcare', application: 24, impressions: 24, clicks: 5, client_tag: '#client', status: 'Active', view: '', edit: '', pause: false },
                    {  date: '23 JUNE', job_name: 'Finance', application: 16, impressions: 16, clicks: 5, client_tag: '#client', status: 'Paused', view: '', edit: '', pause: false },
                ],
                date_value: '',
                keyword: ''


            }
        },
        computed: {
            items () {
                return this.keyword
                    ? this.dataArray.filter(item => item.job_name.includes(this.keyword))
                    : this.dataArray
            }
        },
        methods: {
            view() {
                console.log('view')
            },
            edit() {
                console.log('edit')
            },

            onContext(ctx) {
                // console.log(ctx.selectedFormatted)
                // console.log(ctx.selectedYMD)
            }

        }
    }
</script>

<style scoped lang="scss">
    .b-form-btn-label-control.dropdown.b-form-datepicker {
        border-left: none !important;
    }
    ::v-deep .input-group {
        margin-left: 20px;
    }
.content {
    & .header_filters {
        width: 100%;
        height: 85px;
        border-bottom: 1px solid #00000029;
        display: flex;
        align-items: center;
        padding: 0 30px;
        & .search_input {
            width: 420px;
        }
        & .input-group {
            position: relative;
            & svg {
                position: absolute;
                right: 20px;
                top: 10px;
            }

            & .date_pick.form-control {
                border-top-left-radius: 0;
                border-bottom-left-radius: 0;
            }
            & .date_pick {
                ::v-deep label {
                    width: 0;
                    height: 0;
                    overflow: hidden;
                    color: transparent;
                }
            }
            & input {
                &:focus {
                    box-shadow: none;
                }
            }
        }
        & .drop_btn {
            width: 210px;
            ::v-deep button {
                text-align: start;
                padding: 0 20px;
                border-color: #CFCFCF;
            }
            ::v-deep :after {
                position: absolute;
                right: 10px;
                top: 45%;
            }
            ::v-deep .btn.dropdown-toggle:hover {
                    background: transparent !important;
                    color: grey;

            }
        }
    }
    & .table_container {
        padding: 25px 30px;
        ::v-deep table thead{
            background: #096BC4;
            border-bottom: none;
            color: #fff;
            height: 53px;
        }
        ::v-deep tbody tr td,
        ::v-deep thead tr th {
            text-align: center;
            margin: 0 auto;
            vertical-align: middle;

        }
        ::v-deep tbody tr td {
            color: #000;
        }
        & .red {
            color: #FF0000;
        }
        & .green {
            color: #23B453;
        }
        & .orange {
            color: #FF7700;
        }

        & .view_btn {
            width: 44px;
            height: 44px;
            background: #F6F6F6;
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            border: none;
            &:disabled {
                background: #D8D9D9 0% 0% no-repeat padding-box;
            }
        }
        & .item_date {
            width: 50px;
            margin: 0 auto;
        }
        & .item_tag {
            background: #D8DDE2 0% 0% no-repeat padding-box;
            border-radius: 5px;
        }
    }
    & .file_download {
        padding: 0 40px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        & .download_btn {
            color: #07054E;
            font-weight: 500;
            background: #EFF1F2 0% 0% no-repeat padding-box;
            border-radius: 5px;
            width: 180px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            svg {
                margin-right: 15px;
            }
        }


    }

}
</style>
