import axios from 'axios';

export const loginApi = async (email, password) => {
  try {
    const response = await axios.post('http://localhost:3000/login', {
      email,
      password
    }, {
      withCredentials: true // This is important for maintaining the session
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error)
    return {
        error:true,
        message:'Login error:'+ (error.message ? error.message :'Unexpected error! kindly login in sometime')
    }
  }
};

export const signupApi = async (name, email, password) => {
    try {
      const response = await axios.post('http://localhost:3000/signup', {
        name,
        email,
        password
      }, {
        withCredentials: true
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
        return {
            error:true,
            message:'Signup error:'+ (error.response ? error.response.data : error.message)
        }
    }
  };

  export const getStocksApi = async () => {
    try {
      const response = await axios.get('http://localhost:3000/stocks', {
        withCredentials: true
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
        return {
            error:true,
            message:'Fetch stocks error:'+ (error.response ? error.response.data : error.message)
        }
    }
  };

  console.log(await getStocksApi())