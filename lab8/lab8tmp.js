let o = {
    name: `abc`,
    printmessage: function () {
    
        //console.log(console.log(this.name));

        // setTimeout(() => {
        //     console.log(this.name);
        // }, 2000);
        
        
        //annonymus function doesn't have a name, the bind is a reference for a function passing the context (in this case the object o)
        setTimeout(function () { console.log(this.name) }.bind(this), 2000);
        

        //wrap with arrow function and apply
        setTimeout(()=>function () { console.log(this.name) }.apply(this), 2000);

        //wrap with arrow function and call
        setTimeout(()=>function(){console.log(this.name)}.call(this));

    }
}

//setTimeout(() => o.printmessage(o), 3000);
//setTimeout(o.printmessage.bind(o), 2000);


o.printmessage();