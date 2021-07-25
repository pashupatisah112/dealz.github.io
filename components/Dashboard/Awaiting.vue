<template>
<div class="bg-white w-100">
    <div class="container-fluid">
        <div class="row justify-content-center">
            <div class="col-9">
                <ul>
                    <li v-for="(item,i) in items" :key="i" class="mb-3">
                        <a href="#" class=" list-group-item-action flex-column align-items-start">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">{{item.title}}</h5>
                            </div>
                        </a>
                        <div class="chip outlined">
                            <b-icon icon="chat"></b-icon>
                            <span>{{item.comment}} comments</span>
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
            items: [{
                    title: 'Brain Trust New Sound Exchange Procedures for LOD',
                    comment: '3',
                },
                {
                    title: 'Founder advisor standard template',
                    comment: '0',
                },

            ]
        }
    }
}
</script>
