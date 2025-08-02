import { BaseApi } from "./baseApi";

class UsersApi extends BaseApi {
  async getUsers() {
    try {
      const response = await this.api.get(`${this.endpoints.USERS}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  }
}

export default new UsersApi();
