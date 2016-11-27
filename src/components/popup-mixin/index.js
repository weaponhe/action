let global = {
    openCount: 0,
    modalCount: 0
}
export default {
    data(){
        return {
            popupIndex: 0,
            modalIndex: 0,
            transparent: '',
            global
        }
    },
    props: {
        open: {
            type: Boolean,
            default: false
        },
        modal: {
            type: Boolean,
            default: false
        }
    },
    mounted(){
        if (this.open) {
            this.global.openCount++
            this.popupIndex = this.global.openCount
            if (this.modal) {
                this.global.modalCount++
                this.modalIndex = this.global.modalCount
            }
        }
    },
    watch: {
        open(open){
            if (open) {
                this.global.openCount++
                this.popupIndex = this.global.openCount
                if (this.modal) {
                    this.global.modalCount++
                    this.modalIndex = this.global.modalCount
                }
            }
            else {
                this.global.openCount--
                if (this.modal) {
                    this.global.modalCount--
                }
            }
        },
        'global.modalCount': function () {
            if (this.modal) {
                this.transparent = this.global.modalCount === this.modalIndex ? '' : 'transparent'
            }
        }
    }
}