import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params }) => {
	return {
		slug: params.donationSlug
	};
};
