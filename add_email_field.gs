function addEmailField() {
  var form=
FormApp.openById('1jrEmIufpdesY_NfS1zbi9K-SNjPE-nsKRMfD-ht4vUo')
  var emailItem =
form.addTextItem()
emailItem.setTitle('Email').setRequired(true);
Logger.log('romanmogylevskyi@gmail.com');
}
