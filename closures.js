function outerFunction(outerVariable) {
  return function innerFunction(innerVarable) {
    console.log('Outer variable is:', outerVariable);
    console.log('Inner variable is:', innerVarable);
  }
}

const newFunction = outerFunction('Yevhen');
newFunction('Dovhan');