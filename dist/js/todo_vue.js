const database = {
    set(key, value) {
        value = JSON.stringify(value);
        localStorage.setItem(key, value);
    },
    get(key, def) {
        let value = localStorage.getItem(key);
        if (value) {
            value = JSON.parse(value);
            return value;
        }
        return def;

        
    },
    remove(key) {
        localStorage.removeItem(key);
    }
}

let vm = Vue.createApp({
    
    data() {
        return {
            pending: [],
            done: [],
            itemValue: '',
        }
    },
    methods: {
        doAddItem() {
            let value = this.itemValue;
            if (!value) {
                Swal.fire({
                    title: '新增錯誤',
                    text: '請輸入項目名稱',
                    icon: 'error',
                }).then(() => {
                    setTimeout(() => {
                        this.$refs.itemValue.focus();
                    }, 500)
                })
                return;
            }
            this.pending.push(value);
            this.itemValue = '';
            this.$refs.itemValue.focus();
            
        },
        toDone(index) {
           let value = this.pending[index];
           this.done.push(value);
           this.pending.splice(index, 1);
           this.update();
        },
        toPending(index) {
            let value = this.done[index];
            this.pending.push(value);
            this.done.splice(index, 1);
            this.update();
        },
        update () {
            database.set('todo-pending', this.pending);
            database.set('todo-done', this.done);
           
        },
        doSaveCloud(){
            swal.fire({
                title:'儲存到雲端',
                text:'請輸入UID',
                input:'text',
                showCancelButton: true,
                cancelButtonText:'先不要',
                confirmButtonText: '確定',

            }).then(response => {
                let params = {
                    action:'todo',
                    uid:response.value,
                    data:{
                        pending:this.pendin,
                        done: this.done,
                    }

                }
                console.log(params);
            })
        },
        doSaveLoad(){}
        
    },
    mounted() {
        this.pending = database.get('todo-pending', []);
        this.done = database.get('todo-done', []);
    }

}).mount('#app');