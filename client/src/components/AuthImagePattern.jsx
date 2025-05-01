const AuthImagePattern = ({ title, subtitle }) => {
    return (
      <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 min-h-screen">
        <div className="max-w-md text-center">
          {/* Animated 3x3 Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`
                  w-16 h-16 rounded-xl 
                  ${i % 2 === 0 ? "bg-primary animate-pulse" : "bg-primary/10 animate-bounce"}
                `}
                style={{
                  animationDelay: `${i * 0.2}s`,
                  animationDuration: "2s"
                }}
              />
            ))}
          </div>
  
          {/* Text */}
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-base-content/60">{subtitle}</p>
        </div>
      </div>
    );
  };
  
  export default AuthImagePattern;
  