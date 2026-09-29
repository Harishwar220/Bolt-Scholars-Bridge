import { GraduationCap } from 'lucide-react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: { icon: 28, text: 'text-lg' },
    md: { icon: 36, text: 'text-xl' },
    lg: { icon: 48, text: 'text-2xl' },
  };
  const s = sizes[size];

  return (
    <div className="flex items-center gap-2.5">
      <div
        className="relative flex items-center justify-center rounded-xl shadow-lg shadow-blue-500/20"
        style={{
          width: s.icon,
          height: s.icon,
          background: 'linear-gradient(135deg, rgb(37 99 235), rgb(5 150 105))',
        }}
      >
        <GraduationCap className="text-white" style={{ width: s.icon * 0.6, height: s.icon * 0.6 }} />
      </div>
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-extrabold ${s.text} text-heading`}>
            Scholars<span className="text-primary">Bridge</span>
          </span>
          <span className="text-[10px] font-medium text-muted tracking-wide">
            UNIFIED SCHOLARSHIP PLATFORM
          </span>
        </div>
      )}
    </div>
  );
}
