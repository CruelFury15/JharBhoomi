import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import MaoImage from '../images/Mao.png';

const DancerCouple = ({ delay, initialX, initialY, scale, index }) => {
  return (
    <div
      className="absolute animate-bounce"
      style={{
        left: initialX,
        top: initialY,
        transform: `scale(${scale})`,
        animationDelay: `${delay}s`,
        animationDuration: '4s',
      }}
    >
      <div className="flex gap-4 items-end">
        <svg width="80" height="100" viewBox="0 0 80 100" className="drop-shadow-lg">
          <g 
            className="origin-center"
            style={{
              animation: `sway 2s ease-in-out infinite`,
              animationDelay: `${index * 0.3}s`
            }}
          >
            <path d="M40 35 L30 50 L25 80 L30 95 L50 95 L55 80 L50 50 Z" fill="#f59e0b" stroke="#d97706" strokeWidth="1"/>
            <path d="M40 35 L50 50 L52 75 L50 90" fill="none" stroke="#fbbf24" strokeWidth="1.5" opacity="0.6"/>
            
            <path
              d="M35 40 Q25 45 20 55 L15 75"
              fill="none"
              stroke="#22c55e"
              strokeWidth="3"
              style={{
                animation: `wave 1.5s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`
              }}
            />
            
            <circle cx="40" cy="25" r="8" fill="#d4a574" stroke="#8b5a3c" strokeWidth="0.5"/>
            
            <circle cx="40" cy="20" r="5" fill="#1f2937"/>
            <circle cx="40" cy="20" r="3" fill="#fbbf24" opacity="0.8"/>
            
            <path
              d="M35 40 Q25 50 22 65"
              fill="none"
              stroke="#d4a574"
              strokeWidth="3"
              style={{
                animation: `armMove 1.5s ease-in-out infinite`,
                animationDelay: `${index * 0.3}s`
              }}
            />
            <path
              d="M45 40 Q55 50 58 65"
              fill="none"
              stroke="#d4a574"
              strokeWidth="3"
              style={{
                animation: `armMove 1.5s ease-in-out infinite`,
                animationDelay: `${index * 0.3 + 0.2}s`
              }}
            />
            
            <circle cx="40" cy="32" r="1.5" fill="#fbbf24"/>
          </g>
        </svg>

        <svg width="80" height="100" viewBox="0 0 80 100" className="drop-shadow-lg">
          <g 
            className="origin-center"
            style={{
              animation: `sway 2s ease-in-out infinite`,
              animationDelay: `${index * 0.3 + 0.15}s`
            }}
          >
            <path d="M40 35 L35 50 L32 95 L48 95 L45 50 Z" fill="#16a34a" stroke="#15803d" strokeWidth="1"/>
            <path d="M35 35 L45 35 L45 55 L35 55 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="1"/>
            
            <circle cx="40" cy="25" r="8" fill="#d4a574" stroke="#8b5a3c" strokeWidth="0.5"/>
            
            <ellipse cx="40" cy="20" rx="9" ry="6" fill="#dc2626"/>
            <ellipse cx="40" cy="18" rx="7" ry="4" fill="#f97316" opacity="0.6"/>
            
            <path
              d="M35 40 Q28 55 25 70"
              fill="none"
              stroke="#d4a574"
              strokeWidth="3"
              style={{
                animation: `armMove 1.5s ease-in-out infinite`,
                animationDelay: `${index * 0.3}s`
              }}
            />
            <path
              d="M45 40 Q52 55 55 70"
              fill="none"
              stroke="#d4a574"
              strokeWidth="3"
              style={{
                animation: `armMove 1.5s ease-in-out infinite`,
                animationDelay: `${index * 0.3 + 0.2}s`
              }}
            />
            
            <rect
              x="52" y="68" width="12" height="8" rx="2"
              fill="#8b4513" stroke="#654321" strokeWidth="0.5"
              style={{
                animation: `drumBeat 1.5s ease-in-out infinite`,
                animationDelay: `${index * 0.3}s`
              }}
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

DancerCouple.propTypes = {
  delay: PropTypes.number.isRequired,
  initialX: PropTypes.string.isRequired,
  initialY: PropTypes.string.isRequired,
  scale: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired
};

const JharkhandSignIn = ({ onLogin }) => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isSignUp) {
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        setError('Please fill in all fields');
        return;
      }
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return;
      }
    } else {
      if (!formData.email || !formData.password) {
        setError('Please fill in all fields');
        return;
      }
    }

    const userData = {
      name: isSignUp ? formData.name : formData.email.split('@')[0],
      email: formData.email
    };

    onLogin(userData);
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-yellow-900 via-yellow-800 to-red-900 flex items-center justify-center p-2 sm:p-4 relative overflow-hidden">
      
      <div className="absolute inset-0">
        <div
          className="absolute w-full h-full"
          style={{
            backgroundImage: `url(${MaoImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2
          }}
        />
      </div>

      <style>{`
        @keyframes sway {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(2deg); }
          75% { transform: rotate(-2deg); }
        }
        @keyframes wave {
          0%, 100% { d: path("M35 40 Q25 45 20 55 L15 75"); }
          50% { d: path("M35 40 Q22 48 18 58 L12 78"); }
        }
        @keyframes armMove {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes drumBeat {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-5deg); }
        }
      `}</style>

      <div className="relative z-10 w-full max-w-5xl min-h-[500px] sm:h-[600px] md:h-[700px] flex flex-col sm:flex-row rounded-2xl sm:rounded-4xl overflow-hidden backdrop-blur-md border border-white/10 shadow-2xl bg-black/10">
        
        <div className="hidden sm:block w-1/2 relative overflow-hidden bg-linear-to-br from-yellow-500/20 via-green-500/20 to-red-500/20">
          <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-orange-500/30 blur-[100px] rounded-full" />
          <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-green-500/30 blur-[100px] rounded-full" />
          <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-yellow-400/20 blur-[80px] rounded-full" />
          
          <DancerCouple delay={0} initialX="15%" initialY="20%" scale={1.2} index={0} />
          <DancerCouple delay={2} initialX="65%" initialY="15%" scale={0.9} index={1} />
          <DancerCouple delay={4} initialX="35%" initialY="45%" scale={1.1} index={2} />
          <DancerCouple delay={1} initialX="60%" initialY="65%" scale={1} index={3} />
          <DancerCouple delay={3} initialX="20%" initialY="70%" scale={0.85} index={4} />
          
          <div className="absolute bottom-8 left-0 right-0 opacity-40">
            <svg width="100%" height="40">
              <defs>
                <pattern id="tribals" x="0" y="0" width="80" height="40" patternUnits="userSpaceOnUse">
                  <path d="M10 20 L20 10 L30 20 L40 10 L50 20 L60 10 L70 20" stroke="#fbbf24" strokeWidth="2" fill="none"/>
                  <circle cx="20" cy="30" r="2" fill="#22c55e"/>
                  <circle cx="50" cy="30" r="2" fill="#f97316"/>
                </pattern>
              </defs>
              <rect width="100%" height="40" fill="url(#tribals)"/>
            </svg>
          </div>
          
          <div className="absolute bottom-10 left-10 right-10 text-white z-20">
            <div className="w-12 h-1 bg-yellow-400 mb-4 rounded-full" />
            <h1 className="text-4xl font-bold mb-3 drop-shadow-lg tracking-tight">
              JharBhoomi
            </h1>
            <p className="text-white/90 text-sm font-medium drop-shadow-md leading-relaxed max-w-xs">
              Experience the rich culture and natural beauty of the region. Join us and be part of the tradition.
            </p>
          </div>
        </div>
        
        <div className="w-full sm:w-1/2 bg-black/10 backdrop-blur-md border-l-0 sm:border-l border-white/10">
          <div className="flex flex-col h-full p-4 sm:p-8 md:p-12 justify-center">
            
            <div className="flex gap-1 mb-6 sm:mb-8 bg-white/5 p-1 rounded-xl">
              <button
                onClick={() => setIsSignUp(false)}
                className={`flex-1 py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-semibold transition-all ${
                  !isSignUp
                    ? 'bg-yellow-600 text-white shadow-lg'
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setIsSignUp(true)}
                className={`flex-1 py-2 sm:py-3 px-4 sm:px-6 rounded-lg text-sm sm:text-base font-semibold transition-all ${
                  isSignUp
                    ? 'bg-yellow-600 text-white shadow-lg'
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                Sign Up
              </button>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-white text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {isSignUp && (
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent transition-all"
                    placeholder="Enter your name"
                    required={isSignUp}
                  />
                </div>
              )}

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent transition-all"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {isSignUp && (
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-transparent transition-all"
                    placeholder="Confirm your password"
                    required={isSignUp}
                  />
                </div>
              )}

              {!isSignUp && (
                <div className="flex justify-end">
                  <a href="#" className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors">
                    Forgot password?
                  </a>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-2.5 sm:py-3 px-4 sm:px-6 bg-yellow-600 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-red-500 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSignUp ? 'Create Account' : 'Login'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

JharkhandSignIn.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default JharkhandSignIn;
