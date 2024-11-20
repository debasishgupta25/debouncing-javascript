const debounce = (fun, delay) => {
    let timeoutId;
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fun();
      }, delay);
    };
  };
  
  document.getElementById('btn').addEventListener(
    'click',
    debounce(() => {
      console.log('Clicked');
    }, 400)
  );
  
  document.getElementById('searchText').addEventListener(
    'keyup',
    debounce(() => {
      console.log(document.getElementById('searchText').value);
    }, 2000)
  );
  