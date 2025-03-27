import { Baby, House, Rss } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import React from 'react'

export const Menu = () => {
    const navigate = useNavigate()
  return (
<ul className="menu menu-horizontal bg-base-200 rounded-box fixed bottom-0 z-10 w-full shadow-sm h-16 flex justify-around items-center">
  <li>
    <a onClick={() => navigate('/')}>
    <House />
    </a>
  </li>
  <li>
    <a onClick={() => navigate('/baby')}>
    <Baby />
    </a>
  </li>
  <li>
    <a onClick={() => navigate('/noticias')}>
    <Rss />
    </a>
  </li>
</ul>
  )
}
