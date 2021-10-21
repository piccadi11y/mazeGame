let temp: string = 'Hello, World';

console.log(temp);

window.onload = () => {
    let engine = new MG.Engine('GameCanvas');
    engine.Start();
}