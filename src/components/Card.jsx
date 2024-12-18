function Card({ imgSrc, name, position, biography }) {
	return (
		<div>
			<img src={imgSrc} alt={name} />
			<h2>{name}</h2>
			<h3>{position}</h3>
			<p>{biography}</p>
		</div>
	);
}

export default Card;
