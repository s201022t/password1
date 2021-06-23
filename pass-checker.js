function checkPassword() {
  var pw = $("pw").value;
  var point = 100;
  point += checkLength(pw);
  point += checkType(pw);
  point += checkRenzoku(pw);
  point += checkRinsetu(pw);
  point += checkPopular(pw);
  
  
}

function ok(msg) {
  return "<span class='ok'>" + msg + "</span>";
}
function ng(msg) {
  return "<span class='ng'>" + msg + "</span>";
}

function checkLength(pw) {
  var len = pw.length;
  if (len >= 8) {
    $I("len_v", ok(len));
    $I("len_h", ok("OK"));
    return 0;
  } else {
    $I("len_v", ng(len));
    $I("len_h", ng("8文字以上が望ましい"));
    
  }
}

function checkType(pw) {
  var lc = false;
  var uc = false;
  var nc = false;
  var flag = false;
  // 各文字を確認
  for (var i = 0; i < pw.length; i++) {
    var c = pw.charAt(i);
    // 大文字
    if ('A' <= c && c <= 'Z') {
      uc = true;
    }
    // 小文字
    else if ('a' <= c && c <= 'z') {
      lc = true;
    }
    // 数字
    else if ('0' <= c && c <= '9') {
      nc = true;
    }
    // 記号
    else {
      flag = true;
    }
  }
  // 確認
  if (lc && uc && nc && flag) {
    $I("type_v", "全種類");
    $I("type_h", ok("OK"));
    
  }
  if (lc && uc && nc) {
    $I("type_v", ok("記号がない"));
    $I("type_h", ok("OK"));
    return -5;
  }
  var err = "";
  if (lc == false) err += "小文字";
  if (uc == false) err += "大文字";
  if (nc == false) err += "数字";
  if (flag == false) err += "記号";
  err += "がない";
  $I("type_v", ng(err));
  $I("type_h", ng("各文字種が入っていると良い"));
  return -30;
}

function checkRenzoku(pw) {
  var r = 0;
  var c = 0;
  for (var i = 0; i < pw.length; i++) {
    var cc = pw.charAt(i);
    if (c == cc) r++;
    c = cc;
  }
  if (r == 0) {
    $I("ren_v", ok("なし"));
    $I("ren_h", ok("OK"));
    return 0;
  } else {
    $I("ren_v", ng(r+"回"));
    $I("ren_h", ng("同じ文字が連続しないように"));
    return -10 * r;
  }
}

function checkRinsetu(pw) {
  var r = 0;
  var c = 0;
  for (var i = 0; i < pw.length; i++) {
    var cc = pw.charCodeAt(i);
    if (Math.abs(c - cc) == 1) r++;
    c = cc;
  }
  if (r == 0) {
    $I("rin_v", ok("なし"));
    $I("rin_h", ok("OK"));
    return 0;
  } else {
    $I("rin_v", ng(r+"回"));
    $I("rin_h", ng("abcや123など文字が隣接しないように"));
    return -5 * r;
  }
}


function $(id) {
  return document.getElementById(id);
}

function $I(id, value) {
  $(id).innerHTML = value;
}
