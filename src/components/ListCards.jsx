import React from "react";
import Card from "./Card";

function ListCards({ chickenTab }) {
	// Là je dois générer des Cards.
	const chickens = chickenTab;
	return (
		<>
			{chickens.map((chicken) => (
				<Card
					key={chicken.id}
					imgSrc={chicken.imgSrc}
					name={chicken.name}
					position={chicken.position}
					biography={chicken.biography}
				/>
			))}
		</>
	);
}

export default ListCards;
