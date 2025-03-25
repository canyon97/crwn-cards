import Directory from "./Components/Directory/Directory";

function App() {
  const categories = [
    {
      id: 1,
      title: "Mythical Island",
      img: "/mythical_island.png"
    },
    {
      id: 2,
      title: "Spacetime Smackdown - Palkia",
      img: "/spacetime_smackdown_palkia.png"
    },
    {
      id: 3,
      title: "Spacetime Smackdown - Dialga",
      img: "/spacetime_smackdown_dialga.png"
    },
    {
      id: 4,
      title: "Triumphant Light",
      img: "/triumphant_light.png"
    },
    {
      id: 5,
      title: "Shining Revelry",
      img: "/shining_revelry.png"
    }
  ];

  return (
    <>
      <Directory categories={categories} />
    </>
  );
}

export default App;
