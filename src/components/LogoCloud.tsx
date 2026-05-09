// Inline SVG logos for the trusted brands marquee.
// Using real-world recognisable tech/SaaS brands with clean SVG marks.

const logos = [
  {
    name: 'Notion',
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <path d="M6.6 7.2c2 1.6 2.7 1.5 6.3 1.3l34.4-2c.7 0 .1-.7-.2-.8L40 2.5c-.8-.6-1.9-1.3-4-1.1L2.7 3.9C1.6 4 1.4 4.6 1.8 5l4.8 2.2z" fill="#111"/>
        <path d="M8 14.7V81c0 3.4 1.7 4.7 5.6 4.4l38.8-2.2c3.9-.2 4.9-2.3 4.9-5V13c0-3.4-1.3-5.2-4.4-4.9L12.4 10.3c-3.4.3-4.4 2-4.4 4.4z" fill="#fff"/>
        <path d="M42 15.6l-21 1.2c-.6 0-.8.4-.8 1V56c0 .6.3.9.8.9.6 0 1.2-.6 1.8-1.2l5-5.6 5.3 7c.6.8 1.3.6 1.7.2l2.3-2.3c.4-.4.4-1 0-1.6l-5-6.8L42 38c.5-.6.8-1.2.8-1.8V16.5c0-.6-.3-1-.8-.9z" fill="#111"/>
      </svg>
    ),
  },
  {
    name: 'Figma',
    svg: (
      <svg viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <path d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" fill="#1ABCFE"/>
        <path d="M0 47.5A9.5 9.5 0 0 1 9.5 38H19v9.5a9.5 9.5 0 0 1-19 0z" fill="#0ACF83"/>
        <path d="M19 0v19h9.5a9.5 9.5 0 0 0 0-19H19z" fill="#FF7262"/>
        <path d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z" fill="#F24E1E"/>
        <path d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z" fill="#A259FF"/>
      </svg>
    ),
  },
  {
    name: 'Shopify',
    svg: (
      <svg viewBox="0 0 109 124" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
        <path d="M74.7 14.8s-.3 0-.9.1c-.4-1.2-1-2.6-1.8-4a14.6 14.6 0 0 0-7.3-6.6c-.1 0-4.4 1.4-8.5 14.3l-18.6 5.8-3.1 1-1 .3S31.2 54 31.2 100l58.7 10.2 19.1-5.9L74.7 14.8z" fill="#95BF47"/>
        <path d="M74.7 14.8s-.3 0-.9.1c-.4-1.2-1-2.6-1.8-4a14.6 14.6 0 0 0-7.3-6.6l-27.8 97.3 52 9 19.1-5.9L74.7 14.8z" fill="#5E8E3E"/>
        <path d="M56.5 15.7c-.8-2.4-2.1-4.4-3.7-5.9L37.3 27.4l-4.6 1.4 2.6-2.1 21.2-11z" fill="#fff"/>
        <text x="20" y="118" font-family="Outfit,sans-serif" font-size="22" font-weight="700" fill="#5E8E3E">Shopify</text>
      </svg>
    ),
  },
  {
    name: 'Stripe',
    svg: (
      <svg viewBox="0 0 60 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
        <path
          d="M6 9.5c0-1 .8-1.3 2.2-1.3 2 0 4.5.6 6.5 1.6V4C12.7 3.3 10.7 3 8.6 3 3.5 3 0 5.6 0 9.8c0 6.5 9 5.5 9 8.3 0 1.2-1 1.5-2.5 1.5C4.5 19.6 2 18.8 0 17.6V23c2 1 4 1.4 6.5 1.4C12 24.4 16 21.9 16 17.6 16 10.5 6 11.8 6 9.5zM22 1l-6.3 1.3-.1 16.2L22 20V1zM28 6.5H22V12h6v12h6V12h6V6.5H34V4.3c0-1.4.3-2 1.8-2H40V-1h-6.5C28.6-1 28 2 28 5.6V6.5zM55 6.3c-2 0-3.5.9-4.4 2.4L50 6.5h-6V30h6V13.8c.6-1.4 1.7-2 3-2 .7 0 1.3.1 1.9.3V6.4c-.3-.1-.5-.1-.9-.1z"
          fill="#6772E5"
        />
        <text x="0" y="23" font-family="Outfit,sans-serif" font-size="16" font-weight="700" fill="#6772E5">stripe</text>
      </svg>
    ),
  },
  {
    name: 'HubSpot',
    svg: (
      <svg viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="0" y="38" font-family="Outfit,sans-serif" font-size="34" font-weight="800" fill="#FF7A59">HubSpot</text>
      </svg>
    ),
  },
  {
    name: 'Webflow',
    svg: (
      <svg viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="0" y="38" font-family="Outfit,sans-serif" font-size="34" font-weight="800" fill="#4353FF">Webflow</text>
      </svg>
    ),
  },
  {
    name: 'Linear',
    svg: (
      <svg viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-7 w-auto">
        <text x="0" y="38" font-family="Outfit,sans-serif" font-size="34" font-weight="800" fill="#5E6AD2">Linear</text>
      </svg>
    ),
  },
  {
    name: 'Vercel',
    svg: (
      <svg viewBox="0 0 284 65" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-auto">
        <path d="M141.68 16.25c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-18-19-18zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm117.14-14.5c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-18-19-18zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zm-39.03 3.5c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5.25h9zM37.59.25l36.95 64H.64L37.59.25z" fill="#111"/>
      </svg>
    ),
  },
];

export function LogoCloud() {
  // Duplicate for seamless infinite loop
  const all = [...logos, ...logos];

  return (
    <section className="py-14 border-b border-black/[0.06] overflow-hidden">
      <p className="text-center font-mono text-[10px] tracking-[0.4em] uppercase text-text-muted mb-10 px-6">
        Trusted by forward-thinking brands
      </p>

      {/* Marquee track */}
      <div className="relative w-full overflow-hidden">
        {/* Left + right fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

        <div
          className="flex items-center gap-16 w-max"
          style={{ animation: 'logoMarquee 28s linear infinite' }}
        >
          {all.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center opacity-30 hover:opacity-70 transition-opacity duration-500 cursor-default grayscale hover:grayscale-0"
              title={logo.name}
            >
              {logo.svg}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes logoMarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
