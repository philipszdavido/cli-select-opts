const { Select } = require("./")


const jsFrameworkSel = new Select({
    question: "Which of these is your fav JS framework?",
    options: ["Angular", "React", "Vue", "Svelte"],
    answers: ["angular", "react", "vue", "svelte"],
    pointer: ">",
    color: "magenta"
})

//jsFrameworkSel.start()

const stylingTypeSel = new Select({
    question: "Which styling do you want?",
    options: ["CSS", "SASS", "SCSS", "LESS"],
    answers: ["css", "sass", "scss", "less"],
    pointer: "-",
    color: 'red'
})

stylingTypeSel.start()