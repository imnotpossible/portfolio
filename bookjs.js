document.getElementById('currentDate').value = new Date().toISOString().substring(0, 10);;

function count(type)  {
    // 결과를 표시할 element
     const resultElement = document.getElementById('result');
            
        // 현재 화면에 표시된 값
     let number = resultElement.innerText;
            
    // 더하기/빼기
    if(type === 'plus') {
        if(number<6){
            number = parseInt(number) + 1;
        }
        
    }else if(type === 'minus')  {
        if(number > 0){
            number = parseInt(number) - 1;
        }
    }
            
    // 결과 출력
    resultElement.innerText = number;
}

function showConfirm(){
    if(confirm("예약하시겠습니까?")){
        alert("예약되었습니다.");
        location.replace(location.href);
        window.open("https://imnotpossible.github.io/portfolio/rtr_main", "_self");
        window.open("https://imnotpossible.github.io/portfolio/check", "","width=500, height=600");
    }else{
        alert("취소되었습니다.");
        location.replace(location.href);
    }
}