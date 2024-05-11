


function findFarmers(event) {
    event.preventDefault(); 

  
    var amount = parseFloat(document.getElementById('amount').value);
    var crop = document.getElementById('crop').value;
    var budget = parseFloat(document.getElementById('budget').value);

    var farmers = [
        { name: 'Farmer 1', crop: 'Wheat', price: 1000, available: 50 },
        { name: 'Farmer 2', crop: 'Rice', price: 1200, available: 30 },
        { name: 'Farmer 3', crop: 'Barley', price: 800, available: 70 },
        { name: 'Farmer 4', crop: 'Corn', price: 1500, available: 20 },
    ];

    
    var filteredFarmers = farmers.filter(function (farmer) {
        return farmer.crop.toLowerCase() === crop.toLowerCase() &&
            farmer.price <= budget &&
            farmer.available >= amount;
    });

 
    displayFarmers(filteredFarmers);
}


function displayFarmers(farmers) {
    var farmerList = document.getElementById('farmer-list');


    farmerList.innerHTML = '';

    if (farmers.length === 0) {
        farmerList.innerHTML = '<p>No farmers found matching your criteria.</p>';
        return;
    }


    farmers.forEach(function (farmer) {
        var farmerInfo = document.createElement('div');
        farmerInfo.classList.add('farmer-info');
        farmerInfo.innerHTML = `
            <p><strong>Name:</strong> ${farmer.name}</p>
            <p><strong>Crop:</strong> ${farmer.crop}</p>
            <p><strong>Price per Quintal:</strong> $${farmer.price}</p>
            <p><strong>Available Quantity:</strong> ${farmer.available} quintals</p>
            <hr>
        `;
        farmerList.appendChild(farmerInfo);
    });
}
