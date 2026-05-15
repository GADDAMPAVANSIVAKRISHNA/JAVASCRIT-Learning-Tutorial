class Myarray extends array {
    constructor(...args) {
        super(...args);
    }
    display() {
        let strItems = " ";
        for (let val of this) {
            strItems += `${val} `;
        }
        console.log(strItems);
    }
}
let Letters = new Myarray('a', 'b', 'c', 'd');
letters.display();