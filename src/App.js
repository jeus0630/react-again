import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {

    let [제목,제목변경] = useState('');
    let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
    let [따봉, 따봉변경] = useState([0,0,0]);
    let [modal, modal변경] = useState(false);

    function onClickLikeHandler(idx) {
        const arr = [...따봉];
        arr[idx]++;
        따봉변경(arr);
    }

    function onClickCoatHandler() {
        const arr = [...글제목];
        arr[0] = '여자 코트 추천';
        글제목변경(arr);
    }

    function onClickModalHandler(idx) {
        제목변경(글제목[idx]);
        modal변경(!modal);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <div>개발 blog</div>
            </div>
            <button onClick={onClickCoatHandler}>클릭</button>
            {
                글제목.map((el, idx) => {
                    return (
                        <div className="list" key={idx}>
                            <h3 onClick={()=>onClickModalHandler(idx)}>{el} <span onClick={()=>onClickLikeHandler(idx)}>👍</span> {따봉[idx]}</h3>
                            <p>2월 17일 발행</p>
                            <hr/>
                        </div>
                    )
                })
            }

            {
                modal == true
                    ? <Modal 제목={제목}></Modal>
                    : null
            }

        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal">
            <h2>{props.제목}</h2>
            <p>날짜</p>
            <p>상세내용</p>
        </div>
    )
}

export default App;
