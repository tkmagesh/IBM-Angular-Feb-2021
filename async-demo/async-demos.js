(function(){
    //sync
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        const result = x + y;
        console.log(`   [@service] returning the result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@client] triggering the service`);
        const result = addSync(x,y);
        console.log(`[@client] result = ${result}`);
    }

    window['addSyncClient'] = addSyncClient;

    //async using callbacks
    function addAsync(x,y, callback){
        console.log(`   [@service] processing ${x} and ${y}`);
        setTimeout(function(){
            const result = x + y;
            console.log(`   [@service] returning the result`);
            callback(result);
        }, 5000);
    }

    function addAsyncClient(x,y){
        console.log(`[@client] triggering the service`);
        addAsync(x,y, function(result){
            console.log(`[@client] result = ${result}`);
        });

    }

    window['addAsyncClient'] = addAsyncClient;

    function addAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        const p = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                const result = x + y;
                console.log(`   [@service] returning the result`);
                resolveFn(result);
            }, 5000);
        });
        return p;
    }

    function addAsyncPromiseClient(x,y){
        console.log(`[@client] triggering the service`);
        var p = addAsyncPromise(x,y);
        //p.then(fn), p.catch(fn)
        p.then(function(result){
            console.log(`[@client] result = ${result}`);
        });
    }

    window['addAsyncPromiseClient'] = addAsyncPromiseClient;

})();