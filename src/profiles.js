var faker = require('faker')

function generateProfiles() {
   var profiles = []

   for (var id = 0; id < 5; id++) {
      let firstName = faker.name.firstName();
      let lastName = faker.name.firstName();
      let phoneNumber = faker.phone.phoneNumberFormat();
      let avatar = faker.internet.avatar();
      let jobTitle = faker.name.jobTitle();
      let email = faker.internet.email();
      let password = faker.internet.password();
      let account = faker.finance.account();
      let birthDate = faker.date.past();
      let birthCity = faker.address.city();
      

      profiles.push({
         "id": id,
         "first_name": firstName,
         "last_name": lastName,
         "phone": phoneNumber,
         "avatar": avatar,
         "title": jobTitle,
         "email": email,
         "password": password,
         "account": account,
         "DOB": birthDate,
         "City of Birth": birthCity
      })
   }

   return { "profiles": profiles }
}

// json-server requires that you export
// a function which generates the data set
module.exports = generateProfiles