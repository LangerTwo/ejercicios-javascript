function estaBalanceado(expresion) {
    let stack = [];
    let pares = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    for (let char of expresion) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if (stack.length === 0 || stack.pop() !== pares[char]) {
                return false;  // No está balanceado
            }
        }
    }
    return stack.length === 0;
}

// Ejemplos de uso
console.log(estaBalanceado("{ [ a * ( c + d ) ] - 5 }")); 
console.log(estaBalanceado("{ a * ( c + d ) ] - 5 }"));    
console.log(estaBalanceado("{ ( [ ] ) }"));                
console.log(estaBalanceado("{ ( [ ] } )"));