import axios from 'axios';
import { showAlert } from './alerts';

export const handleUserModal = (modalContainer, id, e) => {
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
    //await UserUpdate(id, form, modalContainer);
    await handleRequest(id, 'patch', 'users', form);
  });
  console.log(modalContainer);
  modalContainer.style.display = 'flex';

  if (e.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
};

export const handleTourModal = (modalContainer, id, e) => {
  const submitButton = document.querySelector('#submit');
  const dropdown = document.querySelector('#difficultyDropdown');
  const date = document.getElementById('date');
  let difficultyValue;
  let dateValue;

  dropdown.addEventListener('change', (event) => {
    difficultyValue = event.target.value;
  });

  date.addEventListener('change', (event) => {
    dateValue = event.target.value;
    console.log(dateValue);
  });

  submitButton.addEventListener('click', async (e) => {
    e.preventDefault();

    const form = new FormData();

    form.append('name', document.querySelector('#tourName').value);
    form.append('difficulty', difficultyValue);
    form.append('duration', document.querySelector('#durationInput').value);
    form.append(
      'maxGroupSize',
      document.querySelector('#maxGroupSizeInput').value
    );

    form.append('startDates', dateValue);
    form.append('price', document.querySelector('#price').value);
    form.append(
      'description',
      document.querySelector('#tourDescription').value
    );
    handleRequest(id, 'patch', 'tours', form);
  });

  modalContainer.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Disable scrolling on the body

  const closeModal = () => {
    document.body.style.overflow = 'auto'; // Enable scrolling on the body
    console.log('closing');
    modalContainer.style.display = 'none';
    modalContainer.removeEventListener('click', closeModal);
  };

  if (e.target === modalContainer) {
    closeModal();
  }
};

export const handleRequest = async (id, method, route, data) => {
  console.log(id, method, route, data);
  try {
    const url = `/api/v1/${route}/${id}`;
    const res = await axios({
      method,
      url,
      data,
    });
    if (res.status === 204 || res.status === 200) {
      showAlert('success', `Tour ${method} successful`);
      window.location.reload();
    } else {
      // Handle other status codes or errors
      console.error(`Unexpected status code: ${res.status}`);
    }
  } catch (error) {
    showAlert('error', error);
  }
};
