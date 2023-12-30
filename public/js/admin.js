import axios from 'axios';
import { showAlert } from './alerts';

const catchAsync = require('../../utils/catchAsync');

export const UserUpdate = async (id, body) => {
  for (const entry of body.entries()) {
    console.log(`${entry}`);
  }
  try {
    const url = `/api/v1/users/${id}`;
    const res = await axios.patch(url, body);

    if (res.data.status === 'success')
      showAlert('success', `User updated successfully ${body}`);
  } catch (error) {
    showAlert('error', error);
  }
};

export const handleEditModal = (modalContainer, id, e) => {
  const submitButton = document.querySelector('#submit');
  const dropdown = document.querySelector('#role');
  let selectedOptionValue;
  dropdown.addEventListener('change', (event) => {
    selectedOptionValue = event.target.value;
    console.log(`User picked: ${selectedOptionValue}`);
  });
  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const form = new FormData();
    if (document.getElementById('name').value)
      form.append('name', document.getElementById('name').value);
    if (document.getElementById('email').value)
      form.append('email', document.getElementById('email').value);
    if (document.getElementById('password').value)
      form.append('password', document.getElementById('password').value);
    if (document.getElementById('photo').files[0])
      form.append('photo', document.getElementById('photo').files[0]);
    if (selectedOptionValue) form.append('role', selectedOptionValue);
    await UserUpdate(id, form);
  });

  modalContainer.style.display = 'flex';

  if (e.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
};
