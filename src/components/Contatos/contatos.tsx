interface ContatosProps {
  icon: React.ReactNode,
  title: string
  subtitle: string
}
const ContatosCpn = ({ icon, title, subtitle }: ContatosProps) => {
  return (
    <div className="flex gap-5 items-center">
      {icon}
      <div className="flex flex-col">
        <p className="font-bold text-lg">{title}</p>
        <span className="text-muted-foreground text-[16px]">{subtitle}</span>
      </div>
    </div>
  );
};

export default ContatosCpn;
