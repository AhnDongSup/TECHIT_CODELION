import React, { useState } from 'react'
import './Main.css'

export default function Main(props) {

  const [expert, setExpert] = useState('');
  const [traningTime, setTraningTime] = useState(0);
  const [dday, setDday] = useState(0);

  function handleSubmit(event) {
    event.preventDefault();
    setDday(Math.ceil(10000 / traningTime))
  }

  return (
    <main>
    <form className="cont-input" onSubmit={handleSubmit}>
      <h2 className="blind">필요한 시간 알아보기</h2>
      <p className="txt-wannabe">나는<input type="text" value={expert} onChange={(event) => setExpert(event.target.value)} required/>전문가가 될것이다.</p>
      <p className="txt-time">그래서 앞으로 매일 하루에<input type="number" value={traningTime} onChange={(event) => setTraningTime(event.target.value)}/>시간씩 훈련할 것이다.</p>
      <button type="submit" className="btn-exc">나는 며칠동안 훈련을 해야 1만시간이 될까?</button>
    </form>
    {!!dday && <section className="cont-result">
      <h3 className="blind">결과 확인</h3>
      <p className="txt-wannabe">
        당신은 <strong>{expert}</strong> 전문가가 되기 위해서 <br />
        대략 <strong>{dday}</strong> 일 이상 훈련하셔야 합니다. :&#41;
      </p>
      <button type="button" className="btn-go" onClick={props.modalOpen}>훈련하러가기 GO! GO!</button>
      <button type="button" className="btn-share">공유하기</button>
    </section>}
  </main>
  )
}
