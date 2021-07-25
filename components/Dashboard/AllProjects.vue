<template>
<div class="bg-white w-100">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-9">
                <ul>
                    <li v-for="(item,i) in items" :key="i" class="mt-2">
                        <a href="#" class=" list-group-item-action flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">{{item.title}}</h5>
                            </div>
                        </a>
                        <div class="chip" :class="getBg(item)">
                            <b-icon :icon="getIcon(item)"></b-icon>
                            <span>{{item.status}}</span>
                        </div>
                        <div v-if="item.accepted" class="chip">
                            Accepted
                        </div>
                        <div v-if="item.comment" class="chip bg-warning">
                            <b-icon icon="chat"></b-icon>
                            {{item.comment}}
                            Comments
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            hasBg: true,
            items: [{
                    title: 'Brain Trust New Sound Exchange Procedures for LOD',
                    status: 'selected',
                    comment: '',
                    accepted: true,
                    sent: true
                },
                {
                    title: 'Founder advisor standard template',
                    status: 'Pending review',
                    comment: '3',
                    accepted: false,
                    sent: true
                },
                {
                    title: 'Music contract',
                    status: 'Overdue',
                    comment: '8',
                    accepted: false,
                    sent: true
                },
                {
                    title: 'Founder advisor standard template',
                    status: 'Pending Signature',
                    comment: '3',
                    accepted: false,
                    sent: true
                },
                {
                    title: 'Founder advisor standard template',
                    status: 'Pending review',
                    comment: '3',
                    accepted: false,
                    sent: true
                },
                {
                    title: 'Founder advisor standard template',
                    status: 'Ownership requests',
                    comment: '3',
                    accepted: false,
                    sent: true
                },
                {
                    title: 'Founder advisor standard template',
                    status: 'Cancel request',
                    comment: '',
                    accepted: false,
                    sent: false
                },

            ]
        }
    },
    methods:{
        getBg(item){
            if(item.status=='selected'){
                return 'bg-success'
            }else if(item.status=='Pending review'){
                return 'bg-light'
            }else if(item.status=='Overdue'){
                return 'bg-danger'
            }else if(item.status=='Ownership requests'){
                return 'bg-light'
            }else if(item.status=='Cancel request'){
                'bg-danger'
            }
        },
        getIcon(item){
            if(item.status=='selected'){
                return 'check2'
            }else if(item.status=='Pending review'){
                return 'pencil'
            }else if(item.status=='Overdue'){
                return ''
            }else if(item.status=='Ownership requests'){
                return 'check2'
            }else if(item.status=='Cancel request'){
                return 'file-earmark-x'
            }
        }
    }
}
</script>

<style lang="scss">
.bgColor {
    background-color: blue;
}
</style>
