import CountryTemplate from '../components/CountryTemplate';

const Japan = () => {
  return (
    <CountryTemplate
      country="Japan"
      flag="🇯🇵"
      currency="¥"
      startingPrice="¥19,800"
      phone="0120-PLANADESK"
      email="japan@planadesk.com"
      heroGradient="linear-gradient(135deg, #dc2626 0%, #ffffff 50%, #dc2626 100%)"
      accentColor="#dc2626"
      themeStyle="minimalist"
    />
  );
};

export default Japan;
