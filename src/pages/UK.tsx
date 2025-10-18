import CountryTemplate from '../components/CountryTemplate';

const UK = () => {
  return (
    <CountryTemplate
      country="UK"
      flag="🇬🇧"
      currency="£"
      startingPrice="£149"
      phone="0800-PLANADESK"
      email="uk@planadesk.com"
      heroGradient="linear-gradient(135deg, #1e3a8a 0%, #dc2626 50%, #ffffff 100%)"
      accentColor="#1e3a8a"
      themeStyle="elegant"
    />
  );
};

export default UK;
