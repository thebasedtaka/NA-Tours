import axios from 'axios';
import { showAlert } from './alerts';

export const UserUpdate = async (id, body) => {
  try {
    const url = `/api/v1/users/${id}`;
    const res = await axios.patch(url, body);

    if (res.data.status === 'success') {
      showAlert('success', `User updated successfully ${body}`);
      window.location.reload();
    }
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
  });
  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const form = new FormData();

    form.append('name', document.getElementById('name').value);

    form.append('email', document.getElementById('email').value);

    form.append('password', document.getElementById('password').value);

    form.append('photo', document.getElementById('photo').files[0]);
    form.append('role', selectedOptionValue);
    await UserUpdate(id, form, modalContainer);
  });

  modalContainer.style.display = 'flex';

  if (e.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
};

export const handleDeleteUser = async (id) => {
  try {
    const url = `/api/v1/users/${id}`;
    const res = await axios.delete(url);
    if (res.status === 204 || res.status === 200) {
      showAlert('success', 'User deleted successfully');
      window.location.reload();
    } else {
      // Handle other status codes or errors
      console.error(`Unexpected status code: ${res.status}`);
    }
  } catch (error) {
    showAlert('error', error);
  }
};
