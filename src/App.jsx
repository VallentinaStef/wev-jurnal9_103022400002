import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
// import './App.css'
import Panel from './components/Panel'
import KartuMenu from './components/KartuMenu'

function App() {
  const [count, setCount] = useState(0)
  const jam = 9;
  const harga = 1000;

  return (
    <>
      <h1 className="judul" style={{color: "pink"}}>Kantin Tepani</h1>
      <p className="deskripsi">Selamat {jam < 12 ? "pagi" : "siang"}</p>
      <p> Saldo awal kartu kantin : {harga * 1000}</p>  
      <button>Bayar</button>

      <Panel judul = "Menu Hari ini">
        <KartuMenu nama=" Nasi Ayam Geprek"  harga={13.700}> </KartuMenu>
         <KartuMenu nama=" Es Teh Lemon" kategori="Minuman" harga={6000}> </KartuMenu>
         <KartuMenu nama=" Nasi Ayam Geprek" harga={13.700}> </KartuMenu>
      </Panel>

    </>
  )
}

export default App
