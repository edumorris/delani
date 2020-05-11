/*
function showDesign() {
	document.getElementById("wwd-descriptions").style.display = "block";
	document.getElementById("design-wwd-description").style.display = "block";
	document.getElementById("development-wwd-description").style.display = "none";
	document.getElementById("product-management-wwd-description").style.display = "none";


}

function showDevelopment() {
	document.getElementById("wwd-descriptions").style.display = "block";
	document.getElementById("design-wwd-description").style.display = "none";
	document.getElementById("development-wwd-description").style.display = "block";
	document.getElementById("product-management-wwd-description").style.display = "none";
}

function showProduct() {
	document.getElementById("wwd-descriptions").style.display = "block";
	document.getElementById("design-wwd-description").style.display = "none";
	document.getElementById("development-wwd-description").style.display = "none";
	document.getElementById("product-management-wwd-description").style.display = "block";
}
*/

function showDesign() {
	if($('#design-wwd-description').css('display') == 'none') {
		$('#wwd-descriptions').show('slow'); 
		$('#design-wwd-description').show('slow');
		$('#development-wwd-description').hide('slow');
		$('#product-management-wwd-description').hide('slow');  
	} else { 
		$('#design-wwd-description').hide('slow'); 
	}
}

function showDevelopment() {
	if($('#development-wwd-description').css('display') == 'none') {
		$('#wwd-descriptions').show('slow'); 
		$('#development-wwd-description').show('slow');
		$('#design-wwd-description').hide('slow');
		$('#product-management-wwd-description').hide('slow'); 
	} else { 
		$('#development-wwd-description').hide('slow'); 
	}
}

function showProduct() {
	if($('#product-management-wwd-description').css('display') == 'none') {
		$('#wwd-descriptions').show('slow'); 
		$('#product-management-wwd-description').show('slow');
		$('#development-wwd-description').hide('slow');
		$('#design-wwd-description').hide('slow'); 
	} else { 
		$('#product-management-wwd-description').hide('slow'); 
	}
}

function sendMessage() {
    let usersName = document.getElementById("user_name").value;
    let usersEmail = document.getElementById("user_email").value;
    let usersMessage = document.getElementById("user_message").value;

    if (usersName.length == 0) {
        alert("Kindly enter your name");
        usersName.focus();

        if (usersEmail.length == 0) {
            alert("Kindly enter your name");
            usersName.focus();
        }

        if (usersMessage.length == 0) {
            alert("Kindly enter your name");
            usersName.focus();
        }
    } else {
        alert("Message Has Been Received");
    }

    return content = ["usersName", "usersEmail", "usersMessage"];
}

function descrClose() {
	document.getElementById("wwd-descriptions").style.display = "none";
}