const fs = require('fs');

const createFile = async (fileName) => {
    try {
        await fs.promises.writeFile(fileName, 'Hello, World!');
        console.log(`File '${fileName}' created successfully`);
    } catch (err) {
        console.error(`Error creating file '${fileName}':`, err);
    }
};

const readFile = async (fileName) => {
    try {
        const data = await fs.promises.readFile(fileName, 'utf-8');
        console.log(`Contents of file '${fileName}':`, data);
        return data;
    } catch (err) {
        console.error(`Error reading file '${fileName}':`, err);
    }
};

const appendToFile = async (fileName) => {
    try {
        await fs.promises.appendFile(fileName, `\nTHis is additional content`);
        console.log(`Content appended to file '${fileName}':`, err);
    } catch (error) {
        console.error(`Error appending to file '${fileName}':`, err);
    }
};

const deleteFile = async (fileName) => {
    try {
        await fs.promises.unlink(fileName);
        console.log(`File '${fileName}' deleted successfully`);
    } catch (error) {
        console.error(`Error deleting file '${fileName}':`, err);
    }
};

module.exports = {
    createFile,
    readFile,
    appendToFile,
    deleteFile
};