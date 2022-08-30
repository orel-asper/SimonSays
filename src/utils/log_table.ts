

// console.log as table 
// example:
// ┌────────┬────────┬────────────┐
// │  name  │   id   │  pastime   │
// ├────────┼────────┼────────────┤
// │  Jane  │  1234  │  Archery   │
// │  John  │  1235  │  Knitting  │
// │  Jess  │  1236  │  Fishing   │
// └────────┴────────┴────────────┘
// color blue for header and green for data and red for error add spaces

export const logTable = (data: any, columns: string[] = []) => {
    if (!data) return;
    if (!Array.isArray(data)) data = [data];
    if (!Array.isArray(columns)) columns = Object.keys(data[0]);
    let maxLength = 0;
    for (let i = 0; i < columns.length; i++) {
        if (columns[i].length > maxLength) maxLength = columns[i].length;
    }
    let table = '┌';
    for (let i = 0; i < columns.length; i++) {
        table += '─'.repeat(maxLength);
        table += '┬';
    }
    table += '\n';
    let header = '│';
    for (let i = 0; i < columns.length; i++) {
        header += columns[i].padEnd(maxLength);
        header += '│';
    }
    table += header;
    table += '\n';
    table += '├';
    for (let i = 0; i < columns.length; i++) {
        table += '─'.repeat(maxLength);
        table += '┼';
    }
    table += '\n';
    for (let i = 0; i < data.length; i++) {
        let row = '│';
        for (let j = 0; j < columns.length; j++) {
            let value = data[i][columns[j]];
            if (value === undefined) value = 'undefined';
            if (value === null) value = 'null';
            if (value instanceof Error) value = value.message;
            if (typeof value === 'object') value = JSON.stringify(value);
            row += value.toString().padEnd(maxLength);
            row += '│';
        }
        table += row;
        table += '\n';
    }
    table += '└';
    for (let i = 0; i < columns.length; i++) {
        table += '─'.repeat(maxLength);
        table += '┴';
    }
    console.log('\n' + table);
}
