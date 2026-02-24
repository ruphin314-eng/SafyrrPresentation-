export default function Stats() {
  return (
    <section className="bg-[#FFDF8F] py-10 text-center">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        <div>
          <h3 className="font-display text-2xl md:text-3xl font-extrabold text-charcoal">50K+</h3>
          <p className="text-sm font-body text-charcoal/70 mt-0.5">Clients satisfaits</p>
        </div>

        <div>
          <h3 className="font-display text-2xl md:text-3xl font-extrabold text-charcoal">99.9%</h3>
          <p className="text-sm font-body text-charcoal/70 mt-0.5">Disponibilité</p>
        </div>

        <div>
          <h3 className="font-display text-2xl md:text-3xl font-extrabold text-charcoal">24/7</h3>
          <p className="text-sm font-body text-charcoal/70 mt-0.5">Support</p>
        </div>

        <div>
          <h3 className="font-display text-2xl md:text-3xl font-extrabold text-charcoal">15+</h3>
          <p className="text-sm font-body text-charcoal/70 mt-0.5">Pays</p>
        </div>

      </div>
    </section>
  );
}