
//일정 데이터가 들어있는 배열 선언
//(차후 서부 구성 후 서버로 부터 데이터를 가져올 배열(JSON형식으로 가져옴))
const todos = [
    /*
    {
        id: 1,
        text: '할 일 1',
        done: true
    },
    {
        id: 2,
        text: '할 일 2',
        done: true
    },
    {
        id: 3,
        text: '할 일 3',
        done: true
    }
    */
];

//새로운 할 일의 id값을 만들어 주는 함수
function makeNewId() {

    if(todos.length > 0) {
        const lastIndex = todos.length - 1; 
        // console.log((todo[lastIndex].id));
        return todos[lastIndex].id + 1;
    }else {
        return 1;
    }
}


//화면에 추가할 todo-list-item 노드를 생성하는 함수
function makeNewToDoNode(newToDo) {
    const $itemLi = document.createElement('li');
    const $label = document.createElement('label');  //<label></label> 생성
    const $div = document.createElement('div');
    const $divMod = document.createElement('div');

    //1. last 태그 작업
    $label.classList.add('checkbox');
    $label.innerHTML = `<input type="checkbox"><span class="text">${newToDo.text}</span>`;

    //2. divMod 태그 작업
    $divMod.classList.add('modify');
    $divMod.innerHTML = `<span class="lnr lnr-undo"></span>`;

    //3. div 태그 작업
    $div.classList.add('remove');
    $div.innerHTML = `<span class="lnr lnr-cross-circle"></span>`;

    //4. li 태그 작업
    $itemLi.dataset.id = newToDo.id;
    $itemLi.classList.add('todo-list-item');
    $itemLi.appendChild($label);
    $itemLi.appendChild($divMod);
    $itemLi.appendChild($div);

    // console.log($itemLi);
    return $itemLi;
}


//할 일 추가 처리 함수
function insertToDoData() {

    const $todoText = document.getElementById('todo-text');
    //사용자가 입력을 하지 않을 땐 함수를 종료 시켜야 함
    //trim() 함수: 문자열의 앞 뒤 공백을 제거
    if ($todoText.value.trim() === '') {
        // alert('필수 입력사항입니다!');
        $todoText.setAttribute('placeholder', '필수 입력사항입니다!');
        $todoText.style.background = 'orangered';
        $todoText.value = '';
        return;

    } else {
        $todoText.setAttribute('placeholder', '할 일을 입력하세요');
        $todoText.removeAttribute('style');
    }


    //1. todos 배열에 객체 셋팅.
    const newToDo = {
        id: makeNewId(),
        text: $todoText.value,
        done: false
    };
    // console.log(newToDo);


    //2. todos 배열에 해당 객체 삽입
    todos.push(newToDo);
    // console.log(todos);


    //3. 추가된 데이터를 화면에 렌더링하기 (DOM 그리기)
    const $todoList = document.querySelector('.todo-list');
    // $todoList.appendChild($li);  //$li 태그(셋트)를 아래와 같이 makeNewToDoNode()함수로 만들어 사용
    $todoList.appendChild(makeNewToDoNode(newToDo));

    //4. 입력 완료 후 잔존 문자열 제거
    $todoText.value = '';
}

//배열 인덱스 탐새 함수(dataId 이용)
function findIndexByDataId(dataId) {

    for (let i=0; i < todos.length; i++) {
        let todo = todos[i];
        if(dataId === todo.id) {
            return i;
        }
    }
    return null;  //for문이 다 돌다 못 찾았을 때 null로 반환
}


// 체크 박스 이벤트의 세부처리 수행함수
function changeCheckState($checkbox) {
    /*
    1. label에 클래스 checked를 추가해야 한다.
       이 함수는 label에 대한 노드를 가지고 있어야 한다.
       label노드에 대한 정보는 e.target이 가지고 있다.
       (label이 checkbox의 부모노드 이므로)
    */
   const $label = $checkbox.parentElement;
   /*
    if($checkbox.checked) {
        $label.classList.add('checked');
    }else {
        $label.classList.remove('checked');
    }
    */
   $label.classList.toggle('checked');


   //2. 실제 서버가 잇다면 서버에도 체크 상태를 반영시켜야 함
   // 배열의 done 값을 변경해야 함.
    const $li = $label.parentElement;
    const dataId = +$li.dataset.id;
    // console.log(dataId);


    //3. 배열을 탐색하여 data-id와 일치하는 id 프로퍼티를 가진 객체의 index를 얻어옴
    const foundIndex = findIndexByDataId(dataId);

    //4. 찾아낸 인덱스로 배열에서 해당 객체에 접근한 뒤 done을 수정
    todos[foundIndex].done = !todos[foundIndex].done;

    console.log(todos[foundIndex]);
}



//할 일 삭제 처리 수행 함수
function removeToDoData($delSpan) {

    //1.DOM 요소 삭제
    const $delLi = $delSpan.parentElement.parentElement;
    // console.log($delLi);

    document.querySelector('.todo-list').removeChild($delLi);

    //2. 배열(서버에 들어갈)에서도 삭제
    const dataId = +$delSpan.dataset.id;
    const foundIndex = findIndexByDataId(dataId);
    if(foundIndex !== null) {
        todos.splice(foundIndex, 1);
    }
}


//수정 모드 진입 이벤트 처리 함수
function modifyToDoText($modSpan) {

    //label의 span을 input으로 교체
    const $label = $modSpan.parentElement.previousElementSibling;
    // console.log($label);

    const $textSpan = $label.lastElementChild;
    // console.log($textSpan);

    const $modInput = document.createElement('input');
    $modInput.setAttribute('type', 'text');
    $modInput.setAttribute('value', $textSpan.textContent);
    $modInput.classList.add('modify-input');
    $label.replaceChild($modInput, $textSpan);

    //수정 버튼을 수정 확인 버트으로 변경
    const $divModify = $modSpan.parentElement;
    $divModify.innerHTML = '<span class="lnr lnr-checkmark-circle"></span>';
}


// 수정 완료 이벤트 처리 함수
function setModifyToDoText($modCheckSpan) {

    //수정 완료 텍스트를 input 태그에서 추출하여 다시 span.text로 변경
    const $modInput = $modCheckSpan.parentElement.previousElementSibling.lastElementChild;
    // console.log($modInput);
    const $label = $modInput.parentElement;
    const $textSpan = document.createElement('span');
    $textSpan.classList.add('text');
    $textSpan.textContent = $modInput.value;

    //배열 데이터 수정
    const dataId = +$label.parentElement.dataset.id;
    const foundIndex = findIndexByDataId(dataId);
    todos[foundIndex].text = $modInput.value;
    console.log(todos[foundIndex]);


    //input과 textSpan 교체
    $label.replaceChild($textSpan, $modInput);
    $modCheckSpan.parentElement.innerHTML = '<span class="lnr lnr-undo"></span>';
}




// 메인 실행 함수
(function(){

    //할일 추가 이벤트
    const $addBtn = document.getElementById('add');

    $addBtn.addEventListener('click', function(e){
        //콘솔에 잠깐 나타났다 사라지는 이유:
        //버튼이 form에 들어있으면 서버로 전송하기 위해 새로 고침을 하게 된다.
        e.preventDefault();  //버튼의 서버 전송 기능을 막음
        // console.log('추가 버튼이 잘 클릭 됩니다.');

        insertToDoData();
    });

    //할 일 완료 체크 이벤트
    const $todoList = document.querySelector('ul.todo-list');

    //체크박스,radio버튼 등은 이벤트가 change 임(주의!: click 이벤트 아님)
    $todoList.addEventListener('change', function (e){
        //matches('태그 선택자): 이벤트의 대상이 태그 선택자와 일치여부 확인
        if (!e.target.matches('.todo-list label.checkbox input[type=checkbox]')) {
            return;
        }
        console.log('체크박스 이벤트 실행됨!');;
        console.log(e.target.parentElement);;
        changeCheckState(e.target);
    });


    //할 일 삭제 이벤트
    $todoList.addEventListener('click', function(e) {
        // console.log(e.target);
        if(!e.target.matches('.todo-list div.remove span')) {
            return;
        }

        removeToDoData(e.target);
    });

    //할 일 수정 이벤트
    $todoList.addEventListener('click', function(e) {
        // console.log(e.target);
        if (e.target.matches('.todo-list div.modify span.lnr-undo')) {
            console.log('수정 모드 이벤트 발생!');
            modifyToDoText(e.target);
        } else if (e.target.matches('.todo-list div.modify span.lnr-checkmark-circle')) {
            console.log('수정 확인 이벤트 발생!');
            setModifyToDoText(e.target);
        } else {
            return;
        }
    });
}());
