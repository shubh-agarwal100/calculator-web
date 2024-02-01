let output = document.getElementById('output');
let currentInput = '';

function appendToOutput(value) {
  currentInput += value;
  updateOutput();
}

function clearOutput() {
  currentInput = '';
  updateOutput();
}

function calculate() {
  try 
  {
    currentInput = eval(currentInput).toString();
    updateOutput();
  } catch (error)
   {
    currentInput = 'Error';
    updateOutput();
  }
}
  function clearLastInput()
   {
    currentInput = currentInput.slice(0, -1);   //for removing the last value i use this 
    updateOutput();
  }


function updateOutput()
 {
  output.textContent = currentInput;
}

