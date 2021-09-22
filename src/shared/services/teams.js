import * as baseService from './base';

async function getAll() {
	try {
		const teams = await baseService.get('/api/pickem/teams');
		return teams;
	} catch (error) {
		throw error;
	}
}

async function getOne(id) {
	try {
		const teamDetail = await baseService.get('/api/pickem/teams/' + id);
		return teamDetail;
	} catch (error) {
		throw error;
	}
}

export { getAll, getOne };