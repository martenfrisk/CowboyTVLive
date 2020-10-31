import React, { useState } from 'react'
import './styles/tailwind.css'
import ReactHowler from 'react-howler'

export default function App() {
	const audiofiles = [ '1-1', '1-2', '1-3', '1-4', '2-1', '2-2', '2-3' ]

  const reset = 0
  const random = () => Math.floor(Math.random() * Math.floor(7))
	const [ trackNumber, setTrackNumber ] = useState(reset)
  const [ shuffle, setShuffle ] = useState(false)
  const [ turnOn, setTurnOn ] = useState(false)

	return (
		<div className="container">
			<div className="flex items-center justify-center w-screen h-screen">
				<div
					className="absolute flex flex-col items-center top-0 z-30 mt-10 font-hairline text-white"
					style={{ fontFamily: 'Amatic SC, cursive' }}
				>
					<p className="text-5xl tracking-wide text-center border-b border-white">
						It's not TV, it's <span className="font-semibold">Cowboy TV</span>
					</p>
					<p className="pt-2 font-serif text-xl italic tracking-widest text-center">
						Enjoy the smooth and drama of Cowboy TV
					</p>
          <button onClick={() => setShuffle(!shuffle)} className="text-2xl focus:outline-none mt-4 tracking-wide">Shuffle {shuffle ? 'off' : 'on'}</button>
				</div>
        {!turnOn && 
				<div className="absolute z-40 mx-auto w-full md:w-1/2 text-5xl text-center py-40 italic font-serif bg-white bg-opacity-50 cursor-pointer rounded-lg" style={{backdropFilter: 'blur(20px)',  fontFamily: 'Amatic SC, cursive'}} onClick={() => setTurnOn(true)}>Click to watch Cowboy TV</div>}
				<img
					src="/cowboytvtv3.png"
					className="z-20 object-none mx-auto shadow-inner"
					style={{ width: 'auto', height: '100%', minWidth: '300px' }}
					alt=""
				/>
				<div
					className="absolute"
					style={{
						maxWidth: '250px',
						minHeight: '250px',
						height: 'auto',
						width: '250px',
						overflow: 'hidden'
					}}
				>
					<img
						className="absolute z-0 w-full h-full"
						src="/campfire.gif"
						style={{ transform: 'translateY(-5%)' }}
						alt=""
					/>
					<div
						className="absolute z-10 w-full h-full crt"
						style={{ minWidth: '350px', minHeight: '350px', backgroundColor: 'rgba(255,255,255,0.2)' }}
					>
						&nbsp;
					</div>
				</div>
        {shuffle ? 
				<ReactHowler
					src={`/${audiofiles[trackNumber]}.mp3`}
					playing={turnOn}
					onEnd={() => setTrackNumber(() => random())}
				/> : 
				<ReactHowler
					src={`/${audiofiles[trackNumber]}.mp3`}
					playing={turnOn}
					onEnd={() => {
						if (trackNumber === 6) {
							setTrackNumber(() => 0)
						} else {
							setTrackNumber(() => trackNumber + 1)
						}
					}}
				/>
        }
			</div>
		</div>
	)
}