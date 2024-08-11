function emailsend(){
  var Username = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var phone = document.getElementById('number').value;
  var message = document.getElementById('msg').value;
  var msgbody = "Name:"+ Username +
  "<br/> Email ID:"+ email +
  "<br/> Subject:"+ subject +
  "<br/> Phone No:"+ phone +
  "<br/> Message:"+ message ;
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "jangra.ankit1811@gmail.com",
    Password : "93F6C7B9113C4FEC6E571E9FE6ABECA46BE0",
    To : 'jangra.ankit1811@gmail.com',
    From : "jangra.ankit1811@gmail.com",
    Subject : subject,
    Body : msgbody
}).then(
  message => {
    if(message=='OK')
    {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success"
      });
    }
  }
);
}