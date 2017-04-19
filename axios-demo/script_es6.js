const BASE_URL = 'http://scottbowlerdev.com/api';
const API_KEY = '?key=testuser1234';

axios.get(`${BASE_URL}/todos${API_KEY}`).then(resp => {
    const { todos } = resp.data;
    const table = $('table tbody');

    addToDom(todos, table);
});

const addToDom = (list, container) => {
    const tableRows = list.map((item, index) => {

        const tableData = [
            $(`<td>${index + 1}</td>`),
            $(`<td>${item.title}</td>`),
            item.complete ? $(`<td class="text-success">Yes</td>`) : $(`<td class="text-danger">No</td>`)
        ];

        return $('<tr>').append(tableData);
    });

    container.append(tableRows);
};

//Added Everything below to understand the flow of classes and constructors and how to apply that to react.

class doStuff {
    constructor(str){
        console.log('2a. Catching Constructor Super from doStuff: ', this.str);
        //First log is from when doStuff is instantiated
        this.str = str;
        console.log('2b. Catching Constructor Super from doStuff: ', this.str);
        //Second log is from when doStuff is is extended from otherStuff
    }
    sendStr(){
        return '4. Calling sendStr from instantiated';
    }
}

class otherStuff extends doStuff {
    constructor(str){
        super('1. Passing into Super');
        console.log(str);
        super(str);
        console.log('3. Constructor from otherStuff');
    }
    otherStr(){
        return '5. Calling otherStr from instantiated';
    }
}

const stuff = new otherStuff('0. From New');
console.log(stuff.sendStr());
console.log(stuff.otherStr());