import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Message from '../components/Message';
import { client } from '../utils/axiosInstance';

const ConfirmEmail = () => {
  let { emailToken } = useParams();
  const [db, setDb] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    const getData = async () => {
      const result = await client
        .get(`/confirm/${emailToken}`)
        .then((res) => res)
        .catch((err) => console.log(err));
      setDb(result.data);
    };
    getData();
    setTimeout(() => {
      navigation('/login');
    }, 5000);
  }, []);
  return (
    <div className="subtitle_centered">
      {db.sucess === false ? (
        <Message msg={db.message} bgColor="#ff0000" />
      ) : (
        <Message msg={db.message} bgColor="#198754" />
      )}
    </div>
  );
};

export default ConfirmEmail;
