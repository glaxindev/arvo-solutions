export function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0c0c0e]">
      
      {/* Subtle ambient glow — very slow, no scroll-linked motion */}
      <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-accent/[0.04] blur-[150px] animate-pulse" style={{ animationDuration: '10s' }} />
      <div className="absolute bottom-[-30%] right-[-15%] w-[80vw] h-[80vw] rounded-full bg-[#0d1b2a]/30 blur-[180px] animate-pulse" style={{ animationDuration: '14s' }} />

      {/* High-Fidelity Noise Texture */}
      <div 
        className="absolute inset-0 z-20 opacity-[0.04] mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }} 
      />
      
      {/* Radial Vignette */}
      <div className="absolute inset-0 z-30 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0c0c0e_100%)] opacity-70 pointer-events-none" />
    </div>
  );
}
