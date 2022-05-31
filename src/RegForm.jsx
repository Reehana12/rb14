import React from 'react';

function RegForm(props) {
    const ref1 = React.useRef();
    const ref2 = React.useRef();
    const ref3 = React.useRef();
    React.useEffect(()=>{
       ref1.current.focus()
    },[])
    function checkEntry(e){
        if(e.key==='Enter'){
            ref2.current.focus();
        }
    }
    function check2ndEntry(e){
        if(e.key==='Enter'){
            ref3.current.focus();
        }
    }
    return (
        <div>
            <input type="text" ref={ref1} onKeyUp={checkEntry}/><br/>
            <input type="text" ref={ref2} onKeyUp={check2ndEntry}/>
            <br/>
            <button ref={ref3}>Add</button>
        </div>
    );
}

export default RegForm;