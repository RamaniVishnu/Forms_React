import {useRef} from 'react'

function FormApplication(){

    const inputFname = useRef(null);
    const inputLname = useRef(null);

    const focusData =(e)=>{
        // const a={
        //     abc:1
        // }

        // const chum=function(abc){
        //     console.log('inside chum',this,abc)
        // }
        // console.log('chum========',chum.call(a,1));
        //e.target represents the input , which triggered the event

        const form = e.target.form;
        console.log(e.target.form.elements,'entered up');
        //Reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
        const index = Array.prototype.indexOf.call(form,e.target);
        form.elements[index+1].focus();
        e.preventDefault();

    }

    return  (
        <div>
            <form onSubmit={(e)=> e.preventDefault()}>
                <div className="first_name">
                <label htmlFor="fname">FirstName:</label>
                <input type="text" id="fname" placeholder="Enter the first name" ref={inputFname} onKeyUp={(e)=> {if(e.key === 'Enter'){
                    focusData(e);
                }}}/>
                </div>
                <div className="last_name">
                <label htmlFor="lname">LastName:</label>
                <input type="text" id="lname" placeholder="Enter the last name" ref={inputLname} onKeyUp={(e)=> {if(e.key === 'Enter'){
                    focusData(e);
                }}}/>
                </div>
                <button>Submit</button>

            </form>
        </div>
    )
}
export default FormApplication;