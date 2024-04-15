// import { useState } from "react"
// import {
//   Carousel,
//   CarouselItem,
//   CarouselControl,
//   CarouselIndicators,
//   CarouselCaption,
// } from "reactstrap"
// import Apartment1 from "../assets/apartments/apartment1.avif"
// import Apartment2 from "../assets/apartments/apartment2.avif"
// import Apartment3 from "../assets/apartments/apartment3.avif"
// import Apartment4 from "../assets/apartments/apartment4.avif"
// import Apartment5 from "../assets/apartments/apartment5.avif"

// // const items = [
// // 	{
// // 		src: Apartment1,
// // 		altText: "Slide 1",
// // 		caption: "Slide 1",
// // 		key: 1,
// // 	},
// // 	{
// // 		src: Apartment2,
// // 		altText: "Slide 2",
// // 		caption: "Slide 2",
// // 		key: 2,
// // 	},
// // 	{
// // 		src: Apartment3,
// // 		altText: "Slide 3",
// // 		caption: "Slide 3",
// // 		key: 3,
// // 	},
// // 	{
// // 		src: Apartment4,
// // 		altText: "Slide 4",
// // 		caption: "Slide 4",
// // 		key: 4,
// // 	},
// // 	{
// // 		src: Apartment5,
// // 		altText: "Slide 5",
// // 		caption: "Slide 5",
// // 		key: 5,
// // 	},
// // ]

// // const CarouselComponent = () => {
// // 	const [activeIndex, setActiveIndex] = useState(0)
// // 	const [animating, setAnimating] = useState(false)

// // 	const next = () => {
// // 		if (animating) return
// // 		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
// // 		setActiveIndex(nextIndex)
// // 	}

// // 	const previous = () => {
// // 		if (animating) return
// // 		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
// // 		setActiveIndex(nextIndex)
// // 	}

// // 	const goToIndex = (newIndex) => {
// // 		if (animating) return
// // 		setActiveIndex(newIndex)
// // 	}

// // 	const slides = items.map((item) => {
// // 		return (
// // 			<CarouselItem
// // 				onExiting={() => setAnimating(true)}
// // 				onExited={() => setAnimating(false)}
// // 				key={item.src}
// // 			>
// // 				<img src={item.src} alt={item.altText} className="image" />
// // 				<CarouselCaption
// // 					captionText={item.caption}
// // 					captionHeader={item.caption}
// // 				/>
// // 			</CarouselItem>
// // 		)
// // 	})

// // 	return (
// // 		<Carousel activeIndex={activeIndex} next={next} previous={previous}>
// // 			<CarouselIndicators
// // 				items={items}
// // 				activeIndex={activeIndex}
// // 				onClickHandler={goToIndex}
// // 			/>
// // 			{slides}
// // 			<CarouselControl
// // 				direction="prev"
// // 				directionText="Previous"
// // 				onClickHandler={previous}
// // 			/>
// // 			<CarouselControl
// // 				direction="next"
// // 				directionText="Next"
// // 				onClickHandler={next}
// // 			/>
// // 		</Carousel>
// // 	)
// // }

// export default CarouselComponent
