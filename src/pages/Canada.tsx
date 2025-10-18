import CountryTemplate from '../components/CountryTemplate';

const Canada = () => {
  return (
    <CountryTemplate
      country="Canada"
      flag="🇨🇦"
      currency="C$"
      startingPrice="C$235"
      phone="1-800-PLANADESK"
      email="canada@planadesk.com"
      heroGradient="linear-gradient(135deg, #dc2626 0%, #ffffff 50%, #dc2626 100%)"
      accentColor="#dc2626"
      themeStyle="natural"
    />
  );
};

export default Canada;
