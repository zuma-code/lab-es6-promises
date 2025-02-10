// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/*  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));*/



// Iteration 1 - using callbacks
// ...
// Iteration 1 - using callbacks
getInstruction('mashedPotatoes', 0, (step0) => {
  document.querySelector("#mashedPotatoes").innerHTML += `<li>${step0}</li>`
  // ... Your code here
   

    getInstruction("mashedPotatoes", 1, (step1) => {
      document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  
      getInstruction("mashedPotatoes", 2, (step2) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  
        getInstruction("mashedPotatoes", 3, (step3) => {
          document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  
          getInstruction("mashedPotatoes", 4, (step4) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  
         
  
              // ✅ Add a final message
              document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
  
              // ✅ Show the image once all steps are completed
              document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  
            }, (error) => console.log(error));
          }, (error) => console.log(error));
        }, (error) => console.log(error));
      }, (error) => console.log(error));
    }, (error) => console.log(error));
  
  

// Iteration 2 - using promises
// ...
obtainInstruction('steak', 0)
.then( (step0) => {
  document.querySelector("#steak").innerHTML += `<li>${step0}</li>`
  //  ... Your code here

    return obtainInstruction("steak", 1);
  })
  .then((step1) => {
    document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
    return obtainInstruction("steak", 2);
  })
  .then((step2) => {
    document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
    return obtainInstruction("steak", 3);
  })
  .then((step3) => {
    document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
    return obtainInstruction("steak", 4);
  })
  .then((step4) => {
    document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
    return obtainInstruction("steak", 5);
  })
  .then((step5) => {
    document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
    return obtainInstruction("steak", 6);
  })
  .then((step6) => {
    document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
    return obtainInstruction("steak", 7);
  })
  .then((step7) => {
    document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;

    // ✅ Add a final message
    document.querySelector("#steak").innerHTML += `<li>Steak is ready!</li>`;

    // ✅ Show the steak image
    document.querySelector("#steakImg").removeAttribute("hidden");
  })
  .catch((error) => console.log(error)); // Handle errors if any step fails



// Iteration 3 using async/await
// ...async function makeBroccoli() {
  
async function makeBroccoli() {
try {
    let step0 = await obtainInstruction("broccoli", 0);
    document.querySelector("#broccoli").innerHTML += `<li>${step0}</li>`;

    let step1 = await obtainInstruction("broccoli", 1);
    document.querySelector("#broccoli").innerHTML += `<li>${step1}</li>`;

    let step2 = await obtainInstruction("broccoli", 2);
    document.querySelector("#broccoli").innerHTML += `<li>${step2}</li>`;

    let step3 = await obtainInstruction("broccoli", 3);
    document.querySelector("#broccoli").innerHTML += `<li>${step3}</li>`;

    let step4 = await obtainInstruction("broccoli", 4);
    document.querySelector("#broccoli").innerHTML += `<li>${step4}</li>`;

    let step5 = await obtainInstruction("broccoli", 5);
    document.querySelector("#broccoli").innerHTML += `<li>${step5}</li>`;

    let step6 = await obtainInstruction("broccoli", 6);
    document.querySelector("#broccoli").innerHTML += `<li>${step6}</li>`;

    // ✅ Add a final message
    document.querySelector("#broccoli").innerHTML += `<li>Broccoli is ready!</li>`;

    // ✅ Show the broccoli image
    document.querySelector("#broccoliImg").removeAttribute("hidden");

  } catch (error) {
    console.log(error); // Handle errors if any step fails
  }
}

// Call the function to execute it
makeBroccoli();


// Bonus 2 - Promise all
// ...
async function makeBrusselsSprouts() {
  try {
    // Create an array of promises for each step
    const steps = [
      obtainInstruction("brusselsSprouts", 0),
      obtainInstruction("brusselsSprouts", 1),
      obtainInstruction("brusselsSprouts", 2),
      obtainInstruction("brusselsSprouts", 3),
      obtainInstruction("brusselsSprouts", 4),
      obtainInstruction("brusselsSprouts", 5),
      obtainInstruction("brusselsSprouts", 6),
      obtainInstruction("brusselsSprouts", 7),
    ];

    // Wait for all promises to resolve
    const results = await Promise.all(steps);

    // Append each step to the HTML
    results.forEach((step) => {
      document.querySelector("#brusselsSprouts").innerHTML += `<li>${step}</li>`;
    });

    // ✅ Add the final message
    document.querySelector("#brusselsSprouts").innerHTML += `<li>Brussels sprouts are ready!</li>`;

    // ✅ Show the image
    document.querySelector("#brusselsSproutsImg").removeAttribute("hidden");

  } catch (error) {
    console.log(error); // Handle errors if any step fails
  }
}

// Call the function
makeBrusselsSprouts();
