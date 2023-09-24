const saveColor = (id: string): void => {
  const input = document.querySelector(`#${id}`) as HTMLInputElement;
  input.addEventListener('change', (e) => {
    const target = e.target as HTMLInputElement;
    input.setAttribute('data-value', target?.value);
  });
};

export default saveColor;
