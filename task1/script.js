//Wait until DOM fully load
document.addEventListener('DOMContentLoaded', function(){
    //Get button by ID
    const button = document.getElementById('createDivButton');

    //Add a click listener to button
    button.addEventListener('click', function(){
        console.log("The button has been clicked")
        
        //Create new div tag
        const newDiv = document.createElement('div')

        //Configure the div tag new content
        newDiv.textContent = 'This is the new div tag created dinamically';
        
        //Configure new attributes to the new tag  
        newDiv.setAttribute('id', 'newDiv');
        newDiv.style.backgroundColor = 'yellow';
        newDiv.style.padding = '10px';
        newDiv.style.margin = '10px 0';

        //Add the new div to the body document
        document.body.appendChild(newDiv)
    })
})