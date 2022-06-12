function submitForm() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("choose-subject").value;
  let message = document.getElementById("input-message").value;

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(subject);
  console.log(message);

  //   alert(`
  //         Name: ${name}
  //         Email: ${email}
  //         Phone: ${phone}
  //         Subject: ${subject}
  //         Message: ${message}
  //       `);

  if (name == "") {
    return alert("Nama harus di isi...");
  }
  if (email == "") {
    return alert("Email harus di isi...");
  }
  if (phone == "") {
    return alert("Nomor Telpon Harus di isi...");
  }
  if (subject == "") {
    return alert("Subject Harus di isi...");
  }

  //   if (name == '' || email == '' || phone == '') {
  //     alert('Tolong isi semua form...');
  //   }
  let emailReceiver = "adefit007@mail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo...!, my name ${name}, Phone ${phone}, ${message}`;
  a.click();

  // Object
  //   let dataObject = {
  //     name: name,
  //     email: email,
  //     phoneNumber: phone,
  //     subject: subject,
  //     message: message,
  //   };

  //   console.log(dataObject);
}
