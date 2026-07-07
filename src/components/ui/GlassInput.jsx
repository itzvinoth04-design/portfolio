const GlassInput = ({
  label,
  type = 'text',
  name,
  required = false,
  textarea = false,
  className = '',
  ...props
}) => {
  const sharedClasses =
    'peer w-full bg-[rgba(15,23,42,0.4)] border border-[rgba(148,163,184,0.1)] rounded-xl px-4 py-3 text-white placeholder-transparent focus:border-[#22D3EE] focus:outline-none transition-colors';

  const labelClasses =
    'absolute left-4 top-3 text-[#94A3B8] text-sm transition-all duration-200 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#64748B] peer-focus:top-[-0.625rem] peer-focus:text-xs peer-focus:text-[#22D3EE] peer-focus:bg-[#0F172A] peer-focus:px-1 peer-[:not(:placeholder-shown)]:top-[-0.625rem] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#22D3EE] peer-[:not(:placeholder-shown)]:bg-[#0F172A] peer-[:not(:placeholder-shown)]:px-1';

  return (
    <div className={`relative ${className}`}>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          placeholder={label}
          rows={5}
          className={`${sharedClasses} resize-none`}
          {...props}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          placeholder={label}
          className={sharedClasses}
          {...props}
        />
      )}

      {label && <label className={labelClasses}>{label}</label>}
    </div>
  );
};

export default GlassInput;
