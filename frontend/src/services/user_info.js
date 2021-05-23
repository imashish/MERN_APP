import http from '../http-client/http-common';

class UserInfoService {
	createContactUs(data) {
		return http.post('/addInfo/contactUs', data);
	}
}

export default new UserInfoService();
