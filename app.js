
const yargs = require('yargs')
const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'String'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'String'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }
})

//create remove command
yargs.command({
    command: "remove",
    describe: "Remove a note",
    handler: function () {
        console.log('Removing the note')
    }
})

yargs.command({
    command: 'list',
    describe: "describe your list",
    handler: function () {
        console.log('Listing out all note')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading the note')
    }
})


//add, remove, read, list
console.log(yargs.argv)


// const msg = getNotes()
// console.log(msg)

// console.log(chalk.red.bold.inverse("Error!"))

//  console.log(process.argv)







// const validator = require('validator')
// console.log(validator.isEmail('gmail.com'))


// const add = require('./utils.js')
// const sum = add(4, -2)
// console.log(sum)

