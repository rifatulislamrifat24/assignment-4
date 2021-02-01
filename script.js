document.getElementById('firstClass-plus-btn').addEventListener('click', function(){
    controlAllClassTicket ('firstClass', true);
});

document.getElementById('firstClass-minus-btn').addEventListener('click', function(){
    controlAllClassTicket ('firstClass', false);
});

document.getElementById('economyClass-plus-btn').addEventListener('click', function() {
    controlAllClassTicket ('economyClass', true);
});

document.getElementById('economyClass-minus-btn').addEventListener('click', function() {
    controlAllClassTicket ('economyClass', false);
})



function controlAllClassTicket (ticket, isIncrease){

    const ticketInput = document.getElementById(ticket + '-input');
    const ticketCount = parseInt(ticketInput.value);
    
    let ticketNewCount = ticketCount;

    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }

    ticketInput.value = ticketNewCount;

    let subtotalTicketPrice = 0;

    if (ticket == 'firstClass') {
        subtotalTicketPrice = ticketNewCount * 150;
    }
    if (ticket == 'economyClass') {
        subtotalTicketPrice = ticketNewCount * 100;
    }

    calculateAllTicketPrice ()
}

function calculateAllTicketPrice () {

    const firstClassCount = ticketInputValue ('firstClass');
    const economyClassCount = ticketInputValue ('economyClass');

    const subtotalTicketPrice = firstClassCount * 150 + economyClassCount * 100;

    document.getElementById('subtotal-ticket-price').innerText = subtotalTicketPrice;

    const vat = subtotalTicketPrice * .1;

    document.getElementById('vat-amount').innerText = vat;

    const totalTicketPrice = subtotalTicketPrice + vat;

    document.getElementById('total-ticket-price').innerText = totalTicketPrice;
}

function ticketInputValue (allClassTicket) {

    const allClassTicketInput = document.getElementById(allClassTicket + '-input');

    const allClassTicketCount = parseInt(allClassTicketInput.value);

    return allClassTicketCount;
}

document.getElementById('bookNow-btn').addEventListener('click', function(){

    if (document.getElementById('total-ticket-price').innerText == 0 || document.getElementById ('total-ticket-price').innerText < 0) {

        alert ('You have to select at-least 1 (One) ticket(s)');
    }
    else if (document.getElementById('total-ticket-price').innerText != 0) {

        const userInputForm = document.getElementById ('user-input-form');
        userInputForm.style.display = 'none';

        const confirmationForm = document.getElementById ('confirmation-massage');
        confirmationForm.style.display = 'block';

    }

});


