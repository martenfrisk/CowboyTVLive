import React, { useState } from 'react'
import './styles/tailwind.css'
import './styles/crt.css'
import ReactHowler from 'react-howler'
import WebFont from 'webfontloader'


export default function App() {
	const audiofiles = [ '1-1', '1-2', '1-3', '1-4', '2-1', '2-2', '2-3' ]

  const reset = 0
  const random = () => Math.floor(Math.random() * Math.floor(7))
	const [ trackNumber, setTrackNumber ] = useState(reset)
  const [ shuffle, setShuffle ] = useState(false)
  const [ turnOn, setTurnOn ] = useState(false)

	WebFont.load({
		google: {
			families: ['Amatic SC:400,700', 'cursive']
		}
	})

	return (
		<div className="container">
			<div className="flex items-center justify-center pt-16 w-screen h-screen">
				<div
					className="absolute flex flex-col items-center top-0 z-30 mt-0 md:mt-10 font-hairline text-white"
					style={{ fontFamily: 'Amatic SC, cursive' }}
				>
					<p className="text-4xl md:text-5xl tracking-wide text-center border-b border-white">
						It's not TV, it's <span className="font-semibold">Cowboy TV</span>
					</p>
					<p className="md:pt-2 pt-1 font-serif text-sm md:text-xl italic tracking-widest text-center">
						Enjoy the smooth and drama of Cowboy TV
					</p>
          <button onClick={() => setShuffle(!shuffle)} className="text-lg md:text-2xl focus:outline-none mt-0 md:mt-4 tracking-wide">{shuffle ? 'Disable' : 'Enable'} shuffle</button>
				</div>
        {!turnOn && 
				<div className="absolute z-40 mx-auto w-full md:w-1/2 text-5xl text-center py-40 italic font-serif bg-white bg-opacity-50 cursor-pointer rounded-lg" style={{backdropFilter: 'blur(20px)',  fontFamily: 'Amatic SC, cursive'}} onClick={() => setTurnOn(true)}>Click to watch Cowboy TV</div>}
				
				<img
					style={{ width: 'auto', height: '100%', minWidth: '300px' }}
					src="/cowboytvtv3.png"
					className="z-20 object-none mx-auto shadow-inner"
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
					src="/campfire.gif"
						className="absolute z-10 w-full h-full"
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
