import React from 'react';
import { Shield, FileText, Activity } from 'lucide-react';

interface LegalProps {
  type: 'privacy' | 'terms' | 'safety';
}

const Legal: React.FC<LegalProps> = ({ type }) => {
  const content = {
    privacy: {
      title: "PRIVACY PROTOCOL",
      icon: <Shield className="w-12 h-12 text-[#FF5F00]" />,
      sections: [
        {
          head: "DATA COLLECTION",
          body: "We do not collect player biometric data without explicit consent. Any data captured during official Arena matches is used solely for bounce-tracking and score validation."
        },
        {
          head: "COMMUNICATION",
          body: "Your email signal is used strictly for technical updates and league registrations. We do not transmit your identifier to third-party data brokers."
        },
        {
          head: "ENCRYPTION",
          body: "All transmission between the Arena Interface and HQ is secured via 256-bit kinetic encryption standards."
        }
      ]
    },
    terms: {
      title: "TERMS OF PLAY",
      icon: <FileText className="w-12 h-12 text-[#FF5F00]" />,
      sections: [
        {
          head: "PLAYER CONDUCT",
          body: "The arena is a high-impact environment. Players must respect the 'No-Hands' rule and the safety of their opponent at all times."
        },
        {
          head: "EQUIPMENT USE",
          body: "Only Victory Ball certified paddles and high-visibility kinetic balls are permitted in official matches."
        },
        {
          head: "LIABILITY",
          body: "By entering the glass arena, players acknowledge the risk of high-speed ball impact and potential kinetic resets."
        }
      ]
    },
    safety: {
      title: "SAFETY SPECS",
      icon: <Activity className="w-12 h-12 text-[#FF5F00]" />,
      sections: [
        {
          head: "GLASS INTEGRITY",
          body: "All VBALL Arenas must use 12mm tempered safety glass capable of withstanding impacts up to 150km/h."
        },
        {
          head: "PLAYER GEAR",
          body: "Eye protection is highly recommended for pro-circuit matches. Non-slip athletic footwear is mandatory."
        },
        {
          head: "IMPACT ZONES",
          body: "The underside of the table is a 'Danger Zone'. Ensure limbs are clear of the table edge during Underside Sniper attempts."
        }
      ]
    }
  };

  const active = content[type];

  return (
    <div className="pt-32 pb-24 px-4 max-w-4xl mx-auto">
      <div className="flex items-center gap-6 mb-12">
        {active.icon}
        <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase">{active.title}</h1>
      </div>
      
      <div className="space-y-12">
        {active.sections.map((s, i) => (
          <div key={i} className="border-l-2 border-[#FF5F00] pl-8 py-2">
            <h2 className="text-xl font-bold mb-4 tracking-widest text-white uppercase">{s.head}</h2>
            <p className="text-gray-400 leading-relaxed text-lg">{s.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legal;
