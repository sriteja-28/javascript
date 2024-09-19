//todo Promise chaining real time example

function getUser(userId) {
    return new Promise((resolve, reject) => {
        console.log("Getting Users");
        setTimeout(() => {
            resolve({
                userId: userId,
                userName: "Admin"
            });
        }, 3000);
    });
}

function getService(user) {
    return new Promise((resolve, reject) => {
        console.log(`Getting service of ${user.userName}`);
        setTimeout(() => {
            resolve(["Email", "Fax", "print"]);
        }, 3000);
    });
}

function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculating the service cost of ${services}`);
        setTimeout(() => {
            resolve(services.length * 20);
        }, 3000);
    });
}

//getUser(100).then(getService).then(getServiceCost).then(console.log);

//!Handling errors in Promises

// try {
//     getUser(100).then(getService).then(getServiceCost).then(console.log);

// }
// catch (error) {
//     console.log(`caught by try /catch ${error}`);
// }


//!using async
async function showServiceCost(){
    try{
        let user=await getUser(100);
        let services=await getService(user);
        let cost=await getServiceCost(services);
        console.log(`the service cost:${cost}`)
    }
    catch(error){
        console.log(error);
    }
}
showServiceCost();