import api from '.';

const ENDPOINT = {
  ACCOUNT: '/accounts',
};

const getAllAccounts = async () => {
  try {
    const accounts = await api.get(ENDPOINT.ACCOUNT);
    return accounts;
  } catch (err) {
    console.error(err);
  }
};

const getSelectedAccount = async (slug) => {
  try {
    const SelectedAccount = await api.get(`${ENDPOINT.ACCOUNT}?filters[slug][$eqi]=${slug}&populate=*`);
    return SelectedAccount;
  } catch (error) {}
};

export { getAllAccounts, getSelectedAccount };
