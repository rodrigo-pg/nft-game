const hre = require("hardhat");

async function main() {
  const MyEpicGame = await hre.ethers.getContractFactory("MyEpicGame");
  const myEpicGame = await MyEpicGame.deploy(
    ["Batman", "Holmes", "Iron Man"],       
    ["https://cdn.ome.lt/F6G4at_QuCOLVRqO1GaZ4ezdz-s=/1200x630/smart/extras/conteudos/the-batman-adaptacao-mais-fiel-as-hqs.jpg", 
    "https://static.wikia.nocookie.net/dublagempedia/images/d/d2/Pagingpiglet.jpg/revision/latest?cb=20210123200930&path-prefix=pt-br", 
    "https://static.wikia.nocookie.net/disney/images/3/35/IronMan-EndgameProfile.jpg/revision/latest?cb=20200516075827&path-prefix=pt-br"],
    [100, 200, 300],                    
    [100, 50, 25],
    "Elon Musk", // Boss name
    "https://i.imgur.com/AksR0tt.png", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );

  await myEpicGame.deployed();

  console.log("MyEpicGame deployed to:", myEpicGame.address);

  let txn;
  txn = await myEpicGame.mintCharacterNFT(2);
  await txn.wait();
  
  txn = await myEpicGame.attackBoss();
  await txn.wait();

  txn = await myEpicGame.attackBoss();
  await txn.wait();

  txn = await myEpicGame.attackBoss();
  await txn.wait();
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });