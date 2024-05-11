function calculateMSP(event) {
    event.preventDefault(); 

    // Get input values
    var cost = parseFloat(document.getElementById('cost').value);
    var profit = parseFloat(document.getElementById('profit').value);

    // Calculate MSP
    var msp = cost + (cost * profit / 100);

    // Display MSP
    document.getElementById('msp').value = msp.toFixed(2); // Round to 2 decimal places
}
