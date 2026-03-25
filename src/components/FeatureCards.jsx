import React from 'react';

const FeatureCards = () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-12 perspective-container">
        {/* Card 1: Chronicle Archives */}
        <div className="md:col-span-7 group relative">
          <div className="glass-card rounded-xl p-1 w-full transition-transform duration-700 ease-out group-hover:scale-[1.02] group-hover:shadow-[0_0_60px_rgba(218,185,255,0.15)] overflow-hidden">
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden mb-8">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM0rdFUEfLS2nP6SBJA14te7FdBsidwVrJF3n1_ynUmc3F1mbLkg9sYnfZK465Gytz18xoNFzdu0u5q3nfW8qWTv-bBpj9af2IiEjFxBKCucgyLpw0aG8-95NdaOR9ggClKTtk-jPhVEezYYZP09VQyWV_Fh_A1G2OsLtM1owqATFD10Y45_fqkN7RiQ8aY8O2Cn-zOszUEovpVTnUslKpBS3CAlu2rSp8blnt5CUatbjHPiWVLT8yTakRDcLUEA766r7xOISVDdA" alt="Ancient library floating in a purple nebula" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
            </div>
            <div className="px-8 pb-12">
              <span className="font-label text-primary-fixed-dim tracking-widest text-xs uppercase mb-3 block">Volume I</span>
              <h2 className="font-headline text-5xl text-on-surface mb-6">Chronicle Archives</h2>
              <p className="font-body text-on-surface-variant mb-10 max-w-md leading-relaxed">
                Access the repository of time. Every star holds a story; every void carries a secret. Decipher the history of the celestial realm.
              </p>
              <button className="flex items-center gap-4 group/btn">
                <span className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center transition-all duration-500 group-hover/btn:bg-primary group-hover/btn:border-primary group-hover/btn:text-on-primary">
                  <span className="material-symbols-outlined text-xl">arrow_forward</span>
                </span>
                <span className="font-label uppercase tracking-widest text-sm text-on-surface group-hover/btn:text-primary transition-colors">Open Archive</span>
              </button>
            </div>
          </div>
        </div>
        {/* Card 2: Nebula Cartography */}
        <div className="md:col-span-5 md:mt-24 group relative">
          <div className="glass-card rounded-xl p-1 transition-transform duration-700 ease-out group-hover:scale-[1.02] group-hover:shadow-[0_0_60px_rgba(70,245,224,0.15)]">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden mb-8">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcebpFE_nEhrb_3_Wz0S8P4SDvKWGXETbzN-6GGxy1q7YvSYFRak8UTv8nvNJGJWEj0IDphJJXkds8gr4hjqIU6e733RpCD0WLWo24v8gZLKDgrx80b_LDVIoiM56t5YcXwYpJLhcsN_rSO7D4Muzur1Pfkmx9U2KiJPObzQN0Y7164-AYDplflnZELYTNpeY37QvgjU-ASH5qcMqmdrbiNu83_OmJ007P6_9ToWwh1pNgZpPewcVHshQ3CzUmZcno0B7hw-djSp0" alt="Star map with intricate cyan laser lines" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
            </div>
            <div className="px-8 pb-12">
              <span className="font-label text-secondary tracking-widest text-xs uppercase mb-3 block">Navigation</span>
              <h2 className="font-headline text-4xl text-on-surface mb-6">Nebula Mapping</h2>
              <p className="font-body text-on-surface-variant mb-10 leading-relaxed text-sm">
                Traverse the shifting gas clouds of the Orion cluster. Discover hidden pathways through the dust.
              </p>
              <button className="px-8 py-3 rounded-full border border-secondary/30 text-secondary font-label uppercase text-xs tracking-[0.2em] hover:bg-secondary hover:text-on-secondary transition-all duration-500">
                Explore Detail
              </button>
            </div>
          </div>
        </div>
        {/* Card 3: The Void Paradox */}
        <div className="md:col-span-4 md:-mt-12 group relative">
          <div className="glass-card rounded-xl p-1 transition-transform duration-700 ease-out group-hover:scale-[1.02] group-hover:shadow-[0_0_60px_rgba(255,178,188,0.15)]">
            <div className="relative h-[350px] w-full rounded-xl overflow-hidden mb-8">
              <img className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvVfw6UOMEcIHtpFDbk_1SKiJ748SOGFPnz642xSF4x3_pGanlP7O1S7oKGftkFT4AuwNy-pfMP_fU-TLNqJaIFMmNQfnM0x3o3CBmIvQLDiEpacojSh4kOfj6mNVGcK4f9HblZEFXGbV_6hILkjK0CZMRjiVMxBCOvsv3kkZINV4eHyu6fd329WYGBzUxHiU2xYMQbpOg9efo-xF4ML1hZqMO0cu-jgvRUtVqEHdpgnHjMUJ5GRV9Mott0QrX5N5zRVWma0Kl_p8" alt="Black hole with a glowing pink accretion disk" />
              <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
            </div>
            <div className="px-8 pb-12">
              <span className="font-label text-tertiary tracking-widest text-xs uppercase mb-3 block">Anomaly</span>
              <h2 className="font-headline text-3xl text-on-surface mb-4">The Void Paradox</h2>
              <p className="font-body text-on-surface-variant mb-8 text-sm leading-relaxed">
                Where logic fails, the narrative begins. Study the gravitational anomalies of the Great Attractor.
              </p>
              <a className="inline-flex items-center gap-2 text-tertiary font-label text-xs uppercase tracking-widest hover:gap-4 transition-all duration-300" href="#">
                Initiate Sequence <span className="material-symbols-outlined text-sm">trending_flat</span>
              </a>
            </div>
          </div>
        </div>
        {/* Card 4: Observatory */}
        <div className="md:col-span-8 group relative md:mb-24">
          <div className="bg-surface-container-high/40 backdrop-blur-sm rounded-xl p-12 flex flex-col md:flex-row gap-12 items-center transition-all duration-700 hover:bg-surface-container-highest/60">
            <div className="w-full md:w-1/2">
              <h2 className="font-headline text-4xl text-on-surface mb-6">Celestial <span className="italic text-primary">Observatory</span></h2>
              <p className="font-body text-on-surface-variant mb-8 leading-relaxed">
                A vantage point into the infinite. Peer through the lens of the Great Architect and witness the unfolding of reality in high fidelity. Our sensors capture the whispers of the oldest galaxies.
              </p>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div>
                  <span className="block text-primary text-2xl font-body font-bold">14.8 B</span>
                  <span className="text-xs font-label uppercase tracking-widest text-outline">Light Years Range</span>
                </div>
                <div>
                  <span className="block text-secondary text-2xl font-body font-bold">0.02%</span>
                  <span className="text-xs font-label uppercase tracking-widest text-outline">Deviation Rate</span>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-square rounded-full border border-outline-variant/20 p-8 animate-[spin_60s_linear_infinite]">
                <div className="w-full h-full rounded-full border-2 border-dashed border-primary/20 p-4">
                  <img className="w-full h-full object-cover rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkmwCSXc-vNnqBgoIWaC6AExsrYhj-jqXHHa7dIQWdTgpgHoMGGPQzoQp3s14Aq52Sgu1KIp7PyVZE72H1uiqv_LdTf6WmXbftcFzubzaNeooLVA5_lP12ZHnh3hZ2bLmP_yiYunlihtiMxTym6RE7sh_rMcKnVUkiLziNZmegbc71VspJf2S8gcuFd2_lcidA_wTp2s80tluScEZ3b5Fj7PgPXOCs2_j27kdv6Vb5_i4335pArOOYC9u2BrFr0VPINYP5iHzFrZ4" alt="Telescope lens reflecting a vibrant nebula" />
                </div>
              </div>
              <div className="absolute top-0 right-0 p-4 bg-primary text-on-primary rounded-full shadow-lg">
                <span className="material-symbols-outlined">visibility</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Narrative Scroller Indicator */}
      <div className="mt-32 flex flex-col items-center">
        <div className="h-40 w-[1px] bg-gradient-to-b from-outline-variant/0 via-secondary/50 to-outline-variant/0 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-secondary shadow-[0_0_15px_rgba(70,245,224,1)]"></div>
        </div>
        <span className="mt-4 font-label text-[10px] tracking-[0.4em] uppercase text-secondary">Synchronizing Frequencies</span>
      </div>
    </>
  );
};

export default FeatureCards;
