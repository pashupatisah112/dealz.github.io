<template>
<div class="bg-white w-100">
    <div class="container-fluid">
        <div class="row justify-content-center py-2">
            <div class="col-9">
                <div class="chip mx-2 outlined-primary bg-white" v-for="(item,i) in objects" :key="i"><strong class="text-primary">{{item.title}}</strong></div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-9">
                <ul>
                    <li v-for="(item,i) in items" :key="i" class="mt-3">
                        <a href="#" class=" list-group-item-action flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">{{item.title}}</h5>
                            </div>
                        </a>
                        <div class="chip"><span>{{item.status}}</span></div>
                        
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

            ],
            objects:[
                {title:'Sent for approval'},
                {title:'Received for approval'},
                {title:'Pending signature'},
                {title:'Ownership transfer'},
                {title:'Cancel requests'}
            ]
        }
    }
}
</script>
