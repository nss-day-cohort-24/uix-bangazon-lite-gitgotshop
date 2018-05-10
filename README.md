
![Minezy - your local data-driven marketing](public/Minezy_logo.png "Minezy - your local data-driven marketing")
# DATA-DRIVEN MARKETING

## HOW TO USE MINEZY
### INSTALL
1. Inside your terminal, type and enter `npm install`
    * This installation will install node modules including Faker.js and Bootstrap
1. CD into the `src/` folder, and type `json-server db.json`
    * This will allow access to the Faker information
1. In a new terminal (not in `src/`), `npm start` to enter Minezy.

### MINEZY.COM
1. When you first enter into Minezy, you will see the main page which displays a large image, buttons in the navigation bar and a search bar.
![Minezy - navigation bar when signed in](public/readme/main.PNG "Minezy - your local data-driven marketing")
1. Before making your way into searching for your necessities, please log-in. 
1. If you have chosen to become a product sellar, once logged-in the navigation changes slightly to view your Inventory Products.
![Minezy - navigation bar when signed in](public/readme/nav-btns.PNG "Minezy - your local data-driven marketing")
1. To see your product inventory, click 'My Inventory'. Here, you will see the option to add more products to your inventory and a gallery of your own products.
1. To edit any of  your inventory products, click 'Edit Your Product' and change the information in the form fields. Once you are finished, click 'Save Changes'. 
1. To see the changes  you've made, click the 'Back' button.
1. To remove any inventory product, click 'Remove'.
1. To browse and buy Minezy datasets, click either 'Lets Talk' or 'Products.
    * This functionality comes from the `ProductComponents.js` file. A function called `getProductData()` fetches information stored in the db.json file in the Products object
    * ```getProductData() {
            fetch("http://localhost:3000/Products")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        productsLoaded: true,
                        objResult: result
                    });```
    * Inside this `ProductComponents.js` file is the `.map()` method, which loops through the json information and gathers specific information needed to render in the `render()` function.
1. You may edit your profile by clicking 'Profile' or view items in your shopping cart by clicking the cart icon on the top right in the navigation bar.

***

## DESIGN
### Personas
__Primary (Seller)__: Holly Ivanka is a 30-something CEO of a small crafts business/organization. She’s trying to get her business off the ground, but has no access to crucial data on potential customers in the area. Holly needs some way of gathering that data quickly, easily and efficiently so her business can get up and running.

__Primary (Buyer)__: Cambridge Chad is the owner of a data mining/analysis organization that specializes in the collection of bulk data. His organization has done well selling to larger businesses seeking customer information, but now he’s interested in expanding his base and catering to new startup businesses that have little to no experience in marketing or targeting potential customers.
### Challenge Statement
> How might we connect businesses in need of consumer data with established data-mining organizations in a simple, contract-less digital marketplace.

*** 

## JSON SERVER DATA
**Intermediary Table**

PK | transActionID | orderID | productID
--- | --- | --- | ---
number | number | number | number
