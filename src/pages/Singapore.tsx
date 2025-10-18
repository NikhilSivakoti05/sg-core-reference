import CountryTemplate from '../components/CountryTemplate';

const Singapore = () => {
  return (
    <CountryTemplate
      country="Singapore"
      flag="🇸🇬"
      currency="S$"
      startingPrice="S$245"
      phone="1800-PLANADESK"
      email="singapore@planadesk.com"
      heroGradient="linear-gradient(135deg, #dc2626 0%, #ffffff 50%, #dc2626 100%)"
      accentColor="#dc2626"
      themeStyle="futuristic"
    />
  );
};

export default Singapore;
