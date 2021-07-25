<template>
<div>
    <div class="container-fluid mild-back">
        <div class="row pt-3 pb-3 line-border">
            <h3 class="center-push"><b-icon icon="layers" class="mr-2"></b-icon>Contracts</h3>
        </div>
        <div class="row line-border py-2">
            <b-tabs pills class="center-push" active-nav-item-class="font-weight-bold text-primary" active-tab-class="bg-primary text-success" v-model="tabIndex">
                <b-tab title="All Contracts" @click="setTab(0)" class="p-0" :title-link-class="linkClass(0)"></b-tab>
                <b-tab title="Awaiting Verification" @click="setTab(1)" :title-link-class="linkClass(1)"></b-tab>
                <b-tab title="Pending" @click="setTab(2)" :title-link-class="linkClass(2)"></b-tab>
                <b-tab title="Signed" @click="setTab(3)" :title-link-class="linkClass(3)"></b-tab>
                <b-tab title="Ownership Transfered" @click="setTab(4)" :title-link-class="linkClass(4)"></b-tab>
            </b-tabs>
            <b-button style="background-color:#007bff" size="xs">Create a new Project</b-button>

        </div>

        <div class="row">
            <allProjects v-if="tab==0"></allProjects>
            <awaiting v-else-if="tab==1"></awaiting>
            <pending v-else-if="tab==2"></pending>
            <signed v-else-if="tab==3"></signed>
            <transfered v-else-if="tab==4"></transfered>
        </div>
        <div class="row">
            <footer></footer>
        </div>

    </div>
</div>
</template>

<script>
import AllProjects from '../components/Dashboard/AllProjects';
import Awaiting from '../components/Dashboard/Awaiting';
import Pending from '../components/Dashboard/Pending';
import Signed from '../components/Dashboard/Signed';
import Transfered from '../components/Dashboard/Transferred';
import Footer from '../components/Dashboard/Footer';
import {BIconStack} from 'bootstrap-vue';
export default {
    // middleware: "auth",
    components: {
        AllProjects,
        Awaiting,
        Pending,
        Signed,
        Transfered,
        Footer,
        BIconStack
    },
    data() {
        return {
            tabIndex: 0,
            tab: 0
        }
    },
    methods: {
        linkClass(idx) {
            this.tabIndex == idx
            if (this.tabIndex === idx) {
                return ['border-bottom']
            } else {
                return ['text-secondary']
            }
        },
        setTab(n) {
            this.tab = n
        }
    }
};
</script>

<style lang="scss">
@import "~/assets/styles/Dashboard.scss";
</style>
