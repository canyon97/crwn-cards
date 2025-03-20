import Directory from "./Components/Directory/Directory";

function App() {
  const categories = [
    {
      id: 1,
      title: "Mythical Island",
      img: "https://fserveu20221222.blob.core.windows.net/files/Pokemon/2024/12/121057-c000a81b/Pokemon_Trading_Card_Game_Pocket_Mythical_Island_Booster_Pack.png?sv=2025-01-05&se=2025-03-20T19%3A45%3A17Z&sr=b&sp=r&rscd=attachment&rsct=application%2Foctet-strem&sig=%2FnHI1vD3dKCpRzao44vG8wQzs2Bouiwu1wO97VuBa10%3D&lightbox=y&sky=d685ee9979b71c8ba531cac1c259c4664743d2607b835f8ca3ea76d5d65c77ea",
    },
    {
      id: 2,
      title: "Spacetime Smackdown - Palkia",
      img: "https://fserveu20221222.blob.core.windows.net/files/Pokemon/2025/01/231206-c9c0add7/Palkia_Booster_Front_EN.png?sv=2025-01-05&se=2025-03-20T19%3A45%3A16Z&sr=b&sp=r&rscd=attachment&rsct=application%2Foctet-strem&sig=m1lN%2BYRF8%2FF7aornc%2BJoeWmWojX%2BO7sgElz18gvMqPY%3D&lightbox=y&sky=db6d30dc2cd623a7681b78e0a0ea9dfa5fbc72fe96924a4ff4093721079e1f7c",
    },
    {
      id: 3,
      title: "Spacetime Smackdown - Dialga",
      img: "https://fserveu20221222.blob.core.windows.net/files/Pokemon/2025/01/231206-c9c0add7/Dialga_Booster_Front_EN.png?sv=2025-01-05&se=2025-03-20T19%3A45%3A16Z&sr=b&sp=r&rscd=attachment&rsct=application%2Foctet-strem&sig=eLZbDyKDj2a7QmYVofJMRCR7Kb%2Byd23%2FTLHpGCFjA7w%3D&lightbox=y&sky=e55aa6459435f887e937a22362ab8cdeaece8a4267dfff9675240766b22051e8",
    },
    {
      id: 4,
      title: "Triumphant Light",
      img: "https://fserveu20221222.blob.core.windows.net/files/Pokemon/2025/02/271213-8516133f/Pokemon_Trading_Card_Game_Pocket_Triumphant_Light_Booster_Art_EN.png?sv=2025-01-05&se=2025-03-20T19%3A45%3A12Z&sr=b&sp=r&rscd=attachment&rsct=application%2Foctet-strem&sig=TI2NGYynaqPyQUScEJsAbQ%2BceWMzhFdrOtrgH8cdwqg%3D&lightbox=y&sky=ce4de3bdf2b84ddfc622ba56ecd871564f1447ff7e9ddc5829b621dca84bcc45",
    },
  ];

  return (
    <>
      <Directory categories={categories} />
    </>
  );
}

export default App;
