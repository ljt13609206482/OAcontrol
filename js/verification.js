/**
 * Created by QQ on 2018/6/22.
 */
//表单验证JS文件
$(function(){
    //点击眼镜按钮，切换密码显示隐藏
    $(".log .pwd .eyes_box>i").click(function(e){
        var $tar=$(e.target);
        if($tar.is(".glyphicon-eye-open")){
            $tar.addClass("glyphicon-eye-close").removeClass("glyphicon-eye-open");
            $(this).parent().siblings(".input_box").children("input").val($(this).parent().siblings(".input_box").children("#value_2_1").val());
            $("#value_2_2").show().siblings().hide()
        }else{
            $tar.removeClass("glyphicon-eye-close").addClass("glyphicon-eye-open");
            $(this).parent().siblings(".input_box").children("input").val($(this).parent().siblings(".input_box").children("#value_2_2").val());
            $("#value_2_1").show().siblings().hide()
        }
    });
    //定义变量保存用户输入信息验证状态
    var is_uname=false;
    var is_upwd=false;
    var is_verCode=false;
    //创建用户名获得焦点和拾取焦点时的验证
    $("#value_1").blur(function() {
        //获取用户输入信息
        var username=$("#value_1").val();
        //定义验证正则表达式
        //用来判断用户名，第一位不能为数字，也就是小写字母或者大写字母，后面的内容\w表示字符（数字字母下划线）
        //要求是5-10位字符，所以出去第一位，还需要4-9位的\w
        var name_reg=/^[a-zA-Z]\w{5,17}$/;

        //用户名验证
        if(username==""){
            $(".tip_1").html("用户名不能为空").css("color","#f00");
            $(".tip_icon1").removeClass("tip_icon_succ").addClass("tip_icon_err");
            is_uname=false;
        }else if(name_reg.test(username)){
            $(".tip_1").html("");
            $(".tip_icon1").addClass("tip_icon_succ").removeClass("tip_icon_err");
            is_uname=true;
        }else{
            $(".tip_1").html("格式不正确").css("color","#f00");
            $(".tip_icon1").removeClass("tip_icon_succ").addClass("tip_icon_err");
            is_uname=false;
        }

    });
//创建用户密码获得焦点和拾取焦点时的验证
    $(".pwd .input_box input").blur(function blur_password() {
        //获取用户输入信息
        var password=$(".pwd .input_box input:visible").val();
        //定义验证正则表达式
        //用来判断用户密码，第一位不能为数字，也就是小写字母或者大写字母，后面的内容\w表示字符（数字字母下划线）
        //要求是5-10位字符，所以出去第一位，还需要4-9位的\w
        var pwd_reg=/^[^\s]{10,24}$/;

        //用密码验证
        if(password==""){
            $(".tip_2").html("用户密码不能为空").css("color","#f00");
            $(".tip_icon2").removeClass("tip_icon_succ").addClass("tip_icon_err");
            is_upwd=false;
        }else if(pwd_reg.test(password)){
            $(".tip_2").html("");
            $(".tip_icon2").addClass("tip_icon_succ").removeClass("tip_icon_err");
            is_upwd=true;
        }else{
            $(".tip_2").html("格式不正确").css("color","#f00");
            $(".tip_icon2").removeClass("tip_icon_succ").addClass("tip_icon_err");
            is_upwd=false;
        }

    });
    $("#value_3").blur(function blur_verification() {
        //获取用户输入信息
        var verification=$("#value_3").val();
        //定义验证正则表达式
        //用来判断用户名，第一位不能为数字，也就是小写字母或者大写字母，后面的内容\w表示字符（数字字母下划线）
        //要求是5-10位字符，所以出去第一位，还需要4-9位的\w
        var ver_reg=/^\d{4}$/;

        //用户名验证
        if(verification==""){
            $(".tip_3").html("验证码不能为空").css("color","#f00");
            $(".tip_icon3").removeClass("tip_icon_succ").addClass("tip_icon_err");
            is_verCode=false;
        }else if(ver_reg.test(verification)){
            $(".tip_3").html("");
            $(".tip_icon3").addClass("tip_icon_succ").removeClass("tip_icon_err");
            is_verCode=true;
        }else{
            $(".tip_3").html("格式不正确").css("color","#f00");
            $(".tip_icon3").removeClass("tip_icon_succ").addClass("tip_icon_err");
            is_verCode=false;
        }
    })
    $("#login_btn").click(function(){
        //定义变量，保存用户输入信息
        var username=$("#value_1").val();
        var password=$("#value_2").val();
        var verification=$("#value_3").val();
        if(is_uname){
            if(is_upwd){
                if(is_verCode){
                    alert("登录成功！");
                    //加密程序
                    //公钥
                    var PUBLIC_KEY = 'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDcHxb4MEcY/UG7lfLEjE/TSxJ1qvNgtT1Qxawad6rF1aLCj9kqz4bwuH2ZrQCDUr05WBVb/5Z8GSg5rsdnEMaITrg44GYLjWl//xVV3BYiPgry+PX+wkt0TbKbBEfeZdEO6y9EaK45azFRej95sDUf9O3Rj8TKW9mvidxRrHUFLQIDAQAB';
                    //私钥
                    var PRIVATE_KEY = 'MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBANwfFvgwRxj9QbuV8sSMT9NLEnWq82C1PVDFrBp3qsXVosKP2SrPhvC4fZmtAINSvTlYFVv/lnwZKDmux2cQxohOuDjgZguNaX//FVXcFiI+CvL49f7CS3RNspsER95l0Q7rL0RorjlrMVF6P3mwNR/07dGPxMpb2a+J3FGsdQUtAgMBAAECgYBkVCtU/jQ5uJ0wUf0wBsAPj2UfisaZaqJC4YY7HhYRS/l+crBKKgLYT064L7lPIfQrYfGCWDGP6KuD9xzd5jCGceSAcvWnmbACczONimjc7SMhLc/ImecaoFlBWLquqj/yJmVhZPI64svJb5FvHgEDcadd0/KfBu+YpHJBpGL9oQJBAPGjci5DyiFc8FrOiX4PZvcfUlj8vqNkca1PxH32MIDzWtAq2P2UGm5K1zThq3bSAkj0EsnUECN7Ik5NdvEzjzkCQQDpNEKVHUEcUL6LZbRhMZ0nH+K+j5otzMW7QS97vBDwsjttAyLIgv7vZ7JnEvb/UrM90xkeDh1jvNphjyC+jvGVAkEA57lWRge8T0JRPMPUFo+urk3bKns2Vnp8iTd1t1XgLckxzW9Jp+PfdOVQe+XuCIRcrJljaylyUJRE0dJ3vdc0AQJAZknf8pv0VUEtcuNXbVJfxit8P22piPFKwcnj0/g3zfu/iR9ZAG5E+CmZ3RA6et+Bc1rGp6I1TewmNaicCjmUyQJBAKa89fIUbDZ1IHa6Q7U9ZwMsz9wX4V9/YOeT0eHVQmqw1JDmGiXECTJR5wuCRNboJSOp03bTS8gIqrlEPRU8pi8=';
                    //使用公钥加密
                    var encrypt = new JSEncrypt();
                    encrypt.setPublicKey('-----BEGIN PUBLIC KEY-----' + PUBLIC_KEY + '-----END PUBLIC KEY-----');
                    var encrypted = encrypt.encrypt(password);
                    console.log('加密后数据:%o', encrypted);
                    //使用私钥解密
                    var decrypt = new JSEncrypt();
                    decrypt.setPrivateKey('-----BEGIN RSA PRIVATE KEY-----'+PRIVATE_KEY+'-----END RSA PRIVATE KEY-----');
                    var uncrypted = decrypt.decrypt(encrypted);
                    console.log('解密后数据:%o', uncrypted);
                }else{
                    if(verification==""){
                        $(".tip_3").html("验证码不能为空").css("color","#f00");
                        $(".tip_icon3").removeClass("tip_icon_succ").addClass("tip_icon_err");
                    }else{
                        $(".tip_3").html("格式不正确").css("color","#f00");
                        $(".tip_icon3").removeClass("tip_icon_succ").addClass("tip_icon_err");
                    }
                }
            }else{
                if(password==""){
                    $(".tip_2").html("用户密码不能为空").css("color","#f00");
                    $(".tip_icon2").removeClass("tip_icon_succ").addClass("tip_icon_err");
                }else{
                    $(".tip_2").html("格式不正确").css("color","#f00");
                    $(".tip_icon2").removeClass("tip_icon_succ").addClass("tip_icon_err");
                }
            }
        }else{
            if(username==""){
                $(".tip_1").html("用户名不能为空").css("color","#f00");
                $(".tip_icon1").removeClass("tip_icon_succ").addClass("tip_icon_err");
            }else{
                $(".tip_1").html("格式不正确").css("color","#f00");
                $(".tip_icon1").removeClass("tip_icon_succ").addClass("tip_icon_err");
            }
        }
    })
});
