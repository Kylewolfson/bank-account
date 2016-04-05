function Account(holder, balance) {
  this.holder = holder;
  this.balance = balance;
}

var accounts = [];

$(document).ready(function() {

  $("#initialDeposit").submit(function(event) {
    event.preventDefault();
    $(".ongoingTransactions").show();
    $(".balance").show();
    balance = parseInt($("#openingBalance").val());
    var holder = $("#accountHolder").val();

    var newAccount = new Account(holder, balance);

    $("ul#accountHolders").append("<li><span class='holder'>" + newAccount.holder + "</span></li>");
    $("#currentBalance").text(newAccount.balance);
    $("#currentUser").text(newAccount.holder);

    accounts.push(newAccount);

    $(".holder").click(function() {
      $("#currentBalance").text(accounts[0].balance);
      $("#currentUser").text(accounts[0].holder);

    });


    $(".ongoingTransactions").submit(function(event) {
      event.preventDefault();
      balance = parseInt($("#currentBalance").val());
      console.log(balance);
      balance += parseInt($("#depositAmount").val());
      console.log(balance);
      balance -= parseInt($("#withdrawalAmount").val());
      console.log(balance);
      $("#currentBalance").text(balance);
    });

  });


});
