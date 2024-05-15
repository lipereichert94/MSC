const obj = {
    name: `abc`,
    logMessage() {

        console.log(this.name);

        // setTimeout(function () { console.log(this.name) }, 2000);


        // setTimeout(() => {
        //     console.log(this.name);
        // }, 2000);

        // //annonymus function doesn't have a name, the bind is a reference for a function passing the context (in this case the object o)
        // setTimeout(function () { console.log(this.name) }.bind(this), 2000);


        // //wrap with arrow function and apply
        // setTimeout(() => function () { console.log(this.name) }.apply(this), 2000);

        // //wrap with arrow function and call
        // setTimeout(() => function () { console.log(this.name) }.call(this),2000);

    }
};

setTimeout(obj.logMessage, 1000)
setTimeout(() => obj.logMessage.call(obj), 1000);
setTimeout(() => obj.logMessage(), 1000);
setTimeout(obj.logMessage.bind(obj), 1000);
setTimeout(() => obj.logMessage.apply(obj), 1000);


// obj.logMessage();