const buttons=document.body.querySelectorAll('button');
buttons[0].addEventListener('click',answerNo1);
buttons[1].addEventListener('click',answerNo2);
buttons[2].addEventListener('click',answerNo3);
buttons[3].addEventListener('click',answerNo4);
buttons[4].addEventListener('click',answerNo5);
buttons[5].addEventListener('click',answerNo6);
buttons[6].addEventListener('click',answerNo7);

let answerNo1Status=0;
let answerNo2Status=0;
let answerNo3Status=0;
let answerNo4Status=0;
let answerNo5Status=0;
let answerNo6Status=0;
let answerNo7Status=0;

function answerNo1(){
    if(answerNo1Status==0){
        answerNo1Status=1;
        var showAnswer=document.getElementById("answer1");
        showAnswer.innerHTML="<p>答案：C</p><p>解析：因为2+6=8</p>";
    }
    else{
        answerNo1Status=0;
        var showAnswer=document.getElementById("answer1");
        showAnswer.innerHTML="";
        
    }
}

function answerNo2(){
    if(answerNo2Status==0){
        answerNo2Status=1;
        var showAnswer=document.getElementById("answer2");
        showAnswer.innerHTML="<p>答案：A</p><p>解析：略</p>";
        
    }
    else{
        answerNo2Status=0;
        var showAnswer=document.getElementById("answer2");
        showAnswer.innerHTML="";
        
    }
}

function answerNo3(){
    if(answerNo3Status==0){
        answerNo3Status=1;
        var showAnswer=document.getElementById("answer3");
        showAnswer.innerHTML="<p>答案：D</p><p>解析：略</p>";
        
    }
    else{
        answerNo3Status=0;
        var showAnswer=document.getElementById("answer3");
        showAnswer.innerHTML="";    
    }
}

function answerNo4(){
    if(answerNo4Status==0){
        answerNo4Status=1;
        var showAnswer=document.getElementById("answer4");
        showAnswer.innerHTML="<p>答案：B</p><p>解析：8-3=5</p>";
        
    }
    else{
        answerNo4Status=0;
        var showAnswer=document.getElementById("answer4");
        showAnswer.innerHTML="";
        
    }
}

function answerNo5(){
    if(answerNo5Status==0){
        answerNo5Status=1;
        var showAnswer=document.getElementById("answer5");
        showAnswer.innerHTML="<p>答案：B</p><p>解析：略</p>";
        
    }
    else{
        answerNo5Status=0;
        var showAnswer=document.getElementById("answer5");
        showAnswer.innerHTML="";
        
    }
}
function answerNo6(){
    if(answerNo6Status==0){
        answerNo6Status=1;
        var showAnswer=document.getElementById("answer6");
        showAnswer.innerHTML="<p>答案：AB</p><p>解析：3<5, 4<5, 5=5, 6>5</p>";
        
    }
    else{
        answerNo6Status=0;
        var showAnswer=document.getElementById("answer6");
        showAnswer.innerHTML="";
        
    }
}

function answerNo7(){
    if(answerNo7Status==0){
        answerNo7Status=1;
        var showAnswer=document.getElementById("answer7");
        showAnswer.innerHTML="<p>答案：BCD</p><p>解析：欢迎报考中山大学</p>";
    }
    else{
        answerNo7Status=0;
        var showAnswer=document.getElementById("answer7");
        showAnswer.innerHTML="";
    }
}




// //监控选项
// let status1=0;
// //const pro1=document.getElementById("pro1");
// const input1=document.querySelectorAll('input');
// input1[0].addEventListener('select',pro1No1);
// input1[1].addEventListener('select',pro1No2);
// input1[2].addEventListener('select',pro1No3);
// input1[3].addEventListener('select',pro1No4);

// function pro1No1(){
//     status1=1;
// }
// function pro1No2(){
//     status1=2;
// }
// function pro1No3(){
//     status1=3;
//     alert("答复正确");
// }

// function pro1No4(){
//     status1=4;
// }

function my_confirm(){
    var msg="是否确认提交？";
    if(confirm(msg)==true){
        my_submit();
    }
    else
    {
        return false;
    }
}
function my_submit()
{
    var radio=new Array();
    for(let i=1;i<=5;++i)
    {
        var radio_name=new String("radio_"+i);
        radio[i-1]=$("input:radio[name="+radio_name+"]:checked").val();
    }
    for(let i=6;i<=7;++i)
    {
        var checkbox_name=new String("checkbox_"+i);
        var chk_value = [];
        $("input:checkbox[name="+checkbox_name+"]:checked").each(function () {
            chk_value.push($(this).val());
        });
        radio[i-1]="";
        for(let j=0;j<chk_value.length;++j)
        {
            radio[i-1]=radio[i-1]+chk_value[j];
        }
    }
    // for(let i=0;i<7;++i)
    // {
    //     console.log(radio[i]);
    // }
    //统计分数
    var answer=["C","A","D","B","B","AB","BCD"];//标准答案
    var score=0;
    var my_result=document.getElementById("my_result");
    var str=new String();
    for(let i=0;i<7;++i)
    {
        var idx=i+1;
        if(radio[i]==undefined ||radio[i]==0)
        {
            str=str+"<p>第"+idx+"题，你没有作答，标准答案是"+answer[i]+"</p>";
        }
        else if(radio[i]==answer[i])
        {
            score=score+5;
            str=str+"<p>第"+idx+"题，你的答案是"+radio[i]+"，回答正确！"+"</p>";
        }
        else if(idx>=6)//处理多选题漏选
        {
            var arr=new Array();
            for(let j=0;j<4;++j)
                arr[j]=0;
            for(let j=0;j<answer[i].length;++j)
            {
                if(answer[i][j]=='A')
                    arr[0]=1;
                else if(answer[i][j]=='B')
                    arr[1]=1;
                else if(answer[i][j]=='C')
                    arr[2]=1;
                else if(answer[i][j]=='D')
                    arr[3]=1;
            }
            var flag=0;
            for(let j=0;j<radio[i].length;++j){
                if(radio[i][j]=='A'&&arr[0]==0)
                {
                    flag=1;
                    break;
                }
                else if(radio[i][j]=='B'&&arr[1]==0)
                {
                    flag=1;
                    break;
                }
                else if(radio[i][j]=='C'&&arr[2]==0)
                {
                    flag=1;
                    break;
                }
                else if(radio[i][j]=='D'&&arr[3]==0)
                {
                    flag=1;
                    break;
                }
                
            }
            if(flag==1)
            {
                str=str+"<p>第"+idx+"题，你的答案是"+radio[i]+"，标准答案是"+answer[i]+"，解答错误</p>";
            }
            else
            {
                score=score+2;
                str=str+"<p>第"+idx+"题，你的答案是"+radio[i]+"，标准答案是"+answer[i]+"，您漏选了</p>";
            }
        }
        else
        {
            str=str+"<p>第"+idx+"题，你的答案是"+radio[i]+"，标准答案是"+answer[i]+"，解答错误</p>";
        }
    }
    str=str+"<p>您的总分为"+score+"分</p>";
    my_result.innerHTML="";
    
    my_result.innerHTML=str;
}
    
