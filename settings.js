
document.addEventListener('DOMContentLoaded', function () {
   
    const toggleSetting1 = document.getElementById('toggleSetting1');
    toggleSetting1.addEventListener('change', function () {
        if (toggleSetting1.checked) {
            activateSetting1();
        } else {
            deactivateSetting1();
        }
    });

 
    const toggleSetting2 = document.getElementById('toggleSetting2');
    toggleSetting2.addEventListener('change', function () {
        if (toggleSetting2.checked) {
            activateSetting2();
        } else {
            deactivateSetting2();
        }
    });

    
    const toggleSetting3 = document.getElementById('toggleSetting3');
    toggleSetting3.addEventListener('change', function () {
        if (toggleSetting3.checked) {
            activateSetting3();
        } else {
            deactivateSetting3();
        }
    });

    
    const dropdownSetting = document.getElementById('dropdownSetting');
    const dropdownOptions = document.querySelector('.dropdown-options');
    dropdownSetting.addEventListener('click', function () {
        dropdownOptions.style.display = (dropdownOptions.style.display === 'block') ? 'none' : 'block';
    });
});

// Toggle Setting 1 functions
function activateSetting1() {
    console.log('Setting 1 is activated!');
    
}

function deactivateSetting1() {
    console.log('Setting 1 is deactivated!');
    
}

// Toggle Setting 2 functions
function activateSetting2() {
    console.log('Setting 2 is activated!');
    
}

function deactivateSetting2() {
    console.log('Setting 2 is deactivated!');
   
}

// Toggle Setting 3 functions
function activateSetting3() {
    console.log('Setting 3 is activated!');
    
}

function deactivateSetting3() {
    console.log('Setting 3 is deactivated!');
   
}

// Dropdown Setting function
function selectOption(option) {
    console.log('Selected option:', option);
    
    document.getElementById('dropdownSetting').innerText = option;
    document.querySelector('.dropdown-options').style.display = 'none';
}
