
const products = [
    {
      id: "mini15",
      name: "Mini Session",
      averagerating: 4.5
    },
    {
      id: "familyp",
      name: "Family portraits",
      averagerating: 4.7
    },
    {
      id: "birth45",
      name: "Birthday session",
      averagerating: 3.5
    },
    {
      id: "couple",
      name: "Couples session",
      averagerating: 3.9
    },
    {
      id: "other",
      name: "Other",
      averagerating: 5.0
    }
  ];

const productsname = document.getElementById('productName');

products.forEach(product => {
  let name = product.name;
  let id = product.id;
  let option = document.createElement("option");
  option.textContent = name;
  option.value = id;
  productsname.appendChild(option);
});













