
export const FormattedDate = () => {
  const getCurrentDate = () => {
    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');

    return `${year}/${month}/${day}`;
  };

  return (
    getCurrentDate()
  );
};

export const generarID = () => {
  let id = '';

  for (let i = 0; i < 5; i++) {
    const digitoAleatorio = Math.floor(Math.random() * 10);
    id += digitoAleatorio;
  }

  return id;
};

export const sliceDate = (date) => {
  return date.slice(0, 10);
} 