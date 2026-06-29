'use client';

import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import ReactCountryFlag from 'react-country-flag';

interface Country {
  code: string;
  name: string;
  dial: string;
}

const COUNTRIES: Country[] = [
  { code: 'US', name: 'United States',        dial: '+1'   },
  { code: 'GB', name: 'United Kingdom',        dial: '+44'  },
  { code: 'PK', name: 'Pakistan',              dial: '+92'  },
  { code: 'CA', name: 'Canada',                dial: '+1'   },
  { code: 'AU', name: 'Australia',             dial: '+61'  },
  { code: 'AE', name: 'United Arab Emirates',  dial: '+971' },
  { code: 'SA', name: 'Saudi Arabia',          dial: '+966' },
  { code: 'IN', name: 'India',                 dial: '+91'  },
  { code: 'DE', name: 'Germany',               dial: '+49'  },
  { code: 'FR', name: 'France',                dial: '+33'  },
  { code: 'IT', name: 'Italy',                 dial: '+39'  },
  { code: 'ES', name: 'Spain',                 dial: '+34'  },
  { code: 'NL', name: 'Netherlands',           dial: '+31'  },
  { code: 'CH', name: 'Switzerland',           dial: '+41'  },
  { code: 'SE', name: 'Sweden',                dial: '+46'  },
  { code: 'NO', name: 'Norway',                dial: '+47'  },
  { code: 'DK', name: 'Denmark',               dial: '+45'  },
  { code: 'FI', name: 'Finland',               dial: '+358' },
  { code: 'AT', name: 'Austria',               dial: '+43'  },
  { code: 'BE', name: 'Belgium',               dial: '+32'  },
  { code: 'PT', name: 'Portugal',              dial: '+351' },
  { code: 'GR', name: 'Greece',                dial: '+30'  },
  { code: 'IE', name: 'Ireland',               dial: '+353' },
  { code: 'PL', name: 'Poland',                dial: '+48'  },
  { code: 'RU', name: 'Russia',                dial: '+7'   },
  { code: 'TR', name: 'Turkey',                dial: '+90'  },
  { code: 'IL', name: 'Israel',                dial: '+972' },
  { code: 'QA', name: 'Qatar',                 dial: '+974' },
  { code: 'KW', name: 'Kuwait',                dial: '+965' },
  { code: 'BH', name: 'Bahrain',               dial: '+973' },
  { code: 'OM', name: 'Oman',                  dial: '+968' },
  { code: 'JO', name: 'Jordan',                dial: '+962' },
  { code: 'LB', name: 'Lebanon',               dial: '+961' },
  { code: 'EG', name: 'Egypt',                 dial: '+20'  },
  { code: 'NG', name: 'Nigeria',               dial: '+234' },
  { code: 'ZA', name: 'South Africa',          dial: '+27'  },
  { code: 'KE', name: 'Kenya',                 dial: '+254' },
  { code: 'GH', name: 'Ghana',                 dial: '+233' },
  { code: 'SG', name: 'Singapore',             dial: '+65'  },
  { code: 'MY', name: 'Malaysia',              dial: '+60'  },
  { code: 'ID', name: 'Indonesia',             dial: '+62'  },
  { code: 'PH', name: 'Philippines',           dial: '+63'  },
  { code: 'BD', name: 'Bangladesh',            dial: '+880' },
  { code: 'LK', name: 'Sri Lanka',             dial: '+94'  },
  { code: 'NP', name: 'Nepal',                 dial: '+977' },
  { code: 'CN', name: 'China',                 dial: '+86'  },
  { code: 'JP', name: 'Japan',                 dial: '+81'  },
  { code: 'KR', name: 'South Korea',           dial: '+82'  },
  { code: 'BR', name: 'Brazil',                dial: '+55'  },
  { code: 'MX', name: 'Mexico',                dial: '+52'  },
  { code: 'AR', name: 'Argentina',             dial: '+54'  },
  { code: 'CO', name: 'Colombia',              dial: '+57'  },
  { code: 'CL', name: 'Chile',                 dial: '+56'  },
  { code: 'NZ', name: 'New Zealand',           dial: '+64'  },
];

const Flag = ({ code }: { code: string }) => (
  <ReactCountryFlag
    countryCode={code}
    svg
    style={{ width: '1.4em', height: '1.4em', borderRadius: '2px', objectFit: 'cover' }}
  />
);

interface PhoneInputProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  hasError?: boolean;
}

export default function PhoneInput({
  value = '',
  onChange,
  placeholder = 'Phone number',
  hasError = false,
}: PhoneInputProps) {
  const [selected, setSelected] = useState<Country>(COUNTRIES[0]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [localNumber, setLocalNumber] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Reset local number when form resets (value becomes '')
  useEffect(() => {
    if (!value) setLocalNumber('');
  }, [value]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Focus search when dropdown opens
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => searchRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [open]);

  const filtered = search.trim()
    ? COUNTRIES.filter(
        (c) =>
          c.name.toLowerCase().includes(search.toLowerCase()) ||
          c.dial.includes(search)
      )
    : COUNTRIES;

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const num = e.target.value.replace(/[^\d\s\-().]/g, '');
    setLocalNumber(num);
    onChange?.(num ? `${selected.dial} ${num}` : '');
  };

  const handleSelect = (country: Country) => {
    setSelected(country);
    setOpen(false);
    setSearch('');
    onChange?.(localNumber ? `${country.dial} ${localNumber}` : '');
  };

  return (
    <div ref={wrapperRef} className="relative">
      {/* Input row */}
      <div
        className={`flex rounded-[10px] border transition-colors duration-200 focus-within:border-brand-orange/50 ${
          hasError ? 'border-red-500/40' : 'border-white/12'
        }`}
      >
        {/* Country selector button */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex items-center gap-1.5 px-3 py-3 bg-white/5 border-r border-white/10 rounded-l-[10px] hover:bg-white/8 focus:outline-none transition-colors duration-200 shrink-0 select-none"
          aria-label="Select country code"
        >
          <Flag code={selected.code} />
          <span className="font-bricolage text-xs font-medium text-white/65 min-w-[30px]">
            {selected.dial}
          </span>
          <ChevronDown
            size={11}
            className={`text-white/35 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          />
        </button>

        {/* Number input */}
        <input
          type="tel"
          value={localNumber}
          onChange={handleNumberChange}
          placeholder={placeholder}
          className="flex-1 bg-transparent rounded-r-[10px] px-4 py-3 text-brand-cream placeholder:text-white/30 font-bricolage text-sm focus:outline-none"
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute left-0 top-full mt-2 w-72 z-[60] rounded-2xl border border-white/10 overflow-hidden"
          style={{
            background: 'linear-gradient(160deg, #1c1c1c 0%, #141414 100%)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.04)',
          }}
        >
          {/* Search */}
          <div className="p-2.5 border-b border-white/8">
            <div className="flex items-center gap-2 bg-white/5 rounded-xl px-3 py-2 border border-white/8">
              <Search size={13} className="text-white/35 shrink-0" />
              <input
                ref={searchRef}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country or code…"
                className="flex-1 bg-transparent text-brand-cream placeholder:text-white/30 font-bricolage text-xs focus:outline-none"
              />
            </div>
          </div>

          {/* List */}
          <ul className="max-h-56 overflow-y-auto scrollbar-hide py-1">
            {filtered.length > 0 ? (
              filtered.map((country) => (
                <li key={country.code}>
                  <button
                    type="button"
                    onClick={() => handleSelect(country)}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-white/6 transition-colors duration-150 text-left ${
                      selected.code === country.code
                        ? 'bg-brand-orange/10 border-l-2 border-brand-orange'
                        : 'border-l-2 border-transparent'
                    }`}
                  >
                    <Flag code={country.code} />
                    <span className="flex-1 font-bricolage text-xs text-brand-cream/80 truncate">
                      {country.name}
                    </span>
                    <span className="font-bricolage text-xs text-white/40 shrink-0 font-medium">
                      {country.dial}
                    </span>
                  </button>
                </li>
              ))
            ) : (
              <li className="px-4 py-4 font-bricolage text-xs text-white/35 text-center">
                No results for &ldquo;{search}&rdquo;
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
