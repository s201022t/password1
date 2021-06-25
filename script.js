// This is a JavaScript file
var applicationKey="5ccc23553d7fa3b969523525ec47e154eed39ffd502275ab2bed95a3ae185398";
var clientKey="31df3f220d2fe12ae4cc76dba2545d28d0e52710a03e0500ca91284c66463a13";
var ncmb=new NCMB(applicationKey,clientKey);

function roguin(){  /*ログイン関数*/
    
     var username=document.getElementById("username").value;    /*ユーザーネームを取得*/
   
     var password=document.getElementById("password").value;    /*パスワードを取得*/
     ncmb.User.login(username, password)    /*二フクラのログインメソッド　ユーザーネームとパスワードを使用*/
         .then(function(user) {     /*ログインに成功した場合の処理*/
             /* 処理成功 */
             alert("ログインに成功しました");
             location.href = "hontai.html";     /*hontai.htmlに遷移*/
             
         })
         .catch(function(error) {       /*ログインに失敗した場合の処理*/
             /* 処理失敗 */
             alert("ログインに失敗しました");
         });
}

    function sinki(){       /*新規登録関数*/
    
    var username=document.getElementById("username").value;     /*ユーザーネームを取得*/
   
    var password=document.getElementById("password").value;     /*パスワードを取得*/
    var user = new ncmb.User();         /*二フクラに新しいユーザーを設定*/
// [NCMB] ID / PW で新規登録
user.set("userName", username)      /*ユーザーネームをセット*/
    .set("password", password)      /*パスワードをセット*/
    .signUpByAccount()              /*セットした情報でサインアップ*/
    .then(function(user) {          /*サインアップに成功した場合の処理*/
        /* 処理成功 */
        // [NCMB] userインスタンスでログイン
        ncmb.User.login(user)       /*二フクラのログインメソッド*/
                 .then(function(user) {     /*ログインに成功した場合の処理*/
                     /* 処理成功 */
                     alert("新規登録に成功しました");
                     location.href = "hontai.html";     /*hontai.htmlに遷移*/
                 })
                 .catch(function(error) {       /*ログインに失敗した場合の処理*/
                     /* 処理失敗 */
                     alert("新規登録に失敗しました");
                 });
    })
    .catch(function(error) {    /*サインアップに失敗した場合の処理*/
        /* 処理失敗 */
        alert("すでにアカウントが存在しています");
    });
    
   
}
function hyouzi1(){     /*表示関数1*/
        
        // コピー対象をJavaScript上で変数として定義する
        const user = ncmb.User.getCurrentUser();
        var pasu=user.get('pasu');    
        pasu=toChar(pasu);
        alert(pasu);
        
        
        }
function hyouzi2(){     /*表示関数2*/
        const user = ncmb.User.getCurrentUser();
        var pasu=user.get('pasu2'); 
        pasu=toChar(pasu);
    
        alert(pasu);
        }
function hyouzi3(){     /*表示関数3*/
        const user = ncmb.User.getCurrentUser();
        var pasu=user.get('pasu3');   
        pasu=toChar(pasu); 
        alert(pasu);
        }
function hyouzi4(){     /*表示関数4*/
        const user = ncmb.User.getCurrentUser();
        var pasu=user.get('pasu4');    
        pasu=toChar(pasu);
        alert(pasu);
        }
function henkou1(){     /*変更関数1*/
        alert("1");
        var tableEle = document.getElementById('hensyuu');      /*idがhensyuuのテーブルタグを取得*/
        var tr = document.createElement('tr');                  /*新しく列を作成*/
    
    
        var td = document.createElement('td');                  //新しく行を作成
        td.innerHTML="サイト名";                                //1行目に「サイト名と表示」
        tr.appendChild(td);                                     //tdをtrの子要素に設定
        var td = document.createElement('td');
        
        td.innerHTML="<textarea id=sa></textarea>";             //2行目にテキストエリアを表示
        
        tr.appendChild(td);
        tableEle.appendChild(tr);                               //trをtableEleの子要素に設定
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerHTML="ID";                                      //3行目に「ID」と表示
        tr.appendChild(td);
         var td = document.createElement('td');
        td.innerHTML="<textarea id=aid></textarea>";            //4行目にテキストエリアを表示
        tr.appendChild(td);
        tableEle.appendChild(tr);
        var tr = document.createElement('tr');
         var td = document.createElement('td');
        td.innerHTML="パスワード";                              //5行目に「パスワードと表示」
        tr.appendChild(td);
        var td = document.createElement('td');
        td.innerHTML="<textarea id=ps></textarea>";             //6行目にテキストエリアを表示
    
        tr.appendChild(td);
        tableEle.appendChild(tr);
        var tr = document.createElement('tr');
        
        var td = document.createElement('td');
        td.innerHTML="<a class=btn-square-pop onClick=hk1()>変更する</a>"+"<a class=btn-square-pop onClick=ku()>やめる</a>";//7行目に「変更する」ボタンを表示
         tr.appendChild(td);
        
       
        tableEle.appendChild(tr);
        
        
        }
function henkou2(){                                            //変更関数2 
        alert("2");
         var tableEle = document.getElementById('hensyuu');
        var tr = document.createElement('tr');
    
     
        var td = document.createElement('td');
        td.innerHTML="サイト名";
        tr.appendChild(td);
        var td = document.createElement('td');
        
        td.innerHTML="<textarea id=sa></textarea>";
        
        tr.appendChild(td);
        tableEle.appendChild(tr);
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerHTML="ID";
        tr.appendChild(td);
         var td = document.createElement('td');
        td.innerHTML="<textarea id=aid></textarea>";
        tr.appendChild(td);
        tableEle.appendChild(tr);
        var tr = document.createElement('tr');
         var td = document.createElement('td');
        td.innerHTML="パスワード";
        tr.appendChild(td);
        var td = document.createElement('td');
        td.innerHTML="<textarea id=ps></textarea>";
    
        tr.appendChild(td);
        tableEle.appendChild(tr);
        var tr = document.createElement('tr');
        
        var td = document.createElement('td');
        td.innerHTML="<a class=btn-square-pop onClick=hk2()>変更する</a>"+"<a class=btn-square-pop onClick=ku()>やめる</a>";
    
        tr.appendChild(td);
        
        tableEle.appendChild(tr);
        
        }
function henkou3(){     //変更関数3
        alert("3");
         var tableEle = document.getElementById('hensyuu');
        var tr = document.createElement('tr');
    
    
        var td = document.createElement('td');
        td.innerHTML="サイト名";
        tr.appendChild(td);
        var td = document.createElement('td');
        
        td.innerHTML="<textarea id=sa></textarea>";
        
        tr.appendChild(td);
        tableEle.appendChild(tr);
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerHTML="ID";
        tr.appendChild(td);
         var td = document.createElement('td');
        td.innerHTML="<textarea id=aid></textarea>";
        tr.appendChild(td);
        tableEle.appendChild(tr);
        var tr = document.createElement('tr');
         var td = document.createElement('td');
        td.innerHTML="パスワード";
        tr.appendChild(td);
        var td = document.createElement('td');
        td.innerHTML="<textarea id=ps></textarea>";
    
        tr.appendChild(td);
        tableEle.appendChild(tr);
        var tr = document.createElement('tr');
        
        var td = document.createElement('td');
        td.innerHTML="<a class=btn-square-pop onClick=hk3()>変更する</a>"+"<a class=btn-square-pop onClick=ku()>やめる</a>";
         tr.appendChild(td);
        
        tableEle.appendChild(tr);
        
}
function henkou4(){     //変更関数4
        alert("4");
         var tableEle = document.getElementById('hensyuu');
        var tr = document.createElement('tr');
    
    
        var td = document.createElement('td');
        td.innerHTML="サイト名";
        tr.appendChild(td);
        var td = document.createElement('td');
        
        td.innerHTML="<textarea id=sa></textarea>";
        
        tr.appendChild(td);
        tableEle.appendChild(tr);
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerHTML="ID";
        tr.appendChild(td);
         var td = document.createElement('td');
        td.innerHTML="<textarea id=aid></textarea>";
        tr.appendChild(td);
        tableEle.appendChild(tr);
        var tr = document.createElement('tr');
         var td = document.createElement('td');
        td.innerHTML="パスワード";
        tr.appendChild(td);
        var td = document.createElement('td');
        td.innerHTML="<textarea id=ps></textarea>";
    
        tr.appendChild(td);
        tableEle.appendChild(tr);
        var tr = document.createElement('tr');
        
        var td = document.createElement('td');
        td.innerHTML="<a class=btn-square-pop onClick=hk4();>変更する</a>"+"<a class=btn-square-pop onClick=ku()>やめる</a>";
        tr.appendChild(td);
        
        tableEle.appendChild(tr);
        
}
function sakuzyo1(){        //削除関数1
        
        alert("1");
        message.innerHTML="本当に削除しますか?"+"<br>"+"<a class=btn-square-pop onClick=ok1()>はい</a>"+"<a class=btn-square-pop onClick=ku()>いいえ</a>";   //messageに削除するか表示
        
        
        }
function ok1(){
        alert("削除しました");
        var un="undefined";
        const User = ncmb.User.getCurrentUser();        //今ログインしているユーザーの情報を取得
        var pasu4=user.get('pasu4');        //4つ目のパスワードをpasu4に代入
        
        var saito4=user.get('saito4');      //4つ目のサイト名をsaito4に代入
        var ID4=user.get('ID4');            //4つ目のIDをID4に代入

        var pasu3=user.get('pasu3');
        
        var saito3=user.get('saito3');
        var ID3=user.get('ID3');

        var pasu2=user.get('pasu2');
        
        var saito2=user.get('saito2');
        var ID2=user.get('ID2');

        var pasu=user.get('pasu');
        
        var saito=user.get('saito');
        var ID=user.get('ID');
          
        User.set("saito", saito2).update();
        User.set("ID", ID2).update();
        User.set("pasu", pasu2).update();
        User.set("saito2", saito3).update();
        User.set("ID2", ID3).update();
        User.set("pasu2", pasu3).update();
        User.set("saito3", saito4).update();
        User.set("ID3", ID4).update();
        User.set("pasu3", pasu4).update();
        User.set("saito4", un).update();
        User.set("ID4", un).update();
        User.set("pasu4", un).update();
        setTimeout("ku()",2000);
        

}
function sakuzyo2(){    //削除関数2
        alert("2");
        message.innerHTML="本当に削除しますか?"+"<br>"+"<button onClick=ok2();>はい</button>"+"<button onClick=ku();>いいえ</button>";   //messageに削除するか表示
        }
function ok2(){
        alert("削除しました");
        var un="undefined";
        const User = ncmb.User.getCurrentUser();        //今ログインしているユーザーの情報を取得
        var pasu4=user.get('pasu4');        //4つ目のパスワードをpasu4に代入
        
        var saito4=user.get('saito4');      //4つ目のサイト名をsaito4に代入
        var ID4=user.get('ID4');            //4つ目のIDをID4に代入

        var pasu3=user.get('pasu3');
        
        var saito3=user.get('saito3');
        var ID3=user.get('ID3');

        var pasu2=user.get('pasu2');
        
        var saito2=user.get('saito2');
        var ID2=user.get('ID2');

        var pasu=user.get('pasu');
        
        var saito=user.get('saito');
        var ID=user.get('ID');
          
        
        User.set("saito2", saito3).update();
        User.set("ID2", ID3).update();
        User.set("pasu2", pasu3).update();
        User.set("saito3", saito4).update();
        User.set("ID3", ID4).update();
        User.set("pasu3", pasu4).update();
        User.set("saito4", un).update();
        User.set("ID4", un).update();
        User.set("pasu4", un).update();
        setTimeout("ku()",2000);
        

}        
function sakuzyo3(){    //削除関数3
        alert("3");
         message.innerHTML="本当に削除しますか?"+"<br>"+"<button onClick=ok3();>はい</button>"+"<button onClick=ku();>いいえ</button>";   //messageに削除するか表示
        }
function ok3(){
        alert("削除しました");
        var un="undefined";
        const User = ncmb.User.getCurrentUser();        //今ログインしているユーザーの情報を取得
        var pasu4=user.get('pasu4');        //4つ目のパスワードをpasu4に代入

        var saito4=user.get('saito4');      //4つ目のサイト名をsaito4に代入
        var ID4=user.get('ID4');            //4つ目のIDをID4に代入

        var pasu3=user.get('pasu3');

        var saito3=user.get('saito3');
        var ID3=user.get('ID3');

        var pasu2=user.get('pasu2');

        var saito2=user.get('saito2');
        var ID2=user.get('ID2');

        var pasu=user.get('pasu');

        var saito=user.get('saito');
        var ID=user.get('ID');
            

        
        User.set("saito3", saito4).update();
        User.set("ID3", ID4).update();
        User.set("pasu3", pasu4).update();
        User.set("saito4", un).update();
        User.set("ID4", un).update();
        User.set("pasu4", un).update();
       setTimeout("ku()",2000);
        

}        
function sakuzyo4(){    //削除関数4
        alert("4");
        message.innerHTML="本当に削除しますか?"+"<br>"+"<button onClick=ok4();>はい</button>"+"<button onClick=ku();>いいえ</button>";   //messageに削除するか表示
        }
function ok4(){
        alert("削除しました");
        var un="undefined";
        const User = ncmb.User.getCurrentUser();        //今ログインしているユーザーの情報を取得
        var pasu4=user.get('pasu4');        //4つ目のパスワードをpasu4に代入

        var saito4=user.get('saito4');      //4つ目のサイト名をsaito4に代入
        var ID4=user.get('ID4');            //4つ目のIDをID4に代入

        var pasu3=user.get('pasu3');

        var saito3=user.get('saito3');
        var ID3=user.get('ID3');

        var pasu2=user.get('pasu2');

        var saito2=user.get('saito2');
        var ID2=user.get('ID2');

        var pasu=user.get('pasu');

        var saito=user.get('saito');
        var ID=user.get('ID');
            

        
        
        User.set("saito4", un).update();
        User.set("ID4", un).update();
        User.set("pasu4", un).update();
        setTimeout("ku()",2000);
        

}        
function hk1(){         //変更関数1　二フクラ側
     var currentUser = ncmb.User.getCurrentUser();
     var sa = document.getElementById('sa').value;
     var aid = document.getElementById('aid').value;
     var ps = document.getElementById('ps').value;
     ps=toAngou(ps);
     
        currentUser.set("saito", sa).update();
        currentUser.set("ID", aid).update();
        currentUser.set("pasu", ps).update();
        alert("ok"+sa+aid+ps);
        setTimeout("ku()",2000);
}
function hk2(){         //変更関数2　二フクラ側
     var currentUser = ncmb.User.getCurrentUser();
     var sa = document.getElementById('sa').value;
     var aid = document.getElementById('aid').value;
     var ps = document.getElementById('ps').value;
     ps=toAngou(ps);
     
        currentUser.set("saito2", sa).update();
        currentUser.set("ID2", aid).update();
        currentUser.set("pasu2", ps).update();
        alert("ok"+sa+aid+ps);
        setTimeout("ku()",2000);
       
}
function hk3(){         //変更関数3　二フクラ側
     var currentUser = ncmb.User.getCurrentUser();
     var sa = document.getElementById('sa').value;
     var aid = document.getElementById('aid').value;
     var ps = document.getElementById('ps').value;
     ps=toAngou(ps);
     
        currentUser.set("saito3", sa).update();
        currentUser.set("ID3", aid).update();
        currentUser.set("pasu3", ps).update();
        alert("ok"+sa+aid+ps);
        setTimeout("ku()",2000);
       
}
function hk4(){         //変更関数4　二フクラ側
     var currentUser = ncmb.User.getCurrentUser();
     var sa = document.getElementById('sa').value;
     var aid = document.getElementById('aid').value;
     var ps = document.getElementById('ps').value;
     ps=toAngou(ps);
     
        currentUser.set("saito4", sa).update();
        currentUser.set("ID4", aid).update();
        currentUser.set("pasu4", ps).update();
        alert("ok"+sa+aid+ps);
        setTimeout("ku()",2000);
       
}

function ku(){          //画面更新関数
    location.href="hontai.html";    //hontai.htmlに遷移
}


function toAngou(str){    // 暗号化
    var key = 1;    // ずらす数
    
    var str2 = "";
    var str = escape(str);    // コード化
    for(var nn = 0; nn < str.length; ++nn){
        var cd = str.charAt(nn).charCodeAt() + key;    // コードをずらす
        if(cd >= 0x7f)
            cd = cd - 0x5f;
        str2 = str2 + String.fromCharCode(cd);
    }
    return str2;
}

function toChar(str){    // 復号化
    var key = 1;
    str2 = "";
    for(nn = 0; nn < str.length; ++nn){
        cd = str.charAt(nn).charCodeAt() - key;    // コードをずらす
        if(cd <= 0x1f)
            cd = cd + 0x5f;
        str2 = str2 + String.fromCharCode(cd);
    }
    str2 = unescape(str2);    // コード化
    return str2;
}

