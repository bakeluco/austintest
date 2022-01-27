
<template>
    <v-layout full-height class="justify-center align-center" :style="{backgroundColor: $store.state.colours.customerList}">
        <CustomerList />
    </v-layout>
</template>
<script>
import CustomerList from "../components/CustomerList.vue"

export default {
    components:{
        CustomerList,
    },
    setup() {
        
    },
}
</script>