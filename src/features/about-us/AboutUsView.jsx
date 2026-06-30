export default function AboutUsView() {
  const subBlocks = [
    { 
      id: 'anime', 
      title: 'Anime', 
      desc: '动画研究 / 独家放映会 / 季度新番吐槽', 
      bg: 'bg-gradient-to-br from-[#fff0f5] to-[#ffe4e1] text-[#904870]',
      tag: 'A',
      badge: 'ANIMATION'
    },
    { 
      id: 'comics', 
      title: 'Comics & Cosplay', 
      desc: '同人创作 / 漫展勾搭 / Cosplay 舞台剧排练', 
      bg: 'bg-gradient-to-br from-[#e6f2ff] to-[#e8f5e9] text-[#2e6b5e]',
      tag: 'C',
      badge: 'MANGA & COS'
    },
    { 
      id: 'games', 
      title: 'Games', 
      desc: '二次元手游 / 主机开黑 / 社团内部电竞赛', 
      bg: 'bg-gradient-to-br from-[#f3e5f5] to-[#ede7f6] text-[#5e35b1]',
      tag: 'G',
      badge: 'PC & MOBILE'
    },
    { 
      id: 'novels', 
      title: 'Novels', 
      desc: '轻小说交流 / 设定推推演 / 脑洞创作补完计划', 
      bg: 'bg-gradient-to-br from-[#fffde7] to-[#fff9c4] text-[#795548]',
      tag: 'N',
      badge: 'LIGHT NOVEL'
    },
  ]

  return (
    <div className="absolute left-[420px] top-0 w-[calc(100%-420px)] h-full relative bg-[#efe7ff] select-none flex items-center justify-center px-12">
      
      {/* 潮流 Y2K 微弱网格背景线 */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      <div className="grid grid-cols-2 gap-5 flex-none">
        {subBlocks.map((block) => (
          <div
            key={block.id}
            style={{
              width: '260px',
              height: '180px'
            }}
            className={`${block.bg} border-2 border-black p-4 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] 
                        transition-all duration-300 ease-out cursor-pointer relative overflow-hidden group flex flex-col justify-between
                        hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[9px_9px_0px_0px_rgba(0,0,0,1)]`}
          >
            {/* 顶端标签 */}
            <div className="flex justify-between items-center text-[8px] font-mono font-black tracking-widest opacity-60 border-b border-black/10 pb-1.5">
              <span>UW_DIVISION // {block.badge}</span>
              <span>{block.tag}</span>
            </div>

            {/* 内容文案 */}
            <div className="my-auto pt-1">
              <h2 className="font-mono font-extrabold text-2xl tracking-tighter uppercase transition-all group-hover:tracking-normal">
                {block.title}
              </h2>
              <p className="text-[10px] font-bold font-sans tracking-wide leading-normal opacity-80 mt-1 line-clamp-2">
                {block.desc}
              </p>
            </div>

            {/* 底部微弱修饰线 */}
            <div className="text-[7px] font-mono font-black tracking-widest opacity-40 text-right">
              SYSTEM_READY_
            </div>

            {/* 底层 Y2K 巨型水印 */}
            <div className="absolute right-2 bottom-[-10px] text-8xl font-black font-mono opacity-[0.05] select-none pointer-events-none transform group-hover:scale-110 transition-transform duration-500">
              {block.tag}
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}