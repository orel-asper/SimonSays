const fs = require('fs');
const path = require('path');


// read all folders ignore files in this directory
const folders = fs.readdirSync(path.join(__dirname)).filter(folder => fs.lstatSync(path.join(__dirname, folder)).isDirectory());
// get all folders js files and dir name 
const files = folders.map(folder => {
    const files = fs.readdirSync(path.join(__dirname, folder)).filter(file => file.endsWith('.js'));
    return {
        folder,
        files
    };
});


// // loop on files and create import `import { SvgComponent } from './${folder}/${file}';`
const imports = files.map(file => {
    const folder = file.folder;
    const files = file.files;
    const imports = files.map(file => {
        const fileName = file.replace('.js', '');
        return `import ${fileName} from './${folder}/${file}';`;
    }).join('\n');
    return imports;
}).join('\n');

// create variable `const svgs = [   {  name: 'name', component: component }, ...]`
const variables = files.map(file => {
    const files = file.files;
    const variables = files.map(file => {
        const fileName = file.replace('.js', '');
        return `{ name: '${fileName}', component: ${fileName} },`;
    }).join('\n');
    return variables;
}).join('\n');


// add at the buttom of the file the export const findSvgByName = (id: string) => {let svgComponent = svgs.find(itm => itm.name === id)?.component return svgComponent}
const exportFindSvgByName = `export const findSvgByName = (id: string) => {
    let svgComponent = svgs.find(itm => itm.name === id)?.component
    return svgComponent
}`;

// write the file
fs.writeFileSync(path.join(__dirname, 'findsvg.ts'), `${imports}\n\nexport const svgs = [\n${variables}\n]\n\n${exportFindSvgByName}`);

