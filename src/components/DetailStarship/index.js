import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function DetailStarship({ show, starship }) {
	return (
		<Container show={show}>
			<div className="info">
				<div>
					<strong>Manufacturer</strong>
					<small>{starship.manufacturer}</small>
				</div>

				<div>
					<strong>Starship Class</strong>
					<small>{starship.starship_class}</small>
				</div>

				<div>
					<strong>Hyperdrive Rating</strong>
					<small>{starship.hyperdrive_rating}</small>
				</div>

				<div>
					<strong>Passengers</strong>
					<small>{starship.passengers}</small>
				</div>

				<div>
					<strong>Consumables</strong>
					<small>{starship.consumables}</small>
				</div>

				<div>
					<strong>MGLT</strong>
					<small>{starship.MGLT}</small>
				</div>

				<div>
					<strong>Crew</strong>
					<small>{starship.crew}</small>
				</div>

				<div>
					<strong>Max Atmosphering Speed</strong>
					<small>{starship.max_atmosphering_speed}</small>
				</div>

				<div>
					<strong>Cargo Capacity</strong>
					<small>{starship.cargo_capacity}</small>
				</div>

				<div>
					<strong>Length</strong>
					<small>{starship.length}</small>
				</div>

				<div>
					<strong>Cost In Credits</strong>
					<small>{starship.cost_in_credits}</small>
				</div>
			</div>
		</Container>
	);
}

DetailStarship.propTypes = {
	show: PropTypes.bool.isRequired,
	starship: PropTypes.shape({}),
};
