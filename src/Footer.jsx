const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;
  console.log(isOpen);

  return (
    <footer className="flex justify-center items-center">
      {new Date().toLocaleTimeString()}. We're currently open!
    </footer>
  );
};

export default Footer;
