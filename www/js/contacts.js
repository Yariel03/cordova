const getContact = () => {
  // find all contacts with 'Bob' in any name field
  var options = new ContactFindOptions();
  options.filter = ""; //  options.filter = "Nombre a buscar";
  options.multiple = true;
  var fields = ["displayName", "name"]; //campos a buscar
  navigator.contacts.find(fields, onSuccess, onError, options);
};

const onSuccess = (contacts) => {
  console.log(contacts, " contacts found");
  alert("Found " + contacts.length + " contacts.");
};

const onError = (contactError) => {
  alert("onError!");
};
