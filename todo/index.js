window.onload = function () {
     /*  2.数据渲染
       3.动态生成列表
       4.删除功能
       5.计算多少条事情未完成
       6.双击列表文本修改
       7.点击选框样式修改
       8.local storage存储*/

     let vm = new Vue({
         el:'#app',
         data:{
             message:'',
             flag:'',
             list:[
                 {
                     selected:false,
                     content:'html5'
                 },
                 {
                     selected:false,
                     content:'javascript'
                 },
                 {
                     selected:false,
                     content:'ajax'
                 }
             ]
         },
         create(){
                this.list = JSON.parse(localStorage.getItem('data')) || this.list
         },
         watch:{
              list:{
                  /*watch默认是监控一层，handler实行深层监控*/
                  handler(){
                      //local storage默认存储得是字符串
                      localStorage.setItem('data',JSON.stringify(this.list))
                  },deep:true
              }
         },
         computed:{
                total:{
                    get(){
                        return this.list.filter(item=> !item.selected).length
                    }
                }
         },
         methods:{
             add(){
                 //在数组中加入一个对象
                this.list.unshift({selected:false, content:this.message});
                this.message = ''
             },
             remove(i){
                 this.list =  this.list.filter(item => item!==i)
             },
             edit(i){
                   this.flag = i
             },
             cancle(){
                 this.flag = ''
             }
         }
     })


}