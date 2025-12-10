export function StaticGeometricShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[1]">
      {/* Large hexagon */}
      <div
        className="absolute border-2 border-primary/30"
        style={{
          left: '85%',
          top: '5%',
          width: 320,
          height: 320,
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
        }}
      />

      {/* Diamonds */}
      <div
        className="absolute border-2 border-primary/40 rotate-45"
        style={{ left: '8%', top: '25%', width: 100, height: 100 }}
      />
      <div
        className="absolute border-2 border-primary/25 rotate-45"
        style={{ left: '12%', top: '30%', width: 50, height: 50 }}
      />

      {/* Circles */}
      <div
        className="absolute rounded-full border-2 border-primary/35"
        style={{ left: '5%', top: '60%', width: 80, height: 80 }}
      />
      <div
        className="absolute rounded-full border-2 border-primary/30"
        style={{ left: '90%', top: '45%', width: 60, height: 60 }}
      />
      <div
        className="absolute rounded-full border-2 border-primary/25"
        style={{ left: '75%', top: '70%', width: 40, height: 40 }}
      />

      {/* Squares */}
      <div
        className="absolute border-2 border-primary/35"
        style={{ left: '80%', top: '35%', width: 35, height: 35 }}
      />
      <div
        className="absolute bg-primary/25"
        style={{ left: '85%', top: '40%', width: 20, height: 20 }}
      />
      <div
        className="absolute border-2 border-primary/30"
        style={{ left: '15%', top: '75%', width: 45, height: 45, transform: 'rotate(15deg)' }}
      />

      {/* Corner brackets */}
      <div
        className="absolute border-t-2 border-r-2 border-primary/35"
        style={{ left: '70%', top: '10%', width: 70, height: 70 }}
      />
      <div
        className="absolute border-b-2 border-l-2 border-primary/35"
        style={{ left: '20%', top: '85%', width: 60, height: 60 }}
      />

      {/* Plus signs */}
      <div className="absolute" style={{ left: '65%', top: '30%' }}>
        <div className="absolute bg-primary/40" style={{ width: 30, height: 2, top: '50%', transform: 'translateY(-50%)' }} />
        <div className="absolute bg-primary/40" style={{ width: 2, height: 30, left: '50%', transform: 'translateX(-50%)' }} />
      </div>
      <div className="absolute" style={{ left: '25%', top: '50%' }}>
        <div className="absolute bg-primary/35" style={{ width: 25, height: 2, top: '50%', transform: 'translateY(-50%)' }} />
        <div className="absolute bg-primary/35" style={{ width: 2, height: 25, left: '50%', transform: 'translateX(-50%)' }} />
      </div>

      {/* Triangles */}
      <div
        className="absolute"
        style={{
          left: '30%',
          top: '15%',
          width: 0,
          height: 0,
          borderLeft: '25px solid transparent',
          borderRight: '25px solid transparent',
          borderBottom: '50px solid hsl(48 100% 50% / 0.25)',
        }}
      />
      <div
        className="absolute"
        style={{
          left: '60%',
          top: '80%',
          width: 0,
          height: 0,
          borderLeft: '17px solid transparent',
          borderRight: '17px solid transparent',
          borderBottom: '35px solid hsl(48 100% 50% / 0.20)',
        }}
      />

      {/* Dotted circles - SVG */}
      <svg 
        className="absolute w-52 h-52"
        viewBox="0 0 100 100"
        style={{ left: '70%', top: '55%' }}
      >
        <circle 
          cx="50" cy="50" r="45" 
          fill="none" 
          stroke="hsl(48 100% 50% / 0.25)" 
          strokeWidth="1.5" 
          strokeDasharray="5 5"
        />
      </svg>

      <svg 
        className="absolute w-24 h-24"
        viewBox="0 0 100 100"
        style={{ left: '15%', top: '40%' }}
      >
        <circle 
          cx="50" cy="50" r="45" 
          fill="none" 
          stroke="hsl(48 100% 50% / 0.20)" 
          strokeWidth="2" 
          strokeDasharray="3 6"
        />
      </svg>

      {/* Static lines */}
      <div 
        className="absolute top-[18%] left-0 h-[2px] bg-gradient-to-r from-primary/40 to-transparent"
        style={{ width: 180 }}
      />
      <div 
        className="absolute bottom-[22%] right-0 h-[2px] bg-gradient-to-l from-primary/40 to-transparent"
        style={{ width: 200 }}
      />
      <div 
        className="absolute top-[65%] left-[40%] w-[2px] bg-gradient-to-b from-primary/30 to-transparent"
        style={{ height: 100 }}
      />

      {/* Static particles */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute rounded-full bg-primary/40"
          style={{
            left: `${10 + i * 10}%`,
            top: `${15 + (i % 4) * 20}%`,
            width: 3 + (i % 3) * 2,
            height: 3 + (i % 3) * 2,
          }}
        />
      ))}
    </div>
  );
}
