import postersData from '../../postersData.json'

export default function PosterCanvas() {
  const purpleShades = [
    'bg-[#bda1ff] text-[#2c1459] border-black',
    'bg-[#c3a6ff] text-[#331867] border-black',
    'bg-[#d6beff] text-[#42207a] border-black',
    'bg-[#e0ccff] text-[#4d288a] border-black',
    'bg-[#f0eaff] text-[#5c379b] border-black'
  ]

  // 重复 6 份，保证纵向轨道足够长，完美无缝循环
  const megaPool = [
    ...postersData, ...postersData, ...postersData, 
    ...postersData, ...postersData, ...postersData
  ]

  // 数据打乱，彻底交错各列内容
  const column1 = megaPool.slice(0, 12)
  const column2 = megaPool.slice(2, 14)
  const column3 = megaPool.slice(1, 13)

  const renderCard = (poster, globalIndex) => {
    const shade = purpleShades[globalIndex % purpleShades.length]
    return (
      <div 
        // 🎯 margin: '45px 0' 死锁每张海报上下之间有 90px 的明晰真空空隙
        style={{
          width: '240px',
          height: '420px',
          margin: '45px 0',
        }}
        className="flex-none pointer-events-auto bg-white p-4 border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] 
                   transition-all duration-300 ease-out cursor-pointer"
      >
        <div className={`w-full h-full ${shade} border border-dashed flex flex-col justify-between p-3.5 relative overflow-hidden`}>
          <div className="flex justify-between items-center text-[9px] font-mono font-black tracking-widest opacity-60">
            <span>UW_VERT_9_16</span>
            <span>{poster.tag}</span>
          </div>
          
          <div className="my-auto space-y-2">
            <h2 className="font-mono font-black text-xl tracking-tighter leading-none uppercase break-words">
              {poster.title}
            </h2>
            <p className="text-xs font-bold tracking-wider opacity-80 font-sans break-words leading-tight">
              {poster.subtitle}
            </p>
          </div>

          <div className="text-[9px] font-mono font-bold border-t border-black/10 pt-2 opacity-80">
            <div className="truncate">📅 {poster.date}</div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="w-full h-full relative overflow-hidden bg-[#efe7ff] select-none">
      {/* 潮流 Y2K 网格背景线 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      <div className="absolute left-[48%] top-[-45%] w-[1100px] h-[190%] flex justify-start items-start pointer-events-none">
        
        <div className="w-[240px] flex flex-col flex-none pointer-events-auto animate-tilted-down hover:[animation-play-state:paused]">
          {column1.map((poster, idx) => renderCard(poster, idx))}
        </div>

        <div 
          style={{ marginLeft: '120px' }}
          className="w-[240px] flex flex-col flex-none pointer-events-auto animate-tilted-up hover:[animation-play-state:paused]"
        >
          {column2.map((poster, idx) => renderCard(poster, idx + 20))}
        </div>

        <div 
          style={{ marginLeft: '120px' }}
          className="w-[240px] flex flex-col flex-none pointer-events-auto animate-tilted-down hover:[animation-play-state:paused]"
        >
          {column3.map((poster, idx) => renderCard(poster, idx + 40))}
        </div>

      </div>
    </div>
  )
}