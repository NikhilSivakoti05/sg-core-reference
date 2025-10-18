import CountryTemplate from '../components/CountryTemplate';

const Europe = () => {
  return (
    <CountryTemplate
      country="Europe"
      flag="🇪🇺"
      currency="€"
      startingPrice="€169"
      phone="+800-PLANADESK"
      email="europe@planadesk.com"
      heroGradient="linear-gradient(135deg, #1e40af 0%, #fbbf24 50%, #1e40af 100%)"
      accentColor="#1e40af"
      themeStyle="sophisticated"
    />
  );
};

export default Europe;
