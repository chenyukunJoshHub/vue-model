import Vue from 'vue'

//TODO: HTTP 配置
export default ((loading, dialog)=>{
    let Loading = loading || function(){},
        Dialog =  dialog || function(){}

    Vue.http.interceptors.push((request, next)  => {
        //TODO: 请求发送前的处理逻辑

        request.url =  request.url + '?' +  new Date()
        Loading(true)

        next((response) => {
            //TODO: 请求发送后的处理逻辑
            if(!response.ok){
                //alert('加载错误')
            }

            Dialog(response.ok);

            Loading(false);

            return response
        });
    });
})