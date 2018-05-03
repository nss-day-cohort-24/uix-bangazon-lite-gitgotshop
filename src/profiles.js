var faker = require('faker')

function generateProfiles() {
   var profiles = []

   for (var id = 0; id < 5; id++) {
      let firstName = faker.name.firstName();
      let lastName = faker.name.firstName();
      let phoneNumber = faker.phone.phoneNumberFormat();
      let avatar = faker.internet.avatar();
      

      profiles.push({
         "id": id,
         "first_name": firstName,
         "last_name": lastName,
         "phone": phoneNumber,
         "avatar": avatar
      })
   }

   return { "profiles": profiles }
}

// json-server requires that you export
// a function which generates the data set
module.exports = generateProfiles