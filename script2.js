
      let input = document.getElementById('inputbox');
    let expression = "";
    
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', () => {
            let buttonText = button.innerHTML;
            
            switch (buttonText) {
                case '=':
                    try {
                        input.value = eval(expression) || "0";
                    } catch {
                        input.value = "Error";
                    }
                    break;
                case 'AC':
                    expression = "";
                    input.value = "0"; 
                    break;
                case 'DEL':
                    expression = expression.slice(0, -1);
                    input.value = expression || "0"; 
                    break;
                default:
                    expression += buttonText;
                    input.value = expression;
            }
        });
    });
