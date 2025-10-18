import CountryTemplate from '../components/CountryTemplate';

const Australia = () => {
  return (
    <CountryTemplate
      country="Australia"
      flag="🇦🇺"
      currency="A$"
      startingPrice="A$249"
      phone="1800-PLANADESK"
      email="australia@planadesk.com"
      heroGradient="linear-gradient(135deg, #1e40af 0%, #dc2626 50%, #ffffff 100%)"
      accentColor="#1e40af"
      themeStyle="adventurous"
    />
  );
};

export default Australia;
