import React, { useState } from 'react'
import './calculator.css'

const Calculator = () => {

    const [value, setValue] = useState('');

    const handleEqual = () => {
        try {
            const Result = eval(value);
            const str = Result.toString();
            setValue(str);
        } catch (error) {
            setValue('Error');
        }
    };

    return (
        <>
            <div className='mainContainer'>

                <div className='calculatorContainer'>

                    <form action='' className='form'>

                        <div className='display'>
                            <input type='text' value={value}  className='result'/>
                        </div>

                        <div>
                            <input type='button' value='AC'style={{color:"#b00a48",background: "#5cb7dd",fontSize:"1rem"}} onClick={e => setValue("")} />
                            <input type='button' value='DEL' style={{fontSize:"1rem"}} onClick={e => setValue(value.slice(0, -1))} />
                            <input type='button' value='.' onClick={e => setValue(value + e.target.value)} />
                            <input type='button' value='/' onClick={e => setValue(value + e.target.value)} />
                        </div>

                        <div>
                            <input type='button' value='7' onClick={e => setValue(value + e.target.value)} />
                            <input type='button' value='8' onClick={e => setValue(value + e.target.value)} />
                            <input type='button' value='9' onClick={e => setValue(value + e.target.value)} />
                            <input type='button' value='*' onClick={e => setValue(value + e.target.value)} />
                        </div>

                        <div>
                            <input type='button' value='4' onClick={e => setValue(value + e.target.value)} />
                            <input type='button' value='5' onClick={e => setValue(value + e.target.value)} />
                            <input type='button' value='6' onClick={e => setValue(value + e.target.value)} />
                            <input type='button' value='+' onClick={e => setValue(value + e.target.value)} />
                        </div>

                        <div>
                            <input type='button' value='3' onClick={e => setValue(value + e.target.value)} />
                            <input type='button' value='2' onClick={e => setValue(value + e.target.value)} />
                            <input type='button' value='1' onClick={e => setValue(value + e.target.value)} />
                            <input type='button' value='-' onClick={e => setValue(value + e.target.value)} />
                        </div>

                        <div>
                            <input type='button' value='00' onClick={e => setValue(value + e.target.value)} />
                            <input type='button' value='0' onClick={e => setValue(value + e.target.value)} />
                            <input type='button' value='=' className='equal' onClick={handleEqual} />

                        </div>

                    </form>

                </div>

            </div>
        </>
    )
}

export default Calculator