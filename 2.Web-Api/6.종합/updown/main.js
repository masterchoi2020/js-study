
//게임에 필요한 데이터 객체
const gameDatas = {
    secret: Math.floor(Math.random() * 100) + 1,
    answer: null,
    min: 1,
    max: 100,
    numberOfIcons: 100 //현재 렌더링되어 있는 아이콘의 개수
};

//숫자 아이콘 생성함수
function makeNumberIcons() {
    const $numbers = document.getElementById('numbers');

    const $frag = document.createDocumentFragment();

    for(let i = gameDatas.min; i <= gameDatas.max; i++){
        const $icon = document.createElement('div');
        $icon.textContent = i;
        $icon.classList.add('icon');
        $frag.appendChild($icon);
    }
    $numbers.appendChild($frag);
}

//메인 로직을 실행할 즉시 실행 함수
(function(){
    makeNumberIcons();
}());

