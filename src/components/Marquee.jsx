export default function Marquee() {
  const renderTextContent = () => (
    <span 
      style={{ paddingRight: '160px' }} 
      className="inline-flex items-center text-[14px] font-mono tracking-widest uppercase select-none text-white"
    >
      
      <strong className="font-black text-white shrink-0">
        ACGN Club at UW
      </strong>
      
      <span style={{ padding: '0 20px' }} className="text-white/30 font-light shrink-0"> </span>
      
      <span className="inline-flex items-center shrink-0">
   
        <span style={{ marginRight: '10px' }} className="font-black text-white tracking-normal select-none">
          ──
        </span>
        
        <strong 
          style={{ fontStyle: 'italic' }} 
          className="font-bold text-white italic"
        >
          SEATTLE ARKNIGHTS ONLY
        </strong>
        
        <span style={{ marginLeft: '12px' }} className="font-black text-white tracking-normal select-none">
          ──
        </span>

      </span>
      
      <span style={{ padding: '0 20px' }} className="text-white/30 font-light shrink-0"> </span>
      
      <span className="font-bold text-white shrink-0">
        Coming Jan.2027
      </span>

    </span>
  )

  return (
    <div 
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
        height: '42px',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        width: '100%',
        position: 'relative',
        zIndex: 9999,
        boxSizing: 'border-box',
        borderTop: '2px solid #000000',
        borderBottom: '2px solid #000000'
      }}
      className="select-none"
    >
      <div className="flex whitespace-nowrap animate-marquee">
        {renderTextContent()}
        {renderTextContent()}
        {renderTextContent()}
        {renderTextContent()}
        {renderTextContent()}
      </div>
    </div>
  )
}