const fs = require('fs');
const path = require('path');


// read all folders ignore files in this directory
const folders = fs.readdirSync(path.join(__dirname)).filter(folder => fs.lstatSync(path.join(__dirname, folder)).isDirectory());
// get all folders js files and dir name 
const files = folders.map(folder => {
    const files = fs.readdirSync(path.join(__dirname, folder)).filter(file => file.endsWith('.png'));
    return {
        folder,
        files
    };
});


// create variable const images = [   {  name: 'name', file_path: `require("./${file.folder}/${file}")`}, ...] ignore files that has @ in the name
const images = files.reduce((acc, folder) => {
    const files = folder.files.filter(file => !file.includes('@'));
    return [...acc, ...files.map(file => ({
        name: file.replace('.png', ''),
        file_path: `require("./${folder.folder}/${file}")`
    }))];
}, []);


// add at the buttom of the file the export const findImgByName = (id: string) => {let imagePath = images.find(itm => itm.name === id)?.file_path return imagePath}
const exportFindImgByName = `export const findImgByName = (id: string) => {
    let imagePath = images.find(itm => itm.name === id)?.file_path
    if (imagePath) {
        return imagePath
    } else return new Error('Image not found')
}`;

// write the file
fs.writeFileSync(path.join(__dirname, 'findimg.ts'), `export const images = [\n${images.map(itm => `{ name: '${itm.name}', file_path: ${itm.file_path} }`).join(',\n')}\n]\n\n${exportFindImgByName}`);
