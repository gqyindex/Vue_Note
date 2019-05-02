window.onload = function () {
    var vm = new Vue({
        el:'#app',
        data:{
           goodsList:[],
            checkAll:true
        },
        methods:{
            getData(){
                axios.get('mock/goods.json').then(res=>{
                        this.goodsList = res.data;
                })
            },
            remove(i){
                this.goodsList =  this.goodsList.filter((item,index)=>index!==i)
            },
            selectAll(){
                //全选为false时，所有的都不选中
                this.goodsList.forEach(item => item.selected = this.checkAll);
            },
            checkOne(){
                this.checkAll = this.goodsList.every(item => item.selected);
            },
            total(){
                return this.goodsList.reduce((prev,next)=>{
                    if (!next.selected) {
                        return prev;
                    }else {
                        return Number( prev+next.price*next.num)
                    }
                },0)
            }
        },
        filters:{
            fixed(value,param){
                return value.toFixed(param)
            }
        },
        created(){
            /*axios获取mock数据*/
              this.getData()
        }
    });



};