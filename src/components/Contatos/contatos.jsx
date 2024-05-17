// eslint-disable-next-line react/prop-types
const ContatosCpn = ({ icon, title, subtitle }) => {
  return (
    <div className="flex gap-5 items-center">
      {icon}

      <div className="flex flex-col">
        <p className="font-bold text-lg">{title}</p>
        <span className="text-[#000000] text-[16px]">{subtitle}</span>
      </div>
    </div>
  );
};

export default ContatosCpn;
