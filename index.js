///////////1.按下submit後再去執行
document.getElementById("form-buttom").addEventListener("click", function(){
    //取值前先檢查是否有漏填問卷(value==null)

    console.clear()
    console.log(document.querySelector('input[name="q1"]:checked'))

    if (!document.querySelector('input[name="q1"]:checked')) {
      alert('問卷尚未填寫完!');
      return;
    }
    if (!document.querySelector('input[name="q2"]:checked')) {
      alert('問卷尚未填寫完!');
      return;
    }
    if (!document.querySelector('input[name="q3"]:checked')) {
      alert('問卷問填寫完!');
      return;
    }
    if (!document.querySelector('input[name="q4"]:checked')) {
      alert('問卷尚未填寫完!');
      return;
    }
    if (!document.querySelector('input[name="q5"]:checked')) {
      alert('問卷尚未填寫完!');
      return;
    }
    if (!document.querySelector('input[name="q6"]:checked')) {
      alert('問卷尚未填寫完!');
      return;
    }
    if (!document.querySelector('input[name="q7"]:checked')) {
      alert('問卷尚未填寫完!');
      return;
    }
    if (!document.querySelector('input[name="q8"]:checked')) {
      alert('問卷尚未填寫完!');
      return;
    }
    if (!document.querySelector('input[name="q9"]:checked')) {
      alert('問卷尚未填寫完!');
      return;
    }
    if (!document.querySelector('input[name="q10"]:checked')) {
      alert('問卷尚未填寫完!');
      return;
    }
    
    //////////////2.取得每題被選取的value
    selectage = document.querySelector('#age');
    var age = selectage.value;
    selectjob = document.querySelector('#job');
    var job = selectjob.value;
    // var que1 = document.querySelector('input[name="q1"]:checked').value;
    var que1 = document.querySelector('input[name="q1"]:checked').value;
    var que2 = document.querySelector('input[name="q2"]:checked').value;
    var que3 = document.querySelector('input[name="q3"]:checked').value;
    var que4 = document.querySelector('input[name="q4"]:checked').value;
    var que5 = document.querySelector('input[name="q5"]:checked').value;
    var que6 = document.querySelector('input[name="q6"]:checked').value;
    var que7 = document.querySelector('input[name="q7"]:checked').value;
    var que8 = document.querySelector('input[name="q8"]:checked').value;
    var que9 = document.querySelector('input[name="q9"]:checked').value;
    var que10 = document.querySelector('input[name="q10"]:checked').value;
    

////////////3.Javascript轉成JSON
    let data = {
        age,job,
        que1,que2,que3,
        que4,
        que5,
        que6,
        que7,
        que8,
        que9,
        que10
    }
    
    console.log(data)

////////////////4.傳送+接受回傳值
    const url = 'http://10.10.10.100/getbrand.aspx';
    
    axios.post(url, data).then(resp => {

    })
    .catch(error => {
        let resp = {
            "result1": {
              "ent": "cht",
              "solution": "499"
            },
            "result2": {
              "ent": "cht",
              "solution": "499"
            },
            "result3": {
              "ent": "cht",
              "solution": "499"
            }
          };
          ////////////儲存資料
          console.log(resp);
          localStorage.setItem("resp",strData); 
    });

    //////////////跳轉到結果畫面
    window.location.href = "./result.html";
});