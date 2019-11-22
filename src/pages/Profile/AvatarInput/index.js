import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@rocketseat/unform';
import { useSelector } from 'react-redux';
import { Container } from './styles';
import api from '~/services/api';

export default function AvatarInput() {
  const profile = useSelector(state => state.user.profile);

  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField('avatar');

  const [preview, setPreview] = useState(defaultValue && defaultValue.url);
  const [file, setFile] = useState(defaultValue && defaultValue.id);

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref.current, fieldName]);

  async function handleChange(e) {
    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img
          src={
            preview ||
            `https://ui-avatars.com/api/?background=7159c1&color=fff&name=${profile.name}&size=128`
          }
          alt=""
        />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={handleChange}
          data-file={file}
          ref={ref}
        />
        {error && <span>{error}</span>}
      </label>
    </Container>
  );
}
