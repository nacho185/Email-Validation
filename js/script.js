document.getElementById("search-value").addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    document.getElementById("button-search").click();
  }
});

/*api call*/
const access_key = "554ece73b31f79e5b5912ca5adce3cf5";
const baseUrl = "https://apilayer.net/api/check?access_key=";
const searchButton = document.getElementById("button-search");
let searchValue = document.getElementById("search-value");
let searchEmailData = document.getElementById("search-dataEmail");
let searchDomainData = document.getElementById("search-dataDomain");
let searchFormData = document.getElementById("search-dataForm");
let searchDisposableData = document.getElementById("search-dataDisposable");
let searchFreeData = document.getElementById("search-dataFree");
let searchMeanData = document.getElementById("search-dataMean");
searchButton.addEventListener("click", () => {
  fetch(
    baseUrl + access_key + "&email=" + searchValue.value + "&smtp=1&format=1"
  )
    .then((res) => res.json())
    .then((data) => {
      /*email data*/
      let emailData = data["email"];
      searchEmailData.textContent = "Email Address: " + " " + emailData;
      /*end email data*/
      /*domain data*/
      let domainData = data["domain"];
      searchDomainData.textContent = "Domain: " + " " + domainData;
      /*end domain data*/
      /*valid form?*/
      let formData = data["format_valid"];
      searchFormData.textContent = "Valid Format: " + " " + formData;
      /*end valid form?*/
      /*searchDisposableData*/
      let disposableData = data["disposable"];
      searchDisposableData.textContent = "Disposable: " + " " + disposableData;
      /*end searchDisposableData*/
      /*free*/
      let freeData = data["free"];
      searchFreeData.textContent = "Free: " + " " + freeData;
      /*end free*/

      /*did you mean*/
      let didYouMeanData = data["did_you_mean"];
      searchMeanData.textContent = "Did You Mean: " + " " + didYouMeanData;
      /*end did you mean*/
    })
    .catch((err) => {
      console.log(err);
    });
});
