function volume_sphere() {
    //Write your code here
    let radius = document.getElementById('radius').value;
    if (isNaN(radius) || radius < 0) {
        document.getElementById('volume').value = 'NaN';
        return false; // Prevent form from submitting
    }
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    document.getElementById('volume').value = volume.toFixed(4);
    return false; // Prevent form from submitting
}

// Correctly assign the function to the form's onsubmit event
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
