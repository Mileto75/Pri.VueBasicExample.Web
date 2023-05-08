//init vue engine
let app = new Vue({
    el: "#app",
    data: {
        pageTitle: "Our first cool Vue app!",
        rawHtml: "<b>this is raw html</b>",
        url: "https://www.gazzetta.it",
        hoverText: "Football news",
        formVisible: false,
        person: {
            name: null,
            city: null,
        },
        visible: true,
        people: [
            {name:"Karel", city:"Gent"},
            {name:"Jan", city:"Blankenberge"},
            {name:"Cindy", city:"Brugge"},
        ],
        inputValue: "Change me",
    },
    methods: {
        toggleVisible: function () {
            this.visible = !this.visible;     
        },
        showForm: function (){
            this.formVisible = !this.formVisible;
        },
        addPerson: function () {
            this.people.push(this.person);
        },
    },
});