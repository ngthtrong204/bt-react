import React from 'react'
import styles from './main.module.scss'


function GlassList({onChangeData}) {
	let dataGlass = [
		{
			id: 1,
			price: 30,
			name: "GUCCI G8850U",
			url: "./glassesImage/v1.png",
			desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
		},
		{
			id: 2,
			price: 50,
			name: "GUCCI G8759H",
			url: "./glassesImage/v2.png",
			desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
		},
		{
			id: 3,
			price: 30,
			name: "DIOR D6700HQ",
			url: "./glassesImage/v3.png",
			desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
		},
		{
			id: 4,
			price: 70,
			name: "DIOR D6005U",
			url: "./glassesImage/v4.png",
			desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
		},
		{
			id: 5,
			price: 40,
			name: "PRADA P8750",
			url: "./glassesImage/v5.png",
			desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
		},
		{
			id: 6,
			price: 60,
			name: "PRADA P9700",
			url: "./glassesImage/v6.png",
			desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
		},
		{
			id: 7,
			price: 80,
			name: "FENDI F8750",
			url: "./glassesImage/v7.png",
			desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
		},
		{
			id: 8,
			price: 100,
			name: "FENDI F8500",
			url: "./glassesImage/v8.png",
			desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
		},
		{
			id: 9,
			price: 60,
			name: "FENDI F4300",
			url: "./glassesImage/v9.png",
			desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
		}
	]
	return (
		<div className={styles.glassList}>
			<div className={styles.glassImg} onClick={() => onChangeData(dataGlass[0])} >
				<img src="./glassesImage/g1.jpg" className='w-100' alt="g1" />
			</div>
			<div className={styles.glassImg} onClick={() => onChangeData(dataGlass[1])} >
				<img src="./glassesImage/g2.jpg" className='w-100' alt="g2" />
			</div>
			<div className={styles.glassImg} onClick={() => onChangeData(dataGlass[2])} >
				<img src="./glassesImage/g3.jpg" className='w-100' alt="g3" />
			</div>
			<div className={styles.glassImg} onClick={() => onChangeData(dataGlass[3])} >
				<img src="./glassesImage/g4.jpg" className='w-100' alt="g4" />
			</div>
			<div className={styles.glassImg} onClick={() => onChangeData(dataGlass[4])} >
				<img src="./glassesImage/g5.jpg" className='w-100' alt="g5" />
			</div>
			<div className={styles.glassImg} onClick={() => onChangeData(dataGlass[5])} >
				<img src="./glassesImage/g6.jpg" className='w-100' alt="g6" />
			</div>
			<div className={styles.glassImg} onClick={() => onChangeData(dataGlass[6])} >
				<img src="./glassesImage/g7.jpg" className='w-100' alt="g7" />
			</div>
			<div className={styles.glassImg} onClick={() => onChangeData(dataGlass[7])} >
				<img src="./glassesImage/g8.jpg" className='w-100' alt="g8" />
			</div>
			<div className={styles.glassImg} onClick={() => onChangeData(dataGlass[8])} >
				<img src="./glassesImage/g9.jpg" className='w-100' alt="g9" />
			</div>
		</div>
	)
}

export default GlassList