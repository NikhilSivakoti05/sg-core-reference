import CountryTemplate from '../components/CountryTemplate';

const Mexico = () => {
  return (
    <CountryTemplate
      country="Mexico"
      flag="🇲🇽"
      currency="$"
      startingPrice="$3,299"
      phone="01-800-PLANADESK"
      email="mexico@planadesk.com"
      heroGradient="linear-gradient(135deg, #16a34a 0%, #ffffff 50%, #dc2626 100%)"
      accentColor="#16a34a"
      themeStyle="vibrant"
    />
  );
};

export default Mexico;
