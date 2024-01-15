function foo() {
  const x = 12;
  return () => console.log(x);
}

// ----------------------------------

export function SimpleClosure() {
  const bar = foo();
  return <button onClick={bar}>SimpleClosure</button>;
}
