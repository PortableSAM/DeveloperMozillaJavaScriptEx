    function createParagraph() {
        let para = document.createElement('p');
        para.textContent = '당신은 방금 버튼을 눌렀어!!';
        document.body.appendChild(para);
    }

    const buttons = document.querySelectorAll('button');
    // 모든 button 태그를 List 형태로 buttons 변수에 저장.

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', createParagraph);
    }
    // 복수이기 때문에 for를 사용해 루프 작용.