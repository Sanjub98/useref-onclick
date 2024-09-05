import React, { useRef } from 'react'

function InterForm() {

  let firstNameInputRef = useRef();
  let lastNameInputRef = useRef();
  let engInputRef = useRef();
  let sanInputRef = useRef();
  let matInputRef = useRef();
  let phyInputRef = useRef();
  let cheInputRef = useRef();
  let resultParaRef = useRef();

  return (
    <div>
      <form>
        <div>
            <label >First Name</label>
            <input ref={firstNameInputRef}></input>
        </div>
        <div>
            <label>Last Name</label>
            <input ref={lastNameInputRef}></input>
        </div>
        <div>
            <label>English</label>
            <input ref={engInputRef}></input>
        </div>
        <div>
            <label>Sanskrit</label>
            <input ref={sanInputRef}></input>
        </div>
        <div>
            <label>Maths</label>
            <input ref={matInputRef}></input>
        </div>
        <div>
            <label>Physics</label>
            <input ref={phyInputRef}></input>
        </div>
        <div>
            <label>Chemistry</label>
            <input ref={cheInputRef}></input>
        </div>
        <div>
          <button type="button" onClick={()=>{

            
            let firstName = firstNameInputRef.current.value;
            let lastName = lastNameInputRef.current.value;
            let engMarks = Number(engInputRef.current.value); 
            let sanMarks = Number(sanInputRef.current.value);
            let matMarks = Number(matInputRef.current.value);
            let phyMarks = Number(phyInputRef.current.value);
            let cheMarks = Number(cheInputRef.current.value);
            let totalMarks = Number(engMarks+sanMarks+matMarks+phyMarks+cheMarks);
            let perc = (totalMarks/500)*100;
            resultParaRef.current.innerHTML=` ${firstName} ${lastName} Got total Marks Of ${totalMarks} with percentage of ${perc}%`;
            
          }}>Calculate Result</button>
        </div>
        <div>
          <p ref={resultParaRef}>
            Please Enter Values
          </p>
        </div>
      </form>
    </div>
  )
}

export default InterForm
