<template>
    <div>
        <table>
            <thead>
                <th v-for="item in header" v-bind:key="item">{{item}}</th>
            </thead>
            <tbody>
                <tr v-for="item2 in tbdata" v-bind:key="item2">
                    <td v-for="data in item2" v-bind:key="data">{{data}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'VComTables',
    props: {
        header: {
            type: Array,
            default: null
        },
        tbdata: {
            type: Array,
            default: null
        }
    },
    data: () => {
        return {
        }
    },
    methods: {
    }
}
</script>
<style scoped>
table{
    margin-top: 10px;
    width: 100%;
    text-align : left;
    border: 1px solid  darkgray;
}
table th{
    padding : 10px;
    border: 1px solid  darkgray;
    border-bottom: 2px solid  darkgray;
}
table td{
    padding : 12px;
    border: 1px solid  darkgray;

}
table tr:nth-of-type(even){
    background-color: rgba(0,0,255,0.1);
}
</style>

