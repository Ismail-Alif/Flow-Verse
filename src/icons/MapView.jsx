const MapView = () => (
    <svg className="w-[4.5rem] h-10 bg-gray-200">
        <line x1="0" y1="0" x2="10" y2="40" strokeWidth="2" className="stroke-white" />
        <line x1="0" y1="30" x2="80" y2="20" strokeWidth="2" className="stroke-white" />
        <line x1="0" y1="40" x2="80" y2="30" strokeWidth="2" className="stroke-white" />
        <line x1="40" y1="0" x2="50" y2="40" strokeWidth="2" className="stroke-white" />
        <line x1="4" y1="20" x2="20" y2="17" strokeWidth="1" className="stroke-white" />
        <line x1="20" y1="17" x2="15" y2="0" strokeWidth="1" className="stroke-white" />
        <line x1="3" y1="10" x2="16" y2="7" strokeWidth="1" className="stroke-white" />
        <line x1="60" y1="56" x2="70" y2="0" strokeWidth="3" className="stroke-white" />
        <path d="m53 24-4-8c-.008-6.304 7.964-6.268 8 0l-4 8" className="fill-gray-400" />
    </svg>
)

export default MapView