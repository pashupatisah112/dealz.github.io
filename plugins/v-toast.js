import Vue from 'vue'

const VueToast = {
    methods: {
        successToast(msg, noAutoHide = false) {
            this.$root.$bvToast.toast(msg, {
                title: `Success`,
                variant: 'success',
                noAutoHide: noAutoHide,
                solid: true,
            });
        },
        failureToast(msg, noAutoHide = false) {
            this.$root.$bvToast.toast(msg, {
                title: `Failure`,
                variant: 'danger',
                noAutoHide: noAutoHide,
                solid: true,
            });
        },
    }
}

Vue.mixin(VueToast);