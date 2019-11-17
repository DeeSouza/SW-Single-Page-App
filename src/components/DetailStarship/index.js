import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function DetailStarship({ show, starship, onClose }) {
	return (
		<Container show={show}>
			<PerfectScrollbar>
				<div className="header">
					<button type="button" onClick={onClose}>
						<FaTimes color="#ff2727" size={25} />
					</button>
					<strong className="name">{starship.name}</strong>
					<small className="model">{starship.model}</small>
				</div>

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
			</PerfectScrollbar>
		</Container>
	);
}

DetailStarship.propTypes = {
	onClose: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	starship: PropTypes.arrayOf({
		cost_in_credits: PropTypes.string,
		hyperdrive_rating: PropTypes.string,
		max_atmosphering_speed: PropTypes.string,
		consumables: PropTypes.string,
		passengers: PropTypes.string,
		MGLT: PropTypes.string,
		crew: PropTypes.string,
		starship_class: PropTypes.string,
		length: PropTypes.string,
		cargo_capacity: PropTypes.string,
		manufacturer: PropTypes.string,
	}),
};

DetailStarship.defaultProps = {
	starship: [],
};
