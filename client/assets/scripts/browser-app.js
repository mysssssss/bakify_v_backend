const passageInputDom = document.getElementById('text');
const passageFormDom = document.getElementById('passage-form');

passageFormDom.addEventListener('submit', async (e) => {
  e.preventDefault();

  const passage = passageInputDom.innerText; // Retrieve value using .value
  console.log(passage);

  try {
    const passageObject = { passage };
    await axios.post('/api/v1/passage', passageObject);
  } catch (err) {
    console.log(err);
  }
});
