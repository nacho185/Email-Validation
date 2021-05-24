const access_key = "554ece73b31f79e5b5912ca5adce3cf5";
const baseUrl = "http://apilayer.net/api/check?access_key=";
const searchButton = document.getElementById("button-search");
let searchValue = document.getElementById("search-value");
let searchEmailData = document.getElementById("search-dataEmail");
let searchDomainData = document.getElementById("search-dataDomain");
searchButton.addEventListener("click", () => {
  fetch(
    baseUrl + access_key + "&email=" + searchValue.value + "&smtp=1&format=1"
  )
    .then((res) => res.json())
    .then((data) => {
      /*email data*/
      let emailData = data["email"];
      searchEmailData.textContent = "Email Address " + emailData;
      /*end email data*/
      /*domain data*/
      let domainData = data["domain"];
      searchDomainData.textContent = "domain" + domainData;
      /*end domain data*/
    });
});
