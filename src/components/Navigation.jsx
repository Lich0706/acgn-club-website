export default function Navigation({ activeTab, setActiveTab }) {
  const menuItems = [
    { id: 'about', name: 'About Us', color: 'bg-[#e0ccff]', icon: '📦' },
    { id: 'home', name: 'Ongoing Event', color: 'bg-[#f0eaff]', icon: '⭐' }, // 点击它切回主页海报
    { id: 'past', name: 'Past Events', color: 'bg-[#cba6ff]', icon: '🎨' },
    { id: 'collab', name: 'Collab', color: 'bg-[#d6beff]', icon: '🤝' }
  ]

  return (
    <div className="w-[380px] h-full p-8 pt-16 flex flex-col justify-between pointer-events-auto select-none">
      
      <div className="space-y-4 cursor-pointer" onClick={() => setActiveTab('home')}>
        <div className="border-4 border-black p-4 bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] inline-block transform -rotate-1 tracking-tight">
          <h1 className="text-4xl font-extrabold tracking-tighter uppercase font-mono leading-[0.85]">
            ACGN<br />CLUB<br />AT UW
          </h1>
          <div className="text-[9px] font-black border-t-2 border-black mt-2 pt-1 text-right tracking-widest">
            华盛顿大学ACGN社
          </div>
        </div>
        
        <div className="space-y-0.5 text-xs font-bold tracking-tight text-slate-800 bg-[#efe7ff]/80 backdrop-blur-sm inline-block p-1 rounded">
          <p>A Community for ACGN fans</p>
          <p className="text-slate-500 font-medium">@ University of Washington</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 my-auto w-full pr-4">
        {menuItems.map((item) => {
          // 检查该按钮是否对应当前的激活视图
          const isSelected = activeTab === item.id || (item.id === 'home' && activeTab === 'home')
          
          return (
            <div 
              key={item.id}
              onClick={() => {
                // 如果点的是已经激活的，再次点击可以切换状态或回主页
                if (item.id === 'about') setActiveTab('about')
                else if (item.id === 'home') setActiveTab('home')
              }}
              className={`${item.color} border-2 border-black p-3 h-24 flex flex-col justify-between transition-all cursor-pointer
                         ${isSelected 
                           ? 'translate-x-1 translate-y-1 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] ring-2 ring-black/10' 
                           : 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]'
                         }`}
            >
              <div className="text-right text-lg">{item.icon}</div>
              <div className="font-black text-xs leading-tight tracking-tight text-left break-words">
                {item.name}
              </div>
            </div>
          )
        })}
      </div>

      <div className="pt-3 flex items-center justify-between text-[11px] font-black font-mono tracking-wider">
        <span className="hover:underline cursor-pointer bg-white px-1.5 py-0.5 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">小红书 XHS</span>
        <span className="hover:underline cursor-pointer bg-white px-1.5 py-0.5 border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">NEWSLETTER ✉️</span>
      </div>
    </div>
  )
}