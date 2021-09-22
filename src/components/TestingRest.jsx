import { useState, useEffect } from 'react';
import { teamsService } from '../shared/services';

import LoadingCard from './LoadingCard';

const TestingRest = () => {
	const [teams, setTeams] = useState({
		loading: true,
		error: null,
		data: []
	});

	useEffect(() => {
		teamsService
			.getAll()
			.then(data => setTeams(prev => ({ ...prev, data, loading: false })))
			.catch(error => setTeams(prev => ({ ...prev, error, loading: false })));
	}, []);

	if (teams.loading) return <LoadingCard count={3} />;
	if (teams.error)
		return (
			<div className="w-1/2 p-4 mx-auto text-red-900 bg-red-100 border border-red-500 rounded-lg shadow-sm">
				Fuck: {teams.error.message}
			</div>
		);

	return (
		<div className="flex flex-wrap px-2 overflow-hidden lg:-mx-2 xl:-mx-2">
			{teams.data.map(team => (
				<div
					key={team.id}
					className="w-full my-1 overflow-hidden lg:my-2 lg:px-2 lg:w-1/3 xl:my-2 xl:px-2 xl:w-1/3">
					<div
						style={{
							color: hexToRgb(team.primary_color),
							borderColor: hexToRgb(team.primary_color)
						}}
						className="py-6 text-2xl text-center border-2 rounded">
						{team.full_name}
					</div>
				</div>
			))}
		</div>
	);
};

export default TestingRest;

/* testing some dumb shit */
function hexToRgb(hex, a = 1) {
	var bigint = parseInt(hex, 16);
	var r = (bigint >> 16) & 255;
	var g = (bigint >> 8) & 255;
	var b = bigint & 255;

	return `rgba(${r}, ${g}, ${b}, ${a})`;
}
