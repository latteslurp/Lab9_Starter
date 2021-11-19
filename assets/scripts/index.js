import {InvalidFieldError} from './error.js';

window.addEventListener('DOMContentLoaded', init);

window.onerror = (e)=>{console.error(e)};

// TrackJS.track('Testing TrackJS!');

function init(){
    const consoleLogButton = document.querySelector('#console-log');
    const consoleErrorButton = document.querySelector('#console-error');
    const consoleCountButton = document.querySelector('#console-count');
    const consoleWarnButton = document.querySelector('#console-warn');
    const consoleAssertButton = document.querySelector('#console-assert');
    const consoleClearButton = document.querySelector('#console-clear');
    const consoleDirButton = document.querySelector('#console-dir');
    const consoleDirxmlButton = document.querySelector('#console-dirxml');
    const consoleGroupStartButton = document.querySelector('#console-group-start');
    const consoleGroupEndButton = document.querySelector('#console-group-end');
    const consoleTableButton = document.querySelector('#console-table');
    const startTimerButton = document.querySelector('#start-timer');
    const endTimerButton = document.querySelector('#end-timer');
    const consoleTraceButton = document.querySelector('#console-trace');
    const globalErrorButton = document.querySelector('#global-error');

    consoleLogButton.addEventListener('click', ()=>{
        console.log('Console Log Demo');
    });

    consoleErrorButton.addEventListener('click', ()=>{
        console.error('Console Error Demo');
    });
    
    let count = 'count';
    consoleCountButton.addEventListener('click', ()=>{
        console.count(count);
    });

    consoleWarnButton.addEventListener('click', ()=>{
        console.warn('Console Warn Demo');
    });

    consoleAssertButton.addEventListener('click', ()=>{
        const job1 = 'coder';
        const job2 = 'software engineer';
        const reason = 'job1 is expected to be different than job2';
        console.assert(job1 == job2, {job1, job2, reason});
    });
    
    consoleClearButton.addEventListener('click', ()=>{
        console.clear();
    });

    consoleDirButton.addEventListener('click', ()=>{
        console.dir(consoleDirButton);
    });

    consoleDirxmlButton.addEventListener('click', ()=>{
        console.dirxml(consoleDirxmlButton);
    });

    consoleGroupStartButton.addEventListener('click', ()=>{
        console.group();
    });
    
    consoleGroupEndButton.addEventListener('click', ()=>{
        console.groupEnd();
    });

    consoleTableButton.addEventListener('click', ()=>{
        const objectDemo = {'First Name': 'Reyner', 'Last Name': 'Santonius', 'Handsome':true, 'Tall':false}
        console.table(objectDemo);
    });

    let startTime;
    startTimerButton.addEventListener('click', ()=>{
        // time
        startTime = Date.now();
    });

    endTimerButton.addEventListener('click', ()=>{
        if(startTime){
            const endTime = Date.now();
            const interval = endTime-startTime;
            console.log(`Timer ended; interval = ${interval} ms`);
        }
    });

    consoleTraceButton.addEventListener('click', ()=>{
        const go = ()=> { one();};
        const one = ()=> { two();};
        const two = ()=> { three();};
        const three = ()=> {console.trace();};
        go();
    });

    globalErrorButton.addEventListener('click',()=>{
        errorGlobal('triggered!');
    });

    function sum(num1, num2){
        return num1+typonum2;
    }

    // calculator section
    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        let output = document.querySelector('output');
        let firstNum = document.querySelector('#first-num').value;
        let secondNum = document.querySelector('#second-num').value;
        let operator = document.querySelector('#operator').value;
        try{
            output.innerHTML = calculate(firstNum, secondNum, operator);
        }
        catch(e){
            if(e instanceof InvalidFieldError){
                console.error(e);
            }
            else{
                throw(e);
            }
        }
        finally{
            console.log('done evaluating');
        }
    });

    function calculate(firstNum, secondNum, operator){
        if(firstNum && isNaN(firstNum - parseFloat(firstNum))){
            throw new InvalidFieldError('Field does not contain numerical value: first num');
        }
        if(secondNum && isNaN(secondNum - parseFloat(secondNum))){
            throw new InvalidFieldError('Field does not contain numerical value: second num');
        }
        return eval(`${firstNum} ${operator} ${secondNum}`);
    }
}