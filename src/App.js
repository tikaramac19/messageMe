import "./App.css";
import MessageBox from "./components/MessageBox";
import Typed from "react-typed";
function App() {
  return (
    <>
      <div className="app-container">
        <div className="header-container">
          <Typed 
            strings={["यदा यदा हि धर्मस्य ग्लानिर्भवति भारत:।", "अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्।", " परित्राणाय साधूनां विनाशाय च दुष्कृताम्।", " धर्मसंस्थापनार्थाय सम्भवामि युगे युगे"]}
            typeSpeed={80}
            backSpeed={30}
            loop
            
          />
        </div>
        <MessageBox />
        {/* <div className="header-container2">
          <Typed 
            strings={["ॐ वन्दे देव उमापतिं सुरगुरुं,", "वन्दे जगत्कारणम् ।", " वन्दे पन्नगभूषणं मृगधरं,", " वन्दे पशूनां पतिम् ॥","वन्दे सूर्य शशांक वह्नि नयनं,", "वन्दे मुकुन्दप्रियम् ।","वन्दे भक्त जनाश्रयं च वरदं,", "वन्दे शिवंशंकरम् ॥"]}
            typeSpeed={80}
            backSpeed={50}
            loop
            
          />
        </div> */}
      </div>
    </>
  );
}

export default App;
