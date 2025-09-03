interface StatItemProps {
  value: string;
  description: string;
}

const StatItem = ({ value, description }: StatItemProps) => (
  <div className="text-center">
    <h3 className="text-4xl font-bold text-white">{value}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
  </div>
);

export const Stats = () => {
  return (
    <section className="py-12 bg-black border-t border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatItem value="100%" description="Конфиденциально для клиента" />
          <StatItem value="+XXX" description="Моделей в нашем агентстве" />
          <StatItem value="+XXX" description="Довольных и постоянных клиентов" />
        </div>
      </div>
    </section>
  );
};
