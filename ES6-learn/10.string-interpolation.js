// ES5  

// ---> dynamic-strings with concat

let trainer = {
    name: 'Nag'
};

// let dynamicString = 'the trainer ' + trainer.name + " killing all participants with .js";


// let dynamicHtmlTemplate = "<div>" +
// "<h1>"+trainer.name+"</h1>"    
// "</div>";




// Es6

let dynamicString = `the trainer ${trainer.name} killing all participants with .js`;

let dynamicHtmlTemplate = `

    <div>
        <h1> ${trainer.name}</h1>    
    </div>

`;