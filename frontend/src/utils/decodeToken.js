export function decodeToken() {
    const token = localStorage.getItem('jwt');
    if (!token) {
      console.error("No token found in localStorage");
      return null;
    }
  
    try {
      const payload = token.split('.')[1];
      const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
      const decoded = JSON.parse(atob(base64));
      return decoded;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }
