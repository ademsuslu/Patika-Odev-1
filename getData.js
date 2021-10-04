import axios from "axios"; // axios import ettik
const getData = function (num) {
  // getData isminde bir tane dışardan veri alan fonksıyon tanımladık
  return new Promise(async (resolve, reject) => {
    // fonksıyonuniçerisine senkron bir foksıyon daha tanımladık resolve: başarılıysa datayı vericek değilse catche düşücek
    const { data: user1 } = await axios(
      // axios ile ilk datamızı aldık ve user1' atadık
      `https://jsonplaceholder.typicode.com/users/${num}`
    );
    const { data: user2 } = await axios(
      //axios ile 2. datamızı aldık ve user2' ye atadık
      `https://jsonplaceholder.typicode.com/posts?userId=${num}`
    );
    const allData = [user1, user2[1]]; // user1, user2[1]. indexini alldataya aktardık

    console.log(allData); //allDatayı logladık
  });
};
export default getData; // get datayı index.js e export ettık
