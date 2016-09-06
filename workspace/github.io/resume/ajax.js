
var btn = document.querySelector("#btn");
var xhr = new XMLHttpRequest();
function ajax(opts){    //这里是函数的封装
    xhr.onreadystatechange=function(){
        if(xhr.status == 200 && xhr.readyState == 4){
            var json = JSON.parse(xhr.responseText);
            opts.success(ret);
        }
        if(xhr.status = 404){
            opts.error（）;
        }
    }
    var str = "";
    for(var key in opts.data){
        str += key + "=" + opts.data[key] + "&"
    }
    str = str.substr(0,str.length-1);
    if(opts.type.toLowerCase()=="get"){
        xhr.open(opts.type,opts.url + "?" + str,true);
        send();
    }
    if(opts.type.toLowerCase()="post"){
        xhr.open(opts.type,url,true);
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        send(str);
    }
}
btn.addEventListener('click', function(){   //调用一下(HTML的内容并未在这里,视具体情况使用)
    ajax({
        url: 'task24-1.php',   //接口地址
        type: document.querSelector('#type').value;             // 类型， post 或者 get,
    data: {
        username: 'xiaoming',
            password: 'abcd1234'
    },
    success: function(ret){
        console.log(ret);                 // {status: 0}
    },
    error: function(){
        console.log('出错了....');
    }
})
});

