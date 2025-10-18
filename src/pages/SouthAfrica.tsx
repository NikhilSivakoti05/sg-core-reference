import CountryTemplate from '../components/CountryTemplate';

const SouthAfrica = () => {
  return (
    <CountryTemplate
      country="South Africa"
      flag="🇿🇦"
      currency="R"
      startingPrice="R2,899"
      phone="0800-PLANADESK"
      email="southafrica@planadesk.com"
      heroGradient="linear-gradient(135deg, #16a34a 0%, #fbbf24 50%, #dc2626 100%)"
      accentColor="#16a34a"
      themeStyle="dynamic"
    />
  );
};

export default SouthAfrica;
