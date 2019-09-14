
var surveyValueChanged = function (sender, options) {
    var el = document.getElementById(options.name);
    if (el) {
        el.value = options.value;
    }
};

Survey
    .StylesManager
    .applyTheme("default");

var json = {
    questions: [
        {
            type: "text",
            name: "name",
            title: "Your name:"
        }, {
            type: "text",
            name: "email",
            title: "Your e-mail"
        }, {
            type: "checkbox",
            name: "car",
            title: "What car are you driving?",
            isRequired: true,
            colCount: 4,
            choices: [
                "None",
                "Ford",
                "Vauxhall",
                "Volkswagen",
                "Nissan",
                "Audi",
                "Mercedes-Benz",
                "BMW",
                "Peugeot",
                "Toyota",
                "Citroen"
            ]
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

survey.data = {
    name: 'John Doe',
    email: 'johndoe@nobody.com',
    car: ['Ford']
};

$("#surveyElement").Survey({model: survey, onValueChanged: surveyValueChanged});