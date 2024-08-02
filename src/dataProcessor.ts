function processData(items) {
    let result = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i] !== null && items[i] !== undefined) {
            let processedItem = {
                id: items[i].id,
                name: items[i].name.toUpperCase(),
                date: new Date(items[i].date)
            };
            result.push(processedItem);
        }
    }
    return result;
}

let data = [
    { id: 1, name: "item1", date: "2023-01-01" },
    { id: 2, name: "item2", date: "2023-01-02" },
    null,
    undefined,
    { id: 3, name: "item3", date: "2023-01-03" }
];

let processedData = processData(data);
console.log(processedData);
