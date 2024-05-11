

function findConsumers(event) {
    event.preventDefault(); 

   
    var msp = parseFloat(document.getElementById('msp').value);
    var crop = document.getElementById('crop').value;

    
    var consumers = [
        { name: 'ashok chaudhry', contact: '123-456-7890', email: 'ashok1@gmail.com' },
        { name: 'pooja dave', contact: '987-654-3210', email: 'pooja2@gmail.com' }
        
    ];


    displayConsumers(consumers);
}

function displayConsumers(consumers) {
    var consumerList = document.getElementById('consumer-list');
    consumerList.innerHTML = ''; 

    consumers.forEach(function(consumer) {
        var consumerInfo = document.createElement('div');
        consumerInfo.innerHTML = `
            <p><strong>Name:</strong> ${consumer.name}</p>
            <p><strong>Contact:</strong> ${consumer.contact}</p>
            <p><strong>Email:</strong> ${consumer.email}</p>
            <hr>
        `;
        consumerList.appendChild(consumerInfo);
    });
}
