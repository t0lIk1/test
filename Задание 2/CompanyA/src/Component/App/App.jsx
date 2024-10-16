import "./App.css";
import CompanyDescription from "../CompanyDescription/CompanyDescription";
import Header from "../Header/Header";
import ServicesList from "../ServicesList/ServicesList";
import ContactInfo from "../ContactInfo/ContactInfo";

const App = () => {
  return (
    <>
      <Header />
      <CompanyDescription />
      <ServicesList />
      <ContactInfo />
    </>
  );
};

export default App;
