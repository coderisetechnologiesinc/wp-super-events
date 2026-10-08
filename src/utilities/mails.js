import axios from "./adminApi";

export const getSentEmails = async (
  {
    event_id,
    occurrence_id,
    event_name,
    email_status,
    date_from,
    date_to,
    q,
    email,
    page,
    page_size,
  } = { page: 1, page_size: 20 },
) => {
  const url = `/wp-json/servv-plugin/v1/mail/sent`;
  const queryParams = new URLSearchParams();
  const append = (key, value) => {
    if (value !== undefined && value !== null) queryParams.append(key, value);
  };
  append("page", page);
  append("page_size", page_size);
  append("event_id", event_id);
  append("occurrence_id", occurrence_id);
  append("event_name", event_name);
  append("date_from", date_from);
  append("date_to", date_to);
  append("status", email_status);
  append("email", email);
  append("q", q);
  try {
    const getEmailsResponse = await axios.get(url, {
      headers: { "X-WP-Nonce": servvData.nonce },
      params: queryParams,
    });
    if (getEmailsResponse && getEmailsResponse.status === 200) {
      return getEmailsResponse.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getEmailContent = async ({ id }) => {
  const url = `/wp-json/servv-plugin/v1/mail/sent/${id}`;
  try {
    const getEmailContentResponse = await axios.get(url, {
      headers: { "X-WP-Nonce": servvData.nonce },
    });
    if (getEmailContentResponse && getEmailContentResponse.status === 200) {
      return getEmailContentResponse.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const getSMTPAccount = async () => {
  const url = `/wp-json/servv-plugin/v1/mail/smtp/account`;
  try {
    const getSMTPAccountResponse = await axios.get(url, {
      headers: { "X-WP-Nonce": servvData.nonce },
    });
    if (getSMTPAccountResponse && getSMTPAccountResponse.status === 200) {
      return getSMTPAccountResponse.data;
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const saveSMTPAccount = async ({
  email,
  host,
  port,
  username,
  password,
}) => {
  const url = `/wp-json/servv-plugin/v1/mail/smtp/account`;
  try {
    const saveSMTPAccountResponse = await axios.post(
      url,
      {
        email,
        host,
        port: port ? parseInt(port, 10) : port,
        username,
        password,
      },
      { headers: { "X-WP-Nonce": servvData.nonce } },
    );
    if (saveSMTPAccountResponse && saveSMTPAccountResponse.status === 200) {
      return { email, host, port, username, password, is_valid: true };
    }
  } catch (e) {
    console.log(e);
    return { error: e.response.status };
  }
};

export const deleteSMTPAccount = async () => {
  const url = `/wp-json/servv-plugin/v1/mail/smtp/account`;
  try {
    const deleteSMTPAccountResponse = await axios.delete(url, {
      headers: { "X-WP-Nonce": servvData.nonce },
    });
    if (deleteSMTPAccountResponse && deleteSMTPAccountResponse.status === 200) {
      return { status: deleteSMTPAccountResponse.status };
    }
  } catch (e) {
    console.log(e);
    return null;
  }
};
